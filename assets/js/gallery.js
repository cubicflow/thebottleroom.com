if (typeof theBottleRoom !== 'object') {
  window.theBottleRoom = {};
}

theBottleRoom.gallery = (function(){

  let images = [];

  const debounce = function(func, wait, immediate) {
  	var timeout;
  	return function() {
  		var context = this, args = arguments;
  		var later = function() {
  			timeout = null;
  			if (!immediate) func.apply(context, args);
  		};
  		var callNow = immediate && !timeout;
  		clearTimeout(timeout);
  		timeout = setTimeout(later, wait);
  		if (callNow) func.apply(context, args);
  	};
  };

  const elementInViewport = function(el) {

    const rect = el.getBoundingClientRect()

    return (
       rect.top    >= 0
    && rect.left   >= 0
    && rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    )
  };

  const loadImage = function(img){

    const currentImgSrc = img.src;
    const newImgSrc = img.getAttribute('data-src');

    if (newImgSrc && currentImgSrc == ''){
      img.src = newImgSrc;
      img.classList.add('cf-responsive');
      img.classList.add('loaded');
    }

  };

  const loadVisibleImages = function(){

    console.log('loading visible images');

    for (let i = 0; i < images.length; i++){

      if(elementInViewport(images[i])){
        loadImage(images[i]);
      }
    }

    window.responsiveImages.reflow();

  };

  const init = function(selector){

    images = document.querySelectorAll(selector);

    if (images) {
      window.addEventListener('scroll', debounce(loadVisibleImages, 250));
      loadVisibleImages();
    }

  };

  return {
    init: init
  }

})();
