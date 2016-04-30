// --------------------------------------------------
// APP.JS
// --------------------------------------------------

if (typeof theBottleRoom !== 'object') {
  window.theBottleRoom = {};
}

// CF-IMGSWAP WITH CUSTOM OPTIONS
theBottleRoom.opts = {
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


theBottleRoom.initMenuDropdown = function(){

  const mainDropdown = document.getElementById('menu-dropdown');
  const mainDropdownBtn = document.getElementById('menu-dropdown-button');
  const dropdowns = document.querySelectorAll('.menu-dropdown__links__dropdown');


  mainDropdownBtn.addEventListener('click', () => {
    mainDropdown.classList.toggle('active');

    console.log(theBottleRoom.bodyCanScroll());

    if (theBottleRoom.bodyCanScroll()) {
      theBottleRoom.disableBodyScroll();
    } else {
      theBottleRoom.enableBodyScroll();
    }
  });


  for (let i = 0; i < dropdowns.length; i++){

    let dropdown = dropdowns[i];
    dropdown.addEventListener('click', () => {
      dropdown.classList.toggle('active');
    });
  }

};

//
// DISABLE/ENABLE BODY SCROLL
//
theBottleRoom.disableBodyScroll = function(){

  const htmlElem = document.querySelector('html');
  const bodyElem = document.querySelector('body');

  if(cf.isSmallBrowser(theBottleRoom.opts)){
    htmlElem.style.overflow = 'hidden';
    bodyElem.style.overflow = 'hidden';
    bodyElem.style.position = 'fixed';
    console.log('scroll disabled');
  }
};

theBottleRoom.enableBodyScroll = function(){

  const htmlElem = document.querySelector('html');
  const bodyElem = document.querySelector('body');

  htmlElem.style.overflow = 'auto';
  bodyElem.style.overflow = 'auto';
  bodyElem.style.position = 'static';
};

theBottleRoom.bodyCanScroll = function(){
  const bodyElem = document.querySelector('body');
  return bodyElem.style.position != 'fixed';
}

//
//  getCurrentPage
//
theBottleRoom.getCurrentPage = function(){
  const pathArray = window.location.pathname.split('/');

  if (pathArray[1] == ''){
    return 'home';
  }
  return pathArray[1];

};

//
// MAPS iframe disable/enable
//
theBottleRoom.initMap = function(){
  const locationMap = document.getElementById('location-map');
  if (locationMap){
    locationMap.addEventListener('click', function(){
      locationMap.classList.add('active');
    });
  }
};


//
// Hours Modal
//
theBottleRoom.initHoursModal = function(){
  const openModalBtn = document.querySelector('#open-hours-modal');
  const hoursModal = document.querySelector('#hours-modal');
  const closeModalBtn = hoursModal.querySelector('.modal__close');
  const modalOverlay = hoursModal.querySelector('.modal__overlay');

  if (openModalBtn && hoursModal && closeModalBtn) {

    openModalBtn.addEventListener('click', function(){
      hoursModal.classList.add('active');
      theBottleRoom.disableBodyScroll();
    });

    closeModalBtn.addEventListener('click', function(){
      hoursModal.classList.remove('active');
      theBottleRoom.enableBodyScroll();
    });

    modalOverlay.addEventListener('click', function(){
      hoursModal.classList.remove('active');
      theBottleRoom.enableBodyScroll();
    });

  }
}



//
// SENT FORM ALERT
//

theBottleRoom.initContactBar = function(){
  function getParameterByName(name) {
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(window.location.search);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
  }

  var thankYouBar = document.querySelector('#contact-form-thankyou');

  if(thankYouBar && getParameterByName('form')){
    thankYouBar.classList.add('active');
  }
};





//
// MOBILE NAVIGATION
//

theBottleRoom.initMobileNav = function(){
  const expandBtn = document.querySelector('.nav__expand');
  const mobileNav = document.querySelector('.nav-expanded');


  document.querySelector('#close-nav').addEventListener('click', function(){
    mobileNav.classList.remove('active');
    expandBtn.classList.remove('active');
    mobileNav.classList.remove('drilldown-active');

    theBottleRoom.enableBodyScroll();

  });

  document.querySelector('#open-nav').addEventListener('click', function(){
    mobileNav.classList.add('active');
    expandBtn.classList.add('active');

    theBottleRoom.disableBodyScroll();

  });

  document.querySelector('#nav-more').addEventListener('click', function(){
    mobileNav.classList.add('drilldown-active');
  });

  document.querySelector('#nav-back').addEventListener('click', function(){
    mobileNav.classList.remove('drilldown-active');
  });
};




//
// FADE IN SLIDES IF VISIBLE
//
theBottleRoom.initHomepageSlides = function(){
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
};


//
// SMOOTH SCROLLS FOR ANCHORS
//
theBottleRoom.initSmoothScrollAnchors = function(){
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

      theBottleRoom.enableBodyScroll();
      const mainDropdown = document.getElementById('menu-dropdown');
      mainDropdown.classList.toggle('active');

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
};
