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

	const slides = document.querySelectorAll('.slide');

	window.addEventListener('scroll', function(){

		window.requestAnimationFrame(fadeIfVisible());

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

});
