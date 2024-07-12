/*

Programming Question: Hash Tag Generator

    You are required to implement a function generateHash that generates a hash tag from a given input string.

The hash tag should be constructed as follows:
    The input string should be converted to a hash tag format, where each word is capitalized and concatenated together without spaces.
    If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
    Otherwise, the function should return the generated hash tag prefixed with #.

// Write a function generateHash to accomplish this task.

*/


/*

solution (took 40 minutes)

*/



let final = []
const generateHash = (str) => {

    if (str.trim().length > 280 || str.trim() == 0) {
        return false;
    }

    let firstCap = []

    let strCap = str.split(" ")
    strCap.forEach(element => {
        firstCap.push(element.charAt(0).toUpperCase() + element.slice(1))
    });
    // console.log(firstCap);


    // let strSplit = str.split("")
    // console.log(strSplit);
    let strLen = firstCap.length


    for (let i = 0; i < strLen; i++) {
        if (firstCap[i] == " ") {
            continue
        } else {
            final.push(firstCap[i])
        }
    }
    // console.log(final);
    let result = final.join("")
    return "#" + result

}


// console.log(generateHash(" "));
// console.log(generateHash("hello"));
// console.log(generateHash("my name is yash"));
// console.log(generateHash("   my name is yash   "));




                                                // second way 


const generateHash2 = (str) => {

    if (str.length > 280 || str.trim().length === 0) {
        return false;
    }
    str = str.split(" ");
    str = str.map((element) => element.replace(element[0], element[0].toUpperCase()))
    // console.log(str);
    str = `#${str.join("")}`;

    return str;
}

// console.log(generateHash2("hello there i am yash"));


