$(function() {
	$("#form-but").click(function() {
		var a1 = $("#name").val();
		// var a1 = document.getElementById("name").innerHTML;
		var a2 = $("#phone").val();
		var a3 = $("#email").val();
		var a4 = $("#home").val();
		var a5 = $("#form-text").val();
		// var a = $("#name");
		// var a = $("#phone");
		// var a = $("#email");
		// var a = $("#home");
		// var a = $("#form-text");
	
		
		if (a1 == "" || a2 == "" || a3 == "" || a4 == "" || a5 == "") {
			window.location = 'form-false.html';
		} 
	})
	
})
