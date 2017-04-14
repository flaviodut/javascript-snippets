$(function(){

	var el;
	var w;
	var ol;
	var color;

	$('.anchor').bind({
		click: function(){
			$('.anchor').removeClass('active');
			$(this).addClass('active');	
		},
		mouseenter: function(){
			el = $(this);
			w = el.outerWidth();
			ol = el.offset().left;
			color = el.attr('data-color');
			$('nav .line').stop().animate({
				left: ol,
				width: w,
				backgroundColor: '#'+color
			},800,'easeOutElastic');
		},
		mouseleave: function(){
			el = $('.anchor.active');
			w = el.outerWidth();
			ol = el.offset().left;
			color = el.attr('data-color');
			$('nav .line').stop().animate({
				left: ol,
				width: w,
				backgroundColor: '#'+color
			},800,'easeOutElastic');
		}
	});

});