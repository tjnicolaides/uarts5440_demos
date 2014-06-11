// if, if + else, if + else if + else

var distance = prompt('How far did you hit the ball?');
    console.log(typeof distance);
    
    distance = parseInt(distance);
    console.log(typeof distance);

if(distance > 350) {
    alert('The crowd goes wild!');
} else if (distance === 350) {
    alert('Ground rule double!');
} else {
    alert('Booo!');
}

// the wall is 350 feet. Did you hit a home run?
