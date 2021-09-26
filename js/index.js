$(function() {

	// fullPage
	$('#dowebok').fullpage({
		// sectionsColor: ['#fff', '#ebeef1', '#fff', '#fff', "orange", "#fff"],
		
		anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
		menu: '#menu',
		afterLoad: function(anchorLink, index){
			
			if(index == 4){
				// console.log("4444")
				pageAnimate()
			}
		},
		
	});

	$(window).resize(function() {
		autoScrolling();
	});

	function autoScrolling() {
		var $ww = $(window).width();
		if ($ww < 1200) {
			$.fn.fullpage.setAutoScrolling(false);
		} else {
			$.fn.fullpage.setAutoScrolling(true);
		}
	}

	autoScrolling();
	

	
	// page3
	$("#page3-li li").mouseover(function() {
		var index = $(this).index();
		var width = $("#ydbgimg .img").width() * index;
		$("#ydbgimg").stop(false, true).animate({
			"left": '-' + width + 'px',
		}, 500)
	})

	

	// page4
	$(".contentIn").mousemove(function(){
		var a=Math.random()*20;
		var b=Math.random()*15;
		var c=Math.random()*20;
		var d=Math.random()*15;
		var e=Math.random()*20;
		var f=Math.random()*15;
		var aa=Number(String(a).substring(0,6));
		var bb=Number(String(b).substring(0,6));
		var cc=Number(String(c).substring(0,6));
		var dd=Number(String(d).substring(0,6));
		var ee=Number(String(e).substring(0,6));
		var ff=Number(String(f).substring(0,6));
		// console.log(c)
		$("#contentIn-left .img1").stop().animate({
			"right":'-' + a + 'px',
			"top":b+"px"
		},200)
		$("#contentIn-left .img2").stop().animate({
			"right":'-' + c + 'px',
			"top":d+"px"
		},200)
		$("#contentIn-left .img3").stop().animate({
			"right":'-' + e + 'px',
			"top":f+"px"
		},200)
		
		$("#contentIn-right .img1").stop().animate({
			"left":'-' + a + 'px',
			"top":b+"px"
		},200)
		$("#contentIn-right .img2").stop().animate({
			"left":'-' + c + 'px',
			"top":d+"px"
		},200)
		$("#contentIn-right .img3").stop().animate({
			"left":'-' + e + 'px',
			"top":f+"px"
		},200)
	})
	
	if($(".sectionFour").hasClass("active")){
		console.log("aa")
	}
		
		
	function pageAnimate(){
		$(".contentIn .left").animate({
			left:"-120%",
			top:"120%"
		},0).animate({
			left:"0",
			top:"0"
		},1000)
		$(".contentIn .right").animate({
			right:"-120%",
			top:"-120%"
		},0).animate({
			right:"0",
			top:"0"
		},1000)
		
	}
});
