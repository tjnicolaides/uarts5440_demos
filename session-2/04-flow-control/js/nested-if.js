// if, if + else, if + else if + else


var yardsToGo = 45;
var homeGame = true;

var play = 50;

if(play >= yardsToGo) {
	
	console.log('Touchdown!');
    
    if(homeGame) {
        
        console.log("And the crowd goes wild!");
        
    } else {
        
        console.log("Oh my, these fans are getting SURLY.");
        
    }
		
} else  {

    console.log("Fourth down, and they'll be forced to punt.");
    
    if(homeGame) {
        
        console.log("Oh my, these fans are getting SURLY.");
        
    } else {
        
        console.log("And the crowd goes wild!");
        
    }

}

/*

Touchdown!
Fourth down, and they'll be forced to punt.

And the crowd goes wild!
Oh my, these fans are getting SURLY.

*/