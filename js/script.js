$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active');
		$('body').toggleClass('lock');
	});

});
$("a[href^='#']").on("click", function () {
    let href = $(this).attr("href");

    $("html, body").animate({
        scrollTop: $(href).offset().top
    }, {
    duration: 500,   // по умолчанию «400»
    easing: "linear" // по умолчанию «swing»
});

    return false;
});
$('.body-menu__link__food,.body-menu__link__drink').click(function(){
    $('.body-menu__link__food,.body-menu__link__drink').toggleClass('body-menu__link__active');
    $('.body-menu__items__food,.body-menu__items__drink').toggleClass('body-menu__items__active');
});