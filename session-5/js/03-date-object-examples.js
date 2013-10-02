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
	for (var i = 0; i < 1000; i++) {
        //Math.sqrt(i);
		//console.log(Math.sqrt(i));
	}
	end = new Date();
	
	console.log("Operation took " + (end.getTime() - start.getTime()) + " msec");
}

// COMPARE DATES LIKE INTEGERS
//console.log(today.getTime() < anotherDate.getTime()); // is today before or after anotherDate?

function should_I_panic() {
	var oneWeekFromNow = new Date();
		oneWeekFromNow.setDate(oneWeekFromNow.getDate() + 7);
		
	var urgentDate = new Date(2013, 6, 4);
	
	if(oneWeekFromNow.getTime() > urgentDate.getTime()) {
		console.log('Your appointment is in less than a week! PANIC.');
	} else {
		console.log('You\'ve got plenty of time. Kick back and relax, go watch Ghostbusters again or something.');
	}
}


// Dates are a great example of where an external library can be a big help. Here are two really good ones:

// Date.js has a very wide range of methods available to get and convert dates and times.
// https://code.google.com/p/datejs/

// Moment.js is also robust and has the ability to convert date objects into user-friendly strings like "8 hours ago" or "in 10 minutes"
// http://momentjs.com/

