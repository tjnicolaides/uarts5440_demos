var animals = ['Cow', 'Horse', 'Chicken', 'Pig', 'Dog'];

//console.log(animals);

// let's say good night to all of our animals

document.write('<ol>');

for(var i = 0; i < animals.length; i++) {
	document.write('<li>Good night, ' + animals[i] + '.</li>');
}

document.write('</ol>');


/*var numbers = [1, 2, 3, 4, 5];

for (var i = 0; i < numbers.length; i++) {

	//var squared = numbers[i] * numbers[i];
	
	//console.log(squared);
	
}

// square the numbers*/