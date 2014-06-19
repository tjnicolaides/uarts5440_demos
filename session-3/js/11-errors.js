function lastElement(array) {
  if (array.length > 0)
    return array[array.length - 1];
  else
    throw "Can not take the last element of an empty array.";
}


function lastElementPlusTen(array) {
  return lastElement(array) + 10;
}

var result = lastElementPlusTen([]);

console.log(result);

try {
    var result = lastElementPlusTen([]);

    console.log(result);
    
} catch (error) {
  console.log("Something went wrong: ");
  console.log(error);
}


console.log('made it to the end!');

