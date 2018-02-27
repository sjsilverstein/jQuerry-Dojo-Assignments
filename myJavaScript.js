$(document).ready(function(){
	
	$(".click button").click(function(){
		$(".click p").hide();
	})
	$(".show button").click(function(){
		$(".show p").show();
	})
	$(".toggle button").click(function(){
		$(".toggle p").toggle();
	})
	$(".slidedown button").click(function(){
		$(".slidedown p").slideDown();
	})
	$(".slideUp button").click(function(){
		$(".slideUp p").slideUp();
	})
	$(".slideToggle button").click(function(){
		$(".slideToggle p").slideToggle();
	})
	$(".fadeIn button").click(function(){
		$(".fadeIn p").fadeIn();
	})
	$(".fadeOut button").click(function(){
		$(".fadeOut p").fadeOut();
	})
	$(".addClass button").click(function(){
		$(".addClass p").addClass("textRed");
	})
	$(".before button").click(function(){
		$(".before p").before("new text");
	})
	$(".after button").click(function(){
		$(".after p").after("GREAT woot");
	})
	$(".append button").click(function(){
		$(".append p").append("TEXT trying");
	})
	$(".html button").click(function(){
		$(".html p").html("new paragraph");
	})
	console.log($(".attr img").attr("alt"));
	$(".attr button").click(function(){
		$(".attr img").attr("alt", "WhateverIWant")
		console.log($(".attr img").attr("alt"));
		
	})
	
	$(".val button").click(function(){
		
		console.log($(".val select").val());
	})
})