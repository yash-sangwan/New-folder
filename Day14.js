/*

14: Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two, and false otherwise.

// Example usage:
    console.log (isPower0fTwo(8)); // Output: true
    console.log (isPower0fTwo(7)); // Output: false
    
    // Notes:
// The input num will be a positive integer.
// Zero (0) and negative integers are not considered powers of two.
// The function should return true if the given number is a power of 2, and false otherwise.

*/

const isPowerOfTwo = (num) => {
    if (num <= 0) {
      console.log("Number should be positive and greater than zero.");
      return false;
    }
  
    // Check if num is a power of two
    const isPower = (num & (num - 1)) === 0;
  
    return isPower;
  };
  
  // Example usage:
  console.log(isPowerOfTwo(8));  // Output: true
  console.log(isPowerOfTwo(7));  // Output: false
  console.log(isPowerOfTwo(16)); // Output: true
  console.log(isPowerOfTwo(82)); // Output: false
  

    