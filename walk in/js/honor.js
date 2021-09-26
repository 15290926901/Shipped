$(function(){
	$(".honor-prev").click(function(){
		var sindex=$("span.spanActive").index();
		var a=sindex-1;
		var width=$(this).siblings("ul").width();
		if(sindex==0){
			$(".fep span:eq(0)").removeClass("spanActive");
			$(".fep span:eq(3)").addClass("spanActive");
			$("#yd-ul").animate({
				"left":"-"+width*3+"px"
			},500)
		}else{
			$(".fep span:eq("+sindex+")").removeClass("spanActive").prev().addClass("spanActive");
			$("#yd-ul").stop(false,true).animate({
				"left":"-"+width*a+"px"
			},500)
		}
		// console.log(width*sindex)
	})
	$(".honor-next").click(function(){
		var sindex=$("span.spanActive").index();
		var a=sindex+1;
		var width=$(this).siblings("ul").width()*a;
		if(sindex==3){
			$(".fep span:eq(3)").removeClass("spanActive");
			$(".fep span:eq(0)").addClass("spanActive");
			$("#yd-ul").stop(false,true).animate({
				"left":"-"+0+"px"
			},500)
		}else{
			$(".fep span:eq("+sindex+")").removeClass("spanActive").next().addClass("spanActive")
			$("#yd-ul").stop(false,true).animate({
				"left":"-"+width+"px"
			},500)
		}
		// console.log(width)
	})
	
	$.ajax({
		type: "get",
		url: "./js/honor.json",
		dataType: "json",
		success: function (data) {
			// console.log(data)
			$.each(data,function(i,k){
				// console.log(k.title)
				var $li=$("<li class='fl'><a href='##'><div class='img'><img src="+k.img+"></div><p>"+k.title+"</p></a></li>")
				$(".json-list").append($li)
			})
			
		},
		
	});
})