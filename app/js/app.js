// // Import vendor jQuery plugin example
// import '~/app/libs/mmenu/dist/mmenu.js'

import Swiper, {
	Pagination

  } from "swiper";


document.addEventListener('DOMContentLoaded', () => {

	Swiper.use([Pagination]);

	// Custom JS

    var swiper = new Swiper(".swiperReviews", {
    loop: true,
    speed: 1200,
		slidesPerView: 3,
		spaceBetween: 30,
		pagination: {
		  el: ".swiper-pagination",
		  clickable: true,
		  
		},

		breakpoints: {
            
            320: {
              slidesPerView: 2.05,
              spaceBetween: 10,
            },
          
            480: {
              slidesPerView: 2.03,
              spaceBetween: 10,
            },
    
            820: {
              slidesPerView: 2,
              spaceBetween: 30,
            },

            940: {
              slidesPerView: 3,
              spaceBetween: 30,
            },



        }
	});




	

	

})
