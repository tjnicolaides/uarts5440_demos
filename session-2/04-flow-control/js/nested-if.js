// if, if + else, if + else if + else


var yardsToGo = 45;
var homeGame = false;
var play = 30;
var scoringPlay = play >= yardsToGo;

if(homeGame) {
    // Philadelphia
    
    if(scoringPlay) {
        
        alert('Touchdown! And the crowd goes wild!');
        
    } else {
        
        alert('Fourth down, and they\'ll be forced to punt. Oh my, these fans are getting SURLY.');
   
    }
    
} else {
   // Some other stadium 
    
    if(scoringPlay) {
        
        alert('Touchdown! Oh my, these fans are getting SURLY.');
    } else {
        
        alert('Fourth down, and the crowd goes wild.');
    }
    
}

/*

Touchdown!
Fourth down, and they'll be forced to punt.

And the crowd goes wild!
Oh my, these fans are getting SURLY.

*/