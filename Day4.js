/*
 Interview Question:

     Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene".

    console.log(checkTriangleType(3, 3, 3)); // Output: "equilateral"
    console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles"
    console.log(checkTriangleType(5, 8, 6)); // Output: "scalene"

//todo The function should adhere to the following rules:
    If only two sides are of equal length, return "isosceles".
    If all three sides are of equal length, return "equilateral".
    If all three sides have different lengths, return "scalene".

 */




const checkTriangleType = (side1, side2, side3) => {
    let sides = [side1, side2, side3];
    let count1 = sides.filter(side => side === side1).length;
    let count2 = sides.filter(side => side === side2).length;
    let count3 = sides.filter(side => side === side3).length;

    if (count1 === 3) {
        return "equilateral";
    } else if (count1 === 2 || count2 === 2 || count3 === 2) {
        return "isosceles";
    } else {
        return "scalene";
    }
}

console.log(checkTriangleType(3, 3, 3)); // Output: "equilateral"
console.log(checkTriangleType(3, 4, 3)); // Output: "isosceles"
console.log(checkTriangleType(5, 8, 6)); // Output: "scalene"
