function createDice(num) {
	for(var i = 0; i < num; i++) {
		$('#dice-container').append('<div class="die one"></div>');
	}
}

function rollDice() {
	$('.die').each(function(){
		animateDie($(this));		
	});
}

function animateDie($die) {
	var timer = Math.floor(Math.random() * (2100 - 1500 + 1) + 1500);
	var sides = ['one', 'two', 'three', 'four', 'five', 'six'];
    var interval = setInterval(function(){
        $die.removeClass('one two three four five six');
        $die.addClass(sides[Math.floor(Math.random() * sides.length)]);
    }, 100);
    var timeout = setTimeout(function(){
        clearInterval(interval);
        checkForMatch();
    }, timer);
    
}

function checkForMatch() {
	var sides = ['one', 'two', 'three', 'four', 'five', 'six'];
	var numDie = $('.die').length;
	for(var i = 0; i < sides.length; i++) {
		var matching = $('.' + sides[i]).length;
		if(matching === numDie) {
			$('.hero-unit').removeClass('hide');
		}
	}
}

$(document).ready(function() {

	createDice(10);
	
	$('#trigger').on('click', function(){
		rollDice();
	});

});