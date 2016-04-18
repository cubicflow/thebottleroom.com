// --------------------------------------------------
// APP.JS
// --------------------------------------------------

//
// Initialize Foundation
// --------------------------------------------------

$(document).foundation();

//
// Custom JS
// --------------------------------------------------



$(function() {

  //
  // CF-IMGSWAP WITH CUSTOM OPTIONS
  //
  var opts = {
    responsiveClass: '.cf-responsive',
    mediumSuffix: '--medium',
    largeSuffix: '--large',
    retinaSuffix: '@2x',
    addMediumSuffix: true,
    addLargeSuffix: true,
    addRetinaSuffix: true,
    smallBrowserWidth: 600,
    mediumBrowserWidth: 1025,
    largeBrowserWidth: 1280
  };
  var responsiveImages = cf.imgSwap(opts);


  //
  // MAPS iframe disable/enable
  //
  const locationMap = document.getElementById('location-map');
  if (locationMap){
    locationMap.addEventListener('click', function(){
      locationMap.classList.add('active');
    });
  }


  //
  // Hours Modal
  //
  const openModalBtn = document.querySelector('#open-hours-modal');
  const hoursModal = document.querySelector('#hours-modal');
  const closeModalBtn = hoursModal.querySelector('.modal__close');
  const modalOverlay = hoursModal.querySelector('.modal__overlay');

  if (openModalBtn && hoursModal && closeModalBtn) {

    openModalBtn.addEventListener('click', function(){
      hoursModal.classList.add('active');
      disableBodyScroll();
    });

    closeModalBtn.addEventListener('click', function(){
      hoursModal.classList.remove('active');
      enableBodyScroll();
    });

    modalOverlay.addEventListener('click', function(){
      hoursModal.classList.remove('active');
      enableBodyScroll();
    });

  }


  const disableBodyScroll = function(){

    const htmlElem = document.querySelector('html');
    const bodyElem = document.querySelector('body');

    if(cf.isSmallBrowser(opts)){
      htmlElem.style.overflow = 'hidden';
      bodyElem.style.overflow = 'hidden';
      bodyElem.style.position = 'fixed';
      console.log('scroll disabled');
    }

  }

  const enableBodyScroll = function(){

    const htmlElem = document.querySelector('html');
    const bodyElem = document.querySelector('body');

    htmlElem.style.overflow = 'auto';
    bodyElem.style.overflow = 'auto';
    bodyElem.style.position = 'static';

  }


  //
  // MOBILE NAVIGATION
  //
  const expandBtn = document.querySelector('.nav__expand');
  const mobileNav = document.querySelector('.nav-expanded');


  document.querySelector('#close-nav').addEventListener('click', function(){
    mobileNav.classList.remove('active');
    expandBtn.classList.remove('active');
    mobileNav.classList.remove('drilldown-active');

    enableBodyScroll();

  });

  document.querySelector('#open-nav').addEventListener('click', function(){
    mobileNav.classList.add('active');
    expandBtn.classList.add('active');

    disableBodyScroll();

  });

  document.querySelector('#nav-more').addEventListener('click', function(){
    mobileNav.classList.add('drilldown-active');
  });

  document.querySelector('#nav-back').addEventListener('click', function(){
    mobileNav.classList.remove('drilldown-active');
  });



  //
  // FADE IN SLIDES IF VISIBLE
  //
	const slides = document.querySelectorAll('.slide');

	window.addEventListener('scroll', function(){
		window.requestAnimationFrame(fadeIfVisible);
	});

	var fadeIfVisible = function(){
		var scrollTop  = window.pageYOffset || document.documentElement.scrollTop;
		for (let i = 0; i < slides.length; i++){
			var slideBottomPos = slides[i].getBoundingClientRect().top;
			if (slideBottomPos < 100){
				slides[i].classList.add('active');
			}
		}
	};

  //
  // SMOOTH SCROLLS FOR ANCHORS
  //
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 40
        }, 400);
        return false;
      }
    }
  });


  ///////////
  // SNIPCART BAR & SNIPCART SETTINGS
  ///////////

  const cartBar = document.querySelector('#cart-bar');
  const buyButtons = document.querySelectorAll('.snipcart-add-item');
  let orderingEnabled = false;
  let itemsCount = 0;
  let serverTime = {};

  const schedule = {
    monday: {
      open: '08:00',
      close: '22:00',
      breakfast: {}
    },
    tuesday: {
      open: '05:55',
      close: '06:20',
      breakfast: {}
    },
    wednesday: {
      open: '08:00',
      close: '22:00',
      breakfast: {}
    },
    thursday: {
      open: '08:00',
      close: '23:30',
      breakfast: {}
    },
    friday: {
      open: '08:00',
      close: '22:00',
      breakfast: {}
    },
    saturday: {
      open: '08:00',
      close: '22:00',
      breakfast: {}
    },
    sunday: {
      open: '08:00',
      close: '22:00',
      breakfast: {}
    },
  }


  const updateOpenToday = function(dayofweekName){

    dayofweekName = dayofweekName.toLowerCase();

    const openTodayLabel = document.querySelector('#open-today');
    const todayOpenTime = militaryToStandardTime(schedule[dayofweekName].open);
    const todayCloseTime = militaryToStandardTime(schedule[dayofweekName].close);

    if (openTodayLabel){
      openTodayLabel.innerHTML = "Open Today: " + removeZeroPad(todayOpenTime) + ' - ' + removeZeroPad(todayCloseTime);
    }

  };

  const militaryToStandardTime = function(militaryTime){
    let hours = militaryTime.slice(0, 2);
    let minutes = militaryTime.slice(3, 5);
    let period = '';

    if (hours >= 12) {
      period = 'PM';
      hours = hours - 12;
    } else if (hours <= 12) {
      period = 'AM';
    }

    return hours + ':' + minutes + ' ' + period
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

    Snipcart.subscribe('cart.ready', function() {
      Snipcart.api.closeCart();
    });
    
    orderingEnabled = false


    console.log('Ordering is disabled');

  };



  const enableOrdering = function(){

    for (let i = 0; i < buyButtons.length; i++){

      buyButtons[i].classList.remove('disabled');

      let buyButtonText = buyButtons[i].querySelector('span');
      buyButtonText.innerHTML = 'Add to Order';

    }

    orderingEnabled = true;

    console.log('Ordering is enabled');

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

    console.log(dateObject);

    let weekDayName = dateObject.dayofweekName.toLowerCase();

    let currentTimeHours = zeroPad(dateObject.hours, 2);
    let currentTimeMinutes = zeroPad(dateObject.minutes, 2);
    let currentTime = currentTimeHours + ":" + currentTimeMinutes;

    let orderingOpen = isTimeWithin(currentTime, schedule[weekDayName].open, schedule[weekDayName].close);

    if(orderingOpen){
      return true;
    } else {
      return false;
    }


  };

  const getDateTime = function(callback){

    let storedDateObject = sessionStorage.getItem('dateTime');

    if(storedDateObject){

      let parsedDateObject = JSON.parse(storedDateObject);
      updateDateObject(parsedDateObject, function(err, updatedDateObject){
        if (err) {
          sessionStorage.clear();
          getDateTime(callback);
        }
        callback(updatedDateObject);
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
        if (callback) callback(dateObject);
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

    console.log(minutes);
    console.log(hours);
    console.log(days);

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

  const checkEveryMin = function(){

    window.setTimeout(function(){
      isOrderingOpen()
      checkEveryMin();
    }, 60000)

  };

  const init = function(){
    getDateTime(function(dateTime){

      updateOpenToday(dateTime.dayofweekName);

      if (isOrderingOpen(dateTime)){
        enableOrdering();
      } else {
        disableOrdering();
      };

    });
  };

  init();


  Snipcart.subscribe('cart.opened', disableBodyScroll);

  Snipcart.subscribe('cart.closed', enableBodyScroll);

  // CONFIG
  // Snipcart.execute('config', 'show_continue_shopping', true);
  // Snipcart.execute('config', 'allowed_provinces', [
  //   { country: 'US', provinces: ['CA'] },
  // ]);

});
