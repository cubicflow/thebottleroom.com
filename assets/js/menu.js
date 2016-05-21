///////////
// SNIPCART BAR & SNIPCART SETTINGS
///////////

if (typeof theBottleRoom !== 'object') {
  window.theBottleRoom = {};
}

theBottleRoom.menu = (function(){

  const cartBar = document.querySelector('#cart-bar');
  const buyButtons = document.querySelectorAll('.snipcart-add-item');
  const statusBar = document.querySelector('#menu-status-bar');
  let orderingEnabled = document.body.classList.contains('can-order');
  let isInitialized = false;
  let itemsCount = 0;

  const schedule = window.data.schedule

  const updateOpenToday = function(dayofweekName){

    dayofweekName = dayofweekName.toLowerCase();

    const openTodayLabel = document.querySelector('#open-today');
    const todayOpenTime = militaryToStandardTime(schedule[dayofweekName].open);
    const todayCloseTime = militaryToStandardTime(schedule[dayofweekName].restaurantClose);

    if (openTodayLabel){
      openTodayLabel.innerHTML = "Open Today: " + todayOpenTime + ' - ' + todayCloseTime;
    }

  };

  const militaryToStandardTime = function(militaryTime){
    let hours = militaryTime.slice(0, 2);
    let minutes = militaryTime.slice(3, 5);
    let period = '';

    if (
      militaryTime.length != 5 ||
      hours > 24 ||
      minutes > 59 ||
      militaryTime.slice(2, 3) != ':'
    ){
      console.warn(militaryTime + ' is not a valid 24hr time');
      return;
    }


    if (hours > 12) {
      period = 'PM';
      hours = hours - 12;
    } else if (hours == 12) {
      period = 'PM';
    } else if (hours < 12) {
      period = 'AM';
    } else if (hours == 24) {
      period = 'AM';
    }

    hours = hours == '00' ? 12 : removeZeroPad(hours);

    return hours + ':' + minutes + ' ' + period;
  }


  const showBarIfNeeded = function(){

    itemsCount = Snipcart.api.getItemsCount();

    if (itemsCount > 0 && orderingEnabled){
      cartBar.classList.add('active');
    } else {
      cartBar.classList.remove('active');
    }

  };



  const disableOrdering = function(){

    for (let i = 0; i < buyButtons.length; i++){

      buyButtons[i].classList.add('disabled');

      let buyButtonText = buyButtons[i].querySelector('span');
      buyButtonText.innerHTML = 'Ordering Disabled';

    }


    Snipcart.api.closeCart();

    orderingEnabled = false;

  };



  const enableOrdering = function(){

    for (let i = 0; i < buyButtons.length; i++){

      buyButtons[i].classList.remove('disabled');

      let buyButtonText = buyButtons[i].querySelector('span');
      buyButtonText.innerHTML = 'Add to Order';

    }

    orderingEnabled = true;

  };


  const showStatus = function(statusMessage){

    if(statusBar){
      statusBar.innerHTML = statusMessage;
      statusBar.classList.add('active');
    }

  };


  const zeroPad = function(number, decimalPlaces){

    let numLength = number.toString().length;

    if (numLength >= decimalPlaces){
      return number;
    }

    for (numLength; numLength < decimalPlaces; numLength++){
      number = '0' + number;
    }

    return number;

  };


  const removeZeroPad = function(number){

    while(number.toString().slice(0,1) == '0'){
      number = number.toString().slice(1);
    }
    return number;

  };



  const isTimeWithin = function(time, start, end){

    const currentTimeHours = time.slice(0, 2);
    const currentTimeMinutes = time.slice(3, 5);

    const startTimeHours = start.slice(0, 2);
    const startTimeMinutes = start.slice(3, 5);
    const endTimeHours = end.slice(0, 2);
    const endTimeMinutes = end.slice(3, 5);

    if(currentTimeHours > startTimeHours && currentTimeHours < endTimeHours){
      return true;

    } else if (currentTimeHours == startTimeHours){

      if(currentTimeMinutes >= startTimeMinutes){
        return true;
      } else {
        return false;
      }

    } else if (currentTimeHours == endTimeHours){

      if(currentTimeMinutes <= endTimeMinutes){
        return true;
      } else {
        return false;
      }

    } else {
      return false;
    }

  };


  const isOrderingOpen = function(dateObject){

    const weekDayName = dateObject.dayofweekName.toLowerCase();
    const currentTimeHours = zeroPad(dateObject.hours, 2);
    const currentTimeMinutes = zeroPad(dateObject.minutes, 2);
    const currentTime = currentTimeHours + ":" + currentTimeMinutes;

    const orderingOpen = isTimeWithin(currentTime, schedule[weekDayName].open, schedule[weekDayName].close);

    console.log(currentTime);

    if(orderingOpen){
      return true;
    } else {
      return false;
    }

  };


  const willCloseSoon = function(dateObject){

    const weekDayName = dateObject.dayofweekName.toLowerCase();

    const currentTimeHours = zeroPad(dateObject.hours, 2);
    const currentTimeMinutes = zeroPad(dateObject.minutes, 2);
    const currentTime = currentTimeHours + ":" + currentTimeMinutes;

    const closeHours = schedule[weekDayName].close.slice(0, 2);
    const closeMinutes = schedule[weekDayName].close.slice(3, 5);
    const beforeClose = zeroPad(closeHours - 1, 2) + ':' + closeMinutes;

    return isTimeWithin(currentTime, beforeClose, schedule[weekDayName].close);

  }


  const getDateTime = function(callback){

    // Check sessionStorage for date object
    let storedDateObject = sessionStorage.getItem('dateTime');

    if(storedDateObject){

      // parse object from sessionStorage
      let parsedDateObject = JSON.parse(storedDateObject);

      // Update the stored object with time passed
      updateDateObject(parsedDateObject, function(err, updatedDateObject){
        if (err) {
          // If there is error clear sessionStorage and try again
          sessionStorage.clear();
          getDateTime(callback);
          return
        }
        if (callback && updatedDateObject) {
          callback(updatedDateObject);
          return
        }
      });

    } else {
      $.getJSON( "https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec?tz=America/Los_Angeles&callback=?", function( data ) {

        const dateObject = {
          day: data.day,
          dayofweekName: data.dayofweekName,
          hours: data.hours,
          minutes: data.minutes,
          localTime: new Date()
        }

        sessionStorage.setItem('dateTime', JSON.stringify(dateObject));
        if (callback) {
          callback(dateObject);
          return
        }
      });
    }

  };

  const updateDateObject = function(dateObject, callback){

    let now = new Date();
    let then = new Date(dateObject.localTime);

    // time difference in ms
    var timeDiff = now - then;
    // strip the ms
    timeDiff /= 1000;

    // get seconds
    var seconds = Math.round(timeDiff % 60);
    // remove seconds from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get minutes
    var minutes = Math.round(timeDiff % 60);
    // remove minutes from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get hours
    var hours = Math.round(timeDiff % 24);
    // remove hours from the date
    timeDiff = Math.floor(timeDiff / 24);

    // the rest of timeDiff is number of days
    var days = timeDiff;

    // console.log(minutes);
    // console.log(hours);
    // console.log(days);

    dateObject.hours = dateObject.hours + hours;
    dateObject.minutes = dateObject.minutes + minutes;

    if (dateObject.minutes >= 60) {
      dateObject.minutes = dateObject.minutes - 60;
      dateObject.hours = dateObject.hours + 1;
    }

    if (dateObject.hours >= 24 || days > 0) {
      return callback('error');
    }

    return callback(null, dateObject);

  }

  const checkAgainNextMin = function(){

    window.setTimeout(function(){
      init();
    }, 30000)

  };


  const init = function(){

    getDateTime(function(dateTime){

      updateOpenToday(dateTime.dayofweekName);

      if(!orderingEnabled) {
          return;
      }

      if (isOrderingOpen(dateTime)){

        enableOrdering();
        showBarIfNeeded();

        if(willCloseSoon(dateTime)){
          const todayCloseTime = militaryToStandardTime(schedule[dateTime.dayofweekName.toLowerCase()].close);
          showStatus('Ordering will be disabled at ' + todayCloseTime);
        }

      } else {
        disableOrdering();
        showBarIfNeeded();
        showStatus('Ordering is disabled');
      };

    });

    if (!isInitialized) {
      Snipcart.subscribe('cart.opened', theBottleRoom.disableBodyScroll);
      Snipcart.subscribe('cart.closed', theBottleRoom.enableBodyScroll);
      isInitialized = true;
    }

    checkAgainNextMin();

  };


  return {
    init: init
  };


})();
