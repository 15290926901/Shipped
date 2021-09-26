$(function() {
    $.ajax({
        url: "./news.json",
        dataType: "json", //数据类型
        type: "get",
        success: function(data) {
            console.log(data)
            $.each(data, function(i, v) {
                var divArray = $("<div class='wow fadeInUp list-div' data-wow-delay=''><div class='img'><img src='" + v.img + "'></div><h3>" + v.title + "</h3><p>" + v.text + "</p></div>");
            })
        }

    })


})