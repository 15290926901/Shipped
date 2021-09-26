$(function(){
	$("#rcln-list li").hover(function(){
		var index=$(this).index();
		// console.log(index)
		var imgArr=["images/rc-pn11.png","images/rc-pn22.png","images/rc-pn33.png","images/rc-pn44.png"]
		var img=imgArr[index];
		// console.log(img)
		$(this).find("img").prop("src",img)
	})
})