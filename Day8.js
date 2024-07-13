/*

// Challenge: Factorial Finder

// Write a function factorial that takes a non-negative integer num as input and returns its factorial. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. 
The factorial of 0 is defined as 1.

// Here are some examples of factorial calculations:
// factorial(0) →> 1
// factorial(1) => 1
// factorial(2) => 2
// factorial(3) => 6
// factorial(4) => 24
// factorial(5) => 120

*/

const factorial = (num) => {
    if (num < 0) return "Factorial not defined for negative numbers"; // Edge case for negative numbers
    if (num === 0 || num === 1) return 1; // Factorial of 0 or 1 is 1
    let res = 1;
    for (let i = 2; i <= num; i++) {
         res *= i       
    }
    return res;
}

console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
