// --------------------------------------------------
// Init JS for all pages
// --------------------------------------------------
$(document).ready(function(){


  //
  //  Init on all pages
  //
  // Initialize Foundation
  $(document).foundation();

  theBottleRoom.initMobileNav();
  window.responsiveImages = cf.imgSwap(theBottleRoom.opts);

  Snipcart.subscribe('cart.ready', function(){
    theBottleRoom.menu.init();
  });


  //
  //  Init page specific modules
  //
  const currentPage = theBottleRoom.getCurrentPage();

  switch (currentPage) {

    case 'home':
      theBottleRoom.initHoursModal();
      theBottleRoom.initHomepageSlides();
      break;


    case 'menu':
      theBottleRoom.initSmoothScrollAnchors();
      theBottleRoom.initMenuDropdown();
      break;


    case 'location':
      theBottleRoom.initMap();
      break;


    case 'events':
      theBottleRoom.initContactBar();
      break;


    case 'gallery':
      theBottleRoom.gallery.init('.gallery-img');
      break;


    case 'chef':
      break;

  }


});
