// Stephen Silverstein
// https://github.com/sjsilverstein
// Call Backs

function submitstring(){
	var something = [$('#firstname').val(), $('#lastname').val(), $('#email').val(),$('#contactnumber').val()];
	var row = "<tr><td>"+something[0]+"</td> <td>"+something[1]+"</td> <td>"+something[2]+"</td> <td>"+something[3]+"</td> </tr>";
	return row;
}
$(document).ready(function(){
// BODY
 	$('#form1').submit(function(){
 		$('th').parent().after(submitstring());
 		return false;
 	})
})