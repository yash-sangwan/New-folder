/*

//Write a function that takes a number as input and returns the sum of its digits.

// Example usage:
console.log(sumOfDigits (1234)); // Output: 10
console.log (sumOfDigits(4321)); // Output: 10
console.log (sumOfDigits (123456)); // Output: 21

// Constraints:
// The input number will always be a positive integer.
// The input number can have multiple digits.
// The output should be the sum of all the digits in the input number.

// Advance Constraints 
// This function calculates the sum of digits without converting the number

*/

const sumOfDigits = (num) => {
  if (num > 0) {
    let str = num.toString();
    let newNum = str.split("");
    // console.log(newNum);
    let temp = 0;
    for (let i = 0; i < newNum.length; i++) {
      temp = temp + Number(newNum[i]);
    }
    return temp
  }
};

console.log(sumOfDigits1(1234)); // Output: 10
console.log(sumOfDigits1(4321)); // Output: 10
console.log(sumOfDigits1(123456)); // Output: 21


// adv constraint soln

const sumOfDigits1 = (num) => {
    let sum = 0;
    while (num > 0) {
      sum += num % 10; // Add the last digit to the sum
      num = Math.floor(num / 10); // Remove the last digit from the number
    }
    return sum;
  };
  
  console.log(sumOfDigits1(1234)); // Output: 10
  console.log(sumOfDigits1(4321)); // Output: 10
  console.log(sumOfDigits1(123456)); // Output: 21
  