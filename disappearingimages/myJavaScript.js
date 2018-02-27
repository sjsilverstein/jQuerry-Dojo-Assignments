// Stephen Silverstein
// https://github.com/sjsilverstein

$(document).ready(function(){
	$("img").click(function(){
		$(this).hide()
	})
	$(".main button").click(function(){
		$(".main img").show();
	})

})