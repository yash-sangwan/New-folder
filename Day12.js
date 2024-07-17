/*

// Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.

// Example usage:
console.log (removeDuplicates ( [1, 2, 3, 2, 1, 41)); // Output: [1, 2, 3, 4]
console.log(removeDuplicates ( [5, 6, 7, 7, 8, 8, 91)); // Output: [5, 6, 7, 8,9]
console.log(removeDuplicates ( [1, 2, 3, 4])); // Output: [1, 2, 3, 4]
console.log (removeDuplicates([])); // Output: []

// The new Set() method in JavaScript creates a new Set object. A Set object is a collection of unique values. It can store any type of value,whether primitive values or object references.

// Constraints:

// The input array may contain both positive and negative integers.
// The input array may be empty.
// The elements in the input array are not guaranteed to be sorted.
// The output array should retain the original order of elements from the input array.

*/

const removeDuplicates = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!newArr.includes(arr[i])) {
      newArr.push(arr[i]);
    }
}
return newArr;    
};

console.log(removeDuplicates1([1, 2, 3, 2, 1, 41])); // Output: [1,2,3,41]
console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 91])); // Output: [5, 6, 7, 8,91]
console.log(removeDuplicates([1, 2, 3, 4])); // Output: [1, 2, 3, 4]
console.log(removeDuplicates([])); // Output: []




// Another Solution 


const removeDuplicates1 = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < newArr.length; j++) {
            if (arr[i]===newArr[j]) {
                isDuplicate = true;
                break;
            }            
        }
        if (!isDuplicate) {
            newArr.push(arr[i])
        }
    }
    return newArr;
};

console.log(removeDuplicates1([1, 2, 3, 2, 1, 41])); // Output: [1,2,3,41]
console.log(removeDuplicates1([5, 6, 7, 7, 8, 8, 91])); // Output: [5, 6, 7, 8,91]
console.log(removeDuplicates1([1, 2, 3, 4])); // Output: [1, 2, 3, 4]
console.log(removeDuplicates1([])); // Output: []
