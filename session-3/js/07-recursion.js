var power = function (base, exponent) {
  if (exponent === 0) {
    return 1;
  } else {
    console.log(exponent);
    return base * power(base, exponent - 1);
  }
}

console.log(power(3,10))