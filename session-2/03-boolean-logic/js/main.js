// "falsy" or "false-ish" values = false, null, undefined, '', 0, NaN
// "truthy" values = true, anything not falsy

// here's a microwave. Just go with it:

var cook_time = prompt('How long should we cook it for?');
    cook_time = parseInt(cook_time);
    
var min_cook_time = 60;

if(cook_time > min_cook_time) {
    
    alert('It\'s scalding hot! Ouch');
    
} else if ( cook_time === min_cook_time) {
    
    alert('Your hot pocket is perfectly cooked.');
    
} else {
    
    alert('Still frozen. Ew.');
    
}


// inequality ... >= <= > <
// loose equality == !=
// strict equality === !==
// AND &&
// OR ||