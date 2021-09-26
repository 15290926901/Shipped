$(function() {
    $(".nav-big li").hover(function() {
        $(this).find("div.level2").stop(false, true).slideDown(500);
    }, function() {
        $(this).find("div.level2").stop(false, true).slideUp(500);
    })

    $("#search-img").click(function() {
        $("#form-search").toggle();
    });
    $("#search-K").focus(function() {
        $("#search-text").show();
        /* $("#search-text p").mouseover(function() {
            var $text = $(this).text();
            $("#search-K").val($text).css("background", "#e8f0fe");
        }).mouseout(function() {
            $("#search-K").val("请输入关键字").css("background", "#fff");
        }) */

        $("#search-text p").hover(function() {
            var $text = $(this).text();
            $("#search-K").val($text).css("background", "#e8f0fe");
        })
        $("#search-text p").click(function() {
            var $text = $(this).text();
            $("#search-K").val($text).css("background", "#e8f0fe").siblings("div.text").hide();
        })
    });

    $("#search-jump").click(function() {
        var text = $("#search-K").val();
        console.log(text);
        if (text == "控制管理属于") {
            window.location = 'walk in/search.html';
            window.location = '../walk in/search.html';
        } else if (text == "plugin") {
            window.location = 'walk in/search.html';
            window.location = '../walk in/search.html';
        } else {
            window.location = 'walk in/delay.html';
            window.location = '../walk in/delay.html';
        }
    })
	
	$(".nav-btn").click(function(){
		if($(this).find("i:eq(0)").is(":visible")){
			$(this).find("i:eq(0)").hide();
			$(this).find("span").css({
				"transform":"rotate(45deg)",
				"transform-origin":"left center"
			})
			$(this).find("i:eq(1)").css({
				"transform":"rotate(-45deg)",
				"transform-origin":"left center"
			})
			$("#small-nav").stop(false,true).animate({
				"left":"0"
			},500)
		}else{
			$(this).find("i:eq(0)").show();
			$(this).find("span").css({
				"transform":"rotate(0deg)",
				"transform-origin":"left center"
			})
			$(this).find("i:eq(1)").css({
				"transform":"rotate(0deg)",
				"transform-origin":"left center"
			})
			$("#small-nav").stop(false,true).animate({
				"left":"-100%"
			},500)
		}
	})
	
	// 小屏导航
	$("#small-nav ul li i").click(function(){
		$(this).siblings("div.level2").slideToggle();
	})
})