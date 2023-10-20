const foods = ['pizza', 'burger', 'fingerChips', 'donuts', 'springRoll'];
const numberArray = [12, 324, 213, 4, 2, 3, 45, 4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
function slice(start, end) {
  let modifiedFood = [];
  for (let i = start; i < end - 1; i++) {
    modifiedFood.push(foods[i]);
  }
  return modifiedFood;
}

// Progression 2:
function spliced() {
  foods.splice(2, 0, 'noodles', 'icecream');
  return foods;
}
// Progression 3:

function isEven(number) {
  return number % 2 == 0 ? true : false;
}

function isPrime(number) {
  for (let i = 2, sq = Math.sqrt(number); i <= sq; i++)
    if (number % i === 0) return false;
  return number > 1;
}

function checkNumber(numberArray, operation) {
  modifiedNumberArray = numberArray.filter(operation);
  return modifiedNumberArray;
}

// Progression 4:
function reject(numberArray) {
  let nonPrimeNumberArray = [];
  numberArray.forEach((number) => {
    isPrime(number) ? null : nonPrimeNumberArray.push(number);
  });

  return nonPrimeNumberArray;
}

function nonPrime(numberArray) {
  answer = reject(numberArray);
  return answer;
}

// Progression 5:
const isEvenUsingLambda = (number) => {
  if (number % 2 == 0) {
    return true;
  }
};

// Progression 6:
function square(number) {
  return number ** 2;
}
function findSquareOfNumbers(myArray) {
  let sqArray = myArray.map(square);
  return sqArray;
}

// Progression 7:
function multiply(myArray) {
  return myArray.reduce((number1, number2) => {
    return number1 * number2;
  });
}

function sumOfSquares(myArray) {
  return myArray.map(square).reduce((number1, number2) => {
    return number1 + number2;
  });
}
