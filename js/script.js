
var mySwiper = new Swiper('.swiper-container', {

  loop: true,
  slidesPerView: "1",
  spaceBetween:30,
  centeredSlides:true,
  breakpoints:{
		700:{
          slidesPerView:2,
          centeredSlides:false,
		},
		1025:{
           slidesPerView:3,
           centeredSlides:true,
 		},
 	},
 	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable:true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
$(document).ready(function (){
    const disableScroll=  function(){
    	$("html,boby").on("mousewheel",function(){
    		return false;
    	});
    }
    const enableScroll= function(){
    	$("html,boby").off("mousewheel");
    	
    }
    var menuLink = $('.header__burger');
    var menuLinkActive = $('.header__burger_active')
    var menu = $('.nav-mobile');

    menuLink.click(function(){
    	menuLink.toggleClass('header__burger_active');
    	menu.toggleClass('nav-mobile_active');
    });
    $('.nav-mobile__link').click(function(){
        menuLink.toggleClass('header__burger_active');
        menu.toggleClass('nav-mobile_active');
    });

    function cloSe(){
    	$(".popup-container").fadeOut(500,enableScroll);
    }

    $('#form').submit(function(e) {

    	e.preventDefault();
    	$.ajax({
    		type:"post",
    		url:"https://echo.htmlacademy.ru/",
    		data:$(this).serialize()
    	}).done(function(){
    		$('#form').html("<h2>Ваша заявка успешно отправлена!</h2>");
            $(this).find('input').val('');
            setTimeout(cloSe,2000);
    	});
    });

    $(".js__btn").click(function(e){
    	e.preventDefault();
    	$(".popup-container").fadeIn(500,disableScroll);
    });
    $(".popup-container").click(function(e){
        if (e.target==this) {
        	$(this).fadeOut(500,enableScroll);
        }
    });
    $(".js-close-popup").click(function(e){
    	e.preventDefault();
    $(".popup-container").fadeOut(500,enableScroll);
    });
    $(function(){
  $("#phone").mask("+7(999) 999-99-99");
   });
});