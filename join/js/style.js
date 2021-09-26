$(function() {
	$("#style-list li:gt(5)").hide()
	$("#Pagination a").click(function() {
		var index = $(this).index() - 1;
		if (index == 0) {
			one();
		} else {
			two();
		}
	})
	$(".Pagination-prev").click(function() {
		one()
	})
	$(".Pagination-next").click(function() {
		two()
	})
	
	// 回调
	function one() {
		$("#style-list li").hide();
		$("#style-list li:lt(6)").show();
		$("#Pagination a:eq(0)").addClass("Pagination-active").siblings("a").removeClass("Pagination-active");
	}
	function two() {
		$("#style-list li").hide();
		$("#style-list li:gt(5)").show();
		$("#Pagination a:eq(1)").addClass("Pagination-active").siblings("a").removeClass("Pagination-active");
	}

})
