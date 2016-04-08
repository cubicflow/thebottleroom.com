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

  const cartBar = document.querySelector('#cart-bar')
  let itemsCount = 0;

  const showBarIfNeeded = function(){

    itemsCount = Snipcart.api.getItemsCount();
    if (itemsCount > 0){
      cartBar.classList.add('active');
    } else {
      cartBar.classList.remove('active');
    }
  }

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

});
