var numOfClicks = 0;


$(document).ready(function(){

	$("body").append("<button class=newButton>Click Me!</button>");

	$("body").on('click', '.newButton', function(){
		$("body").append("<div class=firstNewDiv data-toggle=button>Here are the number of clicks: "+numOfClicks+"</div>").data("data-toggle-button", 1);
		$("body").append("<button class=firstButton>New Button 1!</button>");
		$("body").append("<button class=secondButton>New Button 2!</button>");
		numOfClicks++;
	});
	
	
	$("body").on('click', '.firstButton', function(){
		$(".firstNewDiv").css({"color": "#fff", "background-color": "red"});
	});

	$("body").on('click', '.secondButton', function(){
		$('.firstNewDiv').contents('').remove();
		$(".newButton").remove();
	});

});