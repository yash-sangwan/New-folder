/*

// Write a function arraysAreEqual that takes two arrays arri and arr2 as input and returns true if the arrays are equal (i.e., contain the same elements in the same order), and false otherwise.

// Example usage:
console.log(arraysAreEqual ( [1, 2, 31], [1, 2, 31] )); // Output: true
console.log(arraysAreEqual ( [1, 2, 31], [1, 2, 41] )); // Output: false
console.log(arraysAreEqual([], [])); // Output: true

//Note:
// The function should return false if the arrays have different lengths.
// The function should compare each element of arri with the corresponding element in arr2.
// The function should return true only if all elements in arri are equal to their corresponding elements in arr2.

*/


const arraysAreEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {

            if (arr1[i] !== arr2[i]) {
                return false;
            }
        
    }
    return true

}

console.log(arraysAreEqual ( [1, 2, 31], [1, 2, 31] )); // Output: true