/*

// Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.

// Example usage:

console. log (findMax( [1, 5, 3, 9, 21])); // Output: 9
console. log (findMax([-10, -5, -3, -9, -21])); // Output: -2
console. log(findMax([5])); // Output: 5

*/

const findMax = (arr) => {
  // let res = arr.sort((a, b) => a - b); // a-b will do ascending
  let res = arr.sort((a, b) => b - a); // b-a will do decending
  return res[0];
};


// console. log (findMax( [1, 5, 3, 9, 21])); // Output: 9
// console. log (findMax([-10, -5, -3, -9, -21])); // Output: -3
// console. log(findMax([5])); // Output: 5


// solution 2

const findMax2 = (arr) => {
  arrLen = arr.length;
  let max = arr[0];
  for (let i = 0; i < arrLen; i++) {
    // console.log(arr[i]);
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
};

// console.log(findMax2([1, 5, 3, 9, 21])); // Output: 9
