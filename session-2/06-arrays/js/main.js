var animals = ['Cow', 'Horse', 'Chicken', 'Pig', 'Dog', 'Mouse'];

console.log(animals);

// let's say good night to all of our animals

for(var j = 0; j < animals.length; j++) {
    // say good night
    var count = j+1;
    console.log(count + ': Good night, ' + animals[j]);
}


var numbers = [1, 2, 3, 4, 5];

// square all of the numbers, please:

for(var j = 0; j < numbers.length; j++) {
    // square this number
    console.log(numbers[j] * numbers[j]);
}
