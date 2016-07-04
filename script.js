$(document).ready(function() {
	var quotesJSON = [{
		"id": 0,
		"quoteText": "Anyone who doesn't believe in miracles is not a realist.",
		"quoteAuth": "David Ben-Gurion"
	}, {
		"id": 1,
		"quoteText": "You never lose by loving. You always lose by holding back.",
		"quoteAuth": "Barbara de Angelis"
	}, {
		"id": 2,
		"quoteText": "Art is anything you can get away with.",
		"quoteAuth": "Marshall McLuhan"
	}, {		
		"id": 3,
		"quoteText": "In the spring, at the end of the day, you should smell like dirt.",
		"quoteAuth": "Margaret Atwood"
	}, {
		"id": 4,
		"quoteText": "When you have confidence, you can have a lot of fun. And when you have fun, you can do amazing things.",
		"quoteAuth": "Joe Namath"
	}, {
		"id": 5,
		"quoteText": "Work hard, be kind, and amazing things will happen.",
		"quoteAuth": "Conan O'Brien"
	}, {
		"id": 6,
		"quoteText": "If you tell people where to go, but not how to get there, you'll be amazed at the results.",
		"quoteAuth": "George S. Patton"
	}];

	$('#new-quote').on("click", getNewQuote);
	
	var fonts = ["'Pacifico', cursive","'Kavivanar', cursive","'Reenie Beanie', cursive","'Delius', cursive","'Cedarville Cursive', cursive","'Swanky and Moo Moo', cursive"];
	
	function getNewQuote() {
		var minVal = 0,
				maxVal = quotesJSON.length - 1,
				randomID = Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal,
				randomFont = Math.floor(Math.random() * 6) + 1;
		showQuote(randomID,randomFont);
	}

	function showQuote(rID,font) {
		$("#quote-text, #quote-auth").addClass('fadeOut');
		quotesJSON.forEach(function(val) {
			if (val.id === rID) {
				
				$("#quote-text").html(val.quoteText).css('font-family',fonts[font]);
				$("#quote-auth").html(" - " + val.quoteAuth);
				
				$("#quote-text, #quote-auth, #tweet").css('display','block').removeClass('fadeOut').addClass('fadeIn');
				
				$("#tweet").attr('href','https://twitter.com/intent/tweet?text="'+val.quoteText+'" - '+val.quoteAuth);
			}
		});
	}
});