$(function() {
	if(/msie (6.0|7.0|8.0|9.0)/i.test(navigator.userAgent)) {
		window.location.href = 'abandoned.html';
	}
	//导航动画
	$(window).scroll(function() {
		var ST = 0;
		ST = $(window).scrollTop();
		if(ST < 1) {
			$(".top").removeClass('on');
			$('.logo img').attr('src','img/logo.png')
			
		} else {
			$(".top").addClass('on');
			$('.logo img').attr('src','img/bailogo.png')
		};

	})
	jQuery(".index-sec2 .box").slide({
		mainCell: ".bd ul",
		effect: "left",
		delayTime: 300,
		autoPlay: true
	});


	

})