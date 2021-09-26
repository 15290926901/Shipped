$(function(){
	$("#video-click").click(function(){
		$("#video-down").animate({
			"top":"0"
		},500)
		$("#video-up").click(function(){
			$(this).parent().animate({
				"top":"-120%"
			},500)
			var movie=document.getElementById("video-ds");
			movie.pause();
		})
	})
})