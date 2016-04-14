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
  // Hours Modal
  //
  const openModalBtn = document.querySelector('#open-hours-modal');
  const hoursModal = document.querySelector('#hours-modal');
  const closeModalBtn = hoursModal.querySelector('.modal__close');
  const modalOverlay = hoursModal.querySelector('.modal__overlay');

  openModalBtn.addEventListener('click', function(){
    hoursModal.classList.add('active');
    disableBodyScroll();
  })

  closeModalBtn.addEventListener('click', function(){
    hoursModal.classList.remove('active');
    enableBodyScroll();
  })

  modalOverlay.addEventListener('click', function(){
    hoursModal.classList.remove('active');
    enableBodyScroll();
  })


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

    if (itemsCount > 0 && orderingEnabled){
      cartBar.classList.add('active');
    } else {
      cartBar.classList.remove('active');
    }
  }



  const disableOrdering = function(){

    for (let i = 0; i < buyButtons.length; i++){

      buyButtons[i].classList.add('disabled');

      let buyButtonText = buyButtons[i].querySelector('span');
      buyButtonText.innerHTML = 'Ordering Disabled';

    }

    Snipcart.api.closeCart();
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


  const isOrderingOpen = function(){

    console.log('checking');

    $.getJSON( "https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec?tz=America/Los_Angeles", function( data ) {

      let dayOfWeek = data.dayofweekName.toLowerCase();

      let currentTimeHours = zeroPad(data.hours, 2);
      let currentTimeMinutes = zeroPad(data.minutes, 2);
      let currentTime = currentTimeHours + ":" + currentTimeMinutes;
      let orderingOpen = isTimeWithin(currentTime, schedule[dayOfWeek].open, schedule[dayOfWeek].close);

      if(orderingOpen){
        console.log('can order');
        enableOrdering();
      } else {
        console.log('cant order');
        disableOrdering();
      }

      showBarIfNeeded();

    });

  };

  const getServerTime = function(){

    $.getJSON( "https://script.google.com/macros/s/AKfycbyd5AcbAnWi2Yn0xhFRbyzS4qMq1VucMVgVvhul5XqS9HkAyJY/exec?tz=America/Los_Angeles", function( data ) {
      console.log(data);
    });

  };

  const checkEveryMin = function(){

    window.setTimeout(function(){
      isOrderingOpen()
      checkEveryMin();
    }, 60000)

  };

  const init = function(){
    getServerTime();
    checkEveryMin();
  };

  init();


  Snipcart.subscribe('cart.ready', isOrderingOpen);
  Snipcart.subscribe('cart.opened', isOrderingOpen);

  // CONFIG
  Snipcart.execute('config', 'show_continue_shopping', true);
  Snipcart.execute('config', 'allowed_provinces', [
    { country: 'US', provinces: ['CA'] },
  ]);

});
