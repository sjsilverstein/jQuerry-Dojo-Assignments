// Stephen Silverstein
// https://github.com/sjsilverstein

$(document).ready(function(){
// BODY
	$(".main img").click(function(){
		var temp= $(this).attr("src");
		$(this).attr("src", $(this).attr("otherimg"));
		$(this).attr("otherimg", temp);
	})
})