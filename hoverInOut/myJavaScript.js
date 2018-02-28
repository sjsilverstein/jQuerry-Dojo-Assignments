// Stephen Silverstein
// https://github.com/sjsilverstein
$(document).ready(function(){
// BODY
function flipper(selector){
	var temp = $(selector).attr("src");
	$(selector).attr("src", $(selector).attr("other"));
	$(selector).attr("other", temp);
}
$("img").hover(function(){
	flipper($(this));
},function(){
	flipper($(this));
});
});

