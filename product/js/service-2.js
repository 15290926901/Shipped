$(function() {
	var listArr1 = ["中国铁路总公司", "中国中车股份有限公司", "神华集团有限责任公司","成都轨道交通集团有限公司","广州地铁集团有限公司","深圳市地铁集团有限公司","北京市地铁运营有限公司","贵阳市城市轨道交通有限公司","佛山市铁路投资建设集团有限公司","合肥城市轨道交通有限公司","南京地铁集团有限公司","厦门轨道交通集团","绍兴市轨道交通集团有限公司","石家庄市轨道交通有限责任公司","无锡地铁集团有限公司","武汉市轨道交通有限公司","中国铁路哈尔滨局集团有限公司","中国铁路沈阳局集团有限公司","中国铁路北京局集团有限公司","中国铁路太原局集团有限公司","中国铁路呼和浩特局集团有限公司","中国铁路郑州局集团有限公司","中国铁路武汉局集团有限公司","中国铁路西安局集团有限公司","中国铁路济南局集团有限公司","中国铁路上海局集团有限公司","中国铁路南昌局集团有限公司","中国铁路广铁局集团有限公司","中国铁路南宁局集团有限公司","中国铁路成都局集团有限公司","中国铁路昆明局集团有限公司","中国铁路兰州局集团有限公司","中国铁路乌鲁木齐局集团有限公司","中国铁路青藏局集团有限公司","西南交通大学","兰州交通大学","武汉铁路职业技术学院","厦门城市职业学院","浙江师范大学","昆明铁路机械学校","郑州铁路职业技术学院","陕西铁路工程职业技术学院","......（排名不分先后）"
	]
	var listArr2=["Ethiopia 埃塞俄比亚","Iran 伊朗","Kenya 肯尼亚","Philipplines&nbsp;&nbsp;菲律宾","Turkmenistan 土库曼斯坦","vietnam 越南","Angola 安哥拉"]
	var listArr3=["成都","新乡","嘉峪关","重庆","郑州","北京","贵阳","襄阳","天津","呼和","西安","唐山","大同","安康","济南","湖东","南京","神池","侯马","南昌","肃宁","太原","合肥","哈尔滨","包头","徐州","沈阳","神木","福州","苏家屯","广州","上海","通辽","株洲","兰州","吉林","怀化","乌鲁木齐","南宁","西宁","齐齐哈尔","柳州","迎水桥","佳木斯","长沙","库尔勒","哈尔滨","武汉","哈密"]
	$.each(listArr1,function(i){
		var liArr=$("<li class='fl'><p class='text-overflow'>"+listArr1[i]+"</p></li>");
		$("#fwkh-list1").append(liArr);
	})
	$.each(listArr2,function(i){
		var liArr=$("<li class='fl'><p class='text-overflow'>"+listArr2[i]+"</p></li>");
		$("#fwkh-list2").append(liArr);
	})
	$.each(listArr3,function(i){
		var liArr=$("<li class='fl text-overflow'>"+listArr3[i]+"</li>");
		$("#czwd-list").append(liArr);
	})
	
})
