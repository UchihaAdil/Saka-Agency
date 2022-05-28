$(document).ready(function(){
	$('.customer__reviews').slick({
		infinite: true,
		slidesToShow: 1,
    arrows: false,
		slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    cssEase: 'ease',
		dots: true,
	});
})

(function(){
	const burgerItem = document.querySelector('.header__burger');
	const menu = document.querySelector('.menu__list');
	const closeMenu = document.querySelector('.menu__list');

	burgerItem.addEventListener("click", () =>{
		menu.classList.add("active");
		burgerItem.classList.add("active")
		document.body.classList.add('lock')
	});
	
	closeMenu.addEventListener("click",() => {
		closeMenu.classList.remove("active");
		burgerItem.classList.remove("active")
		document.body.classList.remove('lock')
	});
}());
