// DATE OBJECTS
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date?redirectlocale=en-US&redirectslug=JavaScript%2FReference%2FGlobal_Objects%2FDate 


// CREATE NEW DATES
var today = new Date();
var anotherDate = new Date(1372534839863); // parse from milliseconds since Jan 1 1970 
var yetAnotherDate = new Date(1992, 03, 26); // parse using integers representing year, month, date, etc as arguments

// GET VALUES

// today.getDate(); // returns the date as an integer
// today.getMonth(); // returns month as an integer. Zero based means 6 = July
// today.getDay(); // day of the week as an integer. 0 = Sunday, 6 = Saturday, etc.


// SET VALUES

// anotherDate.setMonth(0); 
// anotherDate.setMinutes(25);

// MEASURE ACTUAL TIME IN YOUR APP 
function howLongDidItTake() {
	var end, start;
	
	start = new Date();
	
	    for(var i = 0; i < 10000; i++) {
	        console.log(Math.sqrt(i));
	    }
	
	end = new Date();
    
    var totalTime = end.getTime() - start.getTime();
    return 'This function took ' + totalTime + ' mseconds';
	
	// use date object's .getTime() method to get difference in milliseconds
}

// COMPARE DATES LIKE INTEGERS
//console.log(today.getTime() < anotherDate.getTime()); // is today before or after anotherDate?

function should_I_panic() {
	// get today's date
	var today = new Date();
	// add 7 days
	var deadline = new Date();
	deadline.setDate(today.getDate() + 7); 
	
	console.log(deadline);
	// compare it to the date of your appointment
	
	var appointment = new Date(2014, 05, 13);
	
	console.log(appointment);
	// if the appointment is less than seven days away, panic.
	
	if(appointment > today && appointment < deadline) {
	    return "You'd better get moving!";
	} else {
	    return "relax, go back to bed.";
	}
}


// Dates are a great example of where an external library can be a big help. Here are two really good ones:

// Date.js has a very wide range of methods available to get and convert dates and times.
// https://code.google.com/p/datejs/

// Moment.js is also robust and has the ability to convert date objects into user-friendly strings like "8 hours ago" or "in 10 minutes"
// http://momentjs.com/

