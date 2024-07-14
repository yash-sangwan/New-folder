/*

// Challenge: Calculate the Average

Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.

// Your function should:
     Accept an array of numbers as input.
     Calculate the sum of all the numbers in the array.
     Divide the sum by the total number of elements in the array to find the average.
     Return the calculated average.

*/

const calculateAverage = (arr) => {
  let sum = arr.reduce((accum,current) => {
    return accum + current
});
// console.log(sum);
let avg = sum / arr.length
return avg
};

console.log(calculateAverage([1,3,4,2]));
