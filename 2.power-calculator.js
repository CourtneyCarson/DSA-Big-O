// 2. Power Calculator
// Write a function called powerCalculator() that takes two parameters,
// an integer as a base, and another integer as an exponent.The function
// returns the value of the base raised to the power of the exponent.Use;
// only exponents greater than or equal to 0(positive numbers)

// powerCalculator(10,2) should return 100
// powerCalculator(10,-2) should return exponent should be >= 0

function powerCalculator(x, y) {
  if (y < 0) {
    console.log( 'exponent should be >= 0')
  }
  else {
    let answer = 1
    for (let i = 0; i < y; i++) {
      answer *= x
    }
    return answer;
  }
}
powerCalculator(1,2)





// recursive
function powerCalculator(x, y) {
  //base case
  if (y === 1) {
    return x;
  }
  if (y <= 0) {
    return ('exponent should be >=0');
  }

  //general case
  const answer = powerCalculator(x, y - 1);
  return x * (answer);
}

powerCalculator(10, 2);
powerCalculator(10, -2);
