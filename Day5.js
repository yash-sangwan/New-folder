/*

                    Programming Question: Sort an Array

    Write a function to sort an array of numbers in an ascending order.

    // Example usage:
 console.log(sortAscending([5, 3, 1, 8])); // Output: [1, 3, 5, 8]
 console.log(sortAscending([5, 3, 10, 8])); // Output: [3, 5, 8, 10]
 console.log(typeof sortAscending[2]);

     //todo Requirements:
The function should take an array of numbers as input.
It should return a new array with the numbers sorted in ascending
The original array should remain unchanged.
You are not allowed to use the built-in sort() method.


*/



const sortAscending = (numArr) => {


    let dupp = [...numArr];
    let temp;


    for (let i = 0; i < dupp.length; i++) {

        for (let j = 0; j < dupp.length-1; j++) {
    
            // console.log(dupp[j]>dupp[j-1]);
            if (dupp[j] > dupp[j+1]) {
                temp = dupp[j]
                // console.log(temp);
                dupp[j] = dupp[j+1]
                dupp[j+1] = temp
                // console.log(temp);
            }
        }
        
    }
    // console.log(dupp);
// console.log(temp);
}

sortAscending([8, 11, 6])



