/*

    Question
write a function findLongestWord that takes a String as input and returns the longest word in the String. If there are mulitple largest word in the string, return the first one encountered.

    Constraints:
 The input string may contain alphabetic characters, digits, spaces, and punctuation.
 The input string is non-empty.
 The input string may contain multiple words separated by spaces.
        
    Note:
 If the input string is empty or contains only whitespace, the function should return an false.
 The function should ignore leading and trailing whitespace when determining the longest word.

 */


/* 

solution number 1 (took 40 minutes)

*/

let str = "hello there i am yash sangwan"
let str1 = "hello there i am yash sangwan justchecking"
let str2 = "beforechecks hello there i am yash sangwan justchecking"
let arrStr = str.split(" ")
let arrLen = str.split(" ").length;
let len = str.length;
// console.log(len);
const findLongestWord = () => {
    let longestWord = ""
    for (let i = 0; i < arrLen; i++) {
        // console.log(str[i]);
        // arrStr[i]
        // console.log(arrStr[i]);
        // for (let j = 0; j < ; j++) {

        // }

        let charLen = arrStr[i].length
        // console.log(longestWord.length);
        if (charLen > longestWord.length) {
            longestWord = arrStr[i]
            // console.log(longestWord.length);
        }

        // let charArr = []
        // charArr.push(charLen)
        // console.log(charArr);

    }
    console.log(longestWord);
}


// findLongestWord()

/*

second way to do this

*/

const findLongestWord2 = (str) => {
    if (str.trim().length = 0) {  // trim() , it trim the trailing and ending white spaces from a string.

        return false;
    }
    words = str.split(" ");

    words = words.sort((a, b) => b.length - a.length); // sorting help in sorting via unicodes value if we didn't give the callback func inside it, b - a gives the decending output , a - b gives the acending outputs  

    // if we did, Pwords = words.sort((a, b) => a.length - b.length);   // a - b
    // then we can get the longest word in the end of the array like this,
    
    // return words.at(-1)

    // console. log(words);
    return words[0];

}
console.log(findLongestWord2("hello there i am yash sangwan")); // we are returning the output in function (return words[0]), thats why console.log the func.
