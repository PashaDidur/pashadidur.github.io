$(document).ready(function() {

	$(function() {
  		// Owl Carousel
  		var owl = $(".owl-carousel");
  		owl.owlCarousel({
    		items: 1,
    		margin: 20,
    		loop: true,
    		nav: true
  		});  		
	});

	
   	$(".quest").click(function(){   
  	//  $(this).next(".content_p").toggle(); // old
  		$(this).next().slideToggle();
  		$(this).find(".plus").toggleClass("hide");
  		$(this).find(".minus").toggleClass("show");  // new
	});


	// 		$(".plus").click(function(){   
 	//  		$(this).next(".minus").toggle();
 	//  		$(this).hide();
	// 		});

	$(".quest").click(function(){   
  		$(this).find(".minus").toggle();
  		$(this).find(".plus").hide();
	});

	$(".quest").click(function(){
		$(this).find(".plus").toggle();
		$(this).find(".minus").hide();
	});


	$(".main_menu_button").click(function() {
		$(".top_menu_mobile ul").slideToggle();
	}); 
	


	$(".scroll").click(function(){
		var currentScrollTop = $(window).scrollTop();
		$('html, body').animate({'scrollTop': currentScrollTop + 700}, 400);
	});

	$(".vertical_line").click(function(){
		var currentScrollTop = $(window).scrollTop();
		$('html, body').animate({'scrollTop': currentScrollTop + 700}, 400);
	});

	$("#about").click(function(){
        $('html, body').animate({
        	scrollTop: $(".descript").offset().top
        }, 1500);
     });

	$("#reading").click(function(){
        $('html, body').animate({
        	scrollTop: $(".a_r_reading").offset().top
        }, 4500);
     });

	$("#testimonials").click(function(){
		$("html, body").animate({
			scrollTop: $(".stellar").offset().top
		}, 3200);
	});

	$("#ask").click(function(){
		$("html, body").animate({
			scrollTop: $(".asking").offset().top
		}, 4500);
		
	});

	$("#contacts").click(function(){
		$("html, body").animate({
			scrollTop: $(".schedule").offset().top
		}, 5800);
	});

		

		

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	var eqElement = ".include_item"
	$(window).load(function(){equalheight(eqElement);}).resize(function(){equalheight(eqElement);});

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function(e) {
		e.preventDefault;
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
	});
	
});




