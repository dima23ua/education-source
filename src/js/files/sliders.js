import Swiper, { Navigation, Pagination } from 'swiper';
Swiper.use([Navigation, Pagination]);

const sliderMentor = new Swiper('.mentors-slider', {
	slidesPerView: 'auto',
	clickable: true,
	speed: 1500,
	spaceBetween: 25,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

});
