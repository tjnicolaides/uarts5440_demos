for(var i = 1; i <= 100; i++) {
    
    var divisibleBy3 = i % 3 === 0;
    var divisibleBy5 = i % 5 === 0;
    var divisibleByBoth = divisibleBy3 && divisibleBy5;
    
    if(divisibleByBoth) {
        console.log('FizzBuzz');
    } else if (divisibleBy5) {
        console.log('Buzz');
    } else if (divisibleBy3) {
        console.log('Fizz');
    } else {
        console.log(i);
    }
    
}