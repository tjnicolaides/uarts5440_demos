// "falsy" or "false-ish" values = false, null, undefined, '', 0, NaN
// "truthy" values = true, anything not falsy

// here's a microwave. Just go with it:

var cook_time = '0';
var min_cook_time = 60;

var notZero = cook_time !== 0; // true
//var lessThanCookTime = (cook_time < min_cook_time); // true

if(notZero) {
    
    console.log('your hot pocket is being cooked RIGHT NOW.');

} /*else if (!greaterThanZero  && lessThanCookTime) {
    
    console.log('Your Hot Pocket is half done');
        
    
}*/ else {
    
    console.log('your hot pocket is like a frozen cheese brick');
}

// inequality ... >= <= > <
// loose equality == !=
// strict equality === !==
// AND &&
// OR ||