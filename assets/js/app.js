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
  let itemsCount = 0;

  const schedule = {
    monday: {
      open: '04:00',
      close: '22:00',
      breakfast: {}
    },
    tuesday: {
      open: '08:00',
      close: '22:00',
      breakfast: {}
    },
    wednesday: {
      open: '08:00',
      close: '22:00',
      breakfast: {}
    },
    thursday: {
      open: '08:00',
      close: '22:00',
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



  const showBarIfNeeded = function(){
    itemsCount = Snipcart.api.getItemsCount();
    if (itemsCount > 0){
      cartBar.classList.add('active');
    } else {
      cartBar.classList.remove('active');
    }
  }



  const disableOrdering = function(){
    for (let i = 0; i < buyButtons.length; i++){
      buyButtons[i].classList.add('disabled');
    }
    console.log('Ordering is disabled');
  };



  const enableOrdering = function(){
    for (let i = 0; i < buyButtons.length; i++){
      buyButtons[i].classList.add('disabled');
    }
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

      if(currentTimeMinutes >= openingTimeMinutes){
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


  const isOrderingOpen = function(){

    $.getJSON( "https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec?tz=America/Los_Angeles", function( data ) {

      let dayOfWeek = data.dayofweekName.toLowerCase();

      let currentTimeHours = zeroPad(data.hours, 2);
      let currentTimeMinutes = zeroPad(data.minutes, 2);
      let currentTime = currentTimeHours + ":" + currentTimeMinutes;

      console.log(isTimeWithin(currentTime, schedule[dayOfWeek].open, schedule[dayOfWeek].close));

    });

  };



  Snipcart.subscribe('cart.ready', function() {
    showBarIfNeeded();
  });

  Snipcart.subscribe('item.added', function (item) {
    showBarIfNeeded();
  });

  Snipcart.subscribe('item.removed', function (item) {
    showBarIfNeeded();
  });

  // CONFIG
  Snipcart.execute('config', 'show_continue_shopping', true);
  Snipcart.execute('config', 'allowed_provinces', [
    { country: 'US', provinces: ['CA'] },
  ]);

  console.log(isOrderingOpen());

});
