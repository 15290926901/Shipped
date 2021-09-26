$(function(){
	$("#page3-li li").mouseover(function() {
		var index = $(this).index();
		var width = $("#ydbgimg .img").width() * index;
		$("#ydbgimg").stop(false, true).animate({
			"left": '-' + width + 'px',
		}, 500)
	})
})