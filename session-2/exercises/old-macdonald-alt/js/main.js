var animal = prompt('Which animal?');

var sound = prompt('What sound does the ' + animal + ' make?');

var lyrics = ['Old McDonald had a farm.', 
    'E I E I O.', 'And on that farm he had a ' + animal,
    'E I E I O.', 'With a ' + sound + ' ' + sound + ' here',
    'And a ' + sound + ' ' + sound + ' there',
    'Here a ' + sound + ', there a ' + sound,
    'Everywhere a ' + sound + ' ' + sound,
    'Old McDonald had a farm.', 
    'E I E I O.'];

for(var i = 0; i < lyrics.length; i++) {
    document.write(lyrics[i] + '<br>');   
}