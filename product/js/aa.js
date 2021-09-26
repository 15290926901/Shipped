$(function(){
	$("#drop-fzpx").click(function(){
		$("#drop-centent").slideToggle(500);
	})
	
	window.onscroll=function(){
		var scrollTop=document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
		// console.log(scrollTop);
		if(scrollTop>320){
			$(".section-menu").slideDown(500);
		}else{
			$(".section-menu").slideUp(500);
		}
	}
	$("a.Overview,a.cp-Highlights,a.Case-study").click(function(){
		$("html,body").animate({scrollTop:($($(this).attr('href')).offset().top-50)},1000);
	})
	
	$("#drop-centent li a").click(function(){
		var index=$(this).parent().index();
		var text=$(this).text()
		$(this).addClass("active-list").parent().siblings("li").children("a").removeClass("active-list");
		console.log(text)
		$(".right-box:eq("+index+")").removeClass("hide").siblings("div.right-box").addClass("hide");
		$("#tit-text").text(text)
	})
})