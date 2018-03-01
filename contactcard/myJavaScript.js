// Stephen Silverstein
// https://github.com/sjsilverstein

function create_card(){
	console.log("testing the create_card function")
	$('.contactlist').append(
	`
	<div class="card-box">
	<h1>${$('#firstname').val()} ${$('#lastname').val()}</h1>
	<button>Click for Description</button>
	<p class="hiddentext">${$('#description').val()}</p>
	</div>
	`);
	$('button').click(function(){
		$(this).siblings().show();
	});
}

$(document).ready(function(){
// BODY
	$('form').submit(function(){
		create_card();
		console.log("tesing");
		return false;
	})
})