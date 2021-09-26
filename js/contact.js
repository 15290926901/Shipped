$(function(){
	$(".x-tab").click(function(){
		if(!$(".tab-wrap").is(":visible")){
			$(".tab-wrap").slideDown(500);
			$("#tab-xyder").click(function(){
				if(!$(".tab-wrap ul").is(":visible")){
					$(".tab-wrap ul").removeClass("hide").slideDown(500);
				}else{
					$(".tab-wrap ul").slideUp(500).addClass("hide");
				}
				return false;
			})
		}else{
			$(".tab-wrap").slideUp(500);
		}
	})
})