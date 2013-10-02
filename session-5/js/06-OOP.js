var s, DiceGame;

$(document).ready(function(){
    s,
    DiceGame = {
        settings: {
            numDice: 2,
            dieSides: ['one', 'two', 'three', 'four', 'five', 'six'],
            rollTrigger: $('#trigger'),
            prizeMsg: $('#prize-msg')
        },
        init: function() {
            s = this.settings;
            
            // render dice

                for(var i = 0; i < s.numDice; i++) {
                    this.dice.create();
                }
            // bind click listener to rollTrigger
            s.rollTrigger.on('click', function(){
				DiceGame.dice.roll();
			});
        },
        dice: {
            container: $('#dice-container'),
            create: function(){
    			this.container.append('<div class="die one"></div>');
			},
            roll: function() {
				var $die = $('.die');
				var timer = Math.floor(Math.random() * (2100 - 1500 + 1) + 1500);
			    var interval = setInterval(function(){
			        $die.removeClass('one two three four five six');
			        $die.addClass(s.dieSides[Math.floor(Math.random() * s.dieSides.length)]);
			    }, 100);
			    var timeout = setTimeout(function(){
			        clearInterval(interval);
			        DiceGame.checkForMatch();
			    }, timer);
			}
        },
        checkForMatch: function() {
			for(var i = 0; i < s.dieSides.length; i++) {
				var matching = $('.' + s.dieSides[i]).length;
				if(matching === s.numDice) {
					s.prizeMsg.removeClass('hide');
				}
			}
		}
    }
    
    DiceGame.init();

});