/*
        Interview Question: Count Occurrences of Character

 Task:
    Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of times the specified character appears in the string.


    console.log(countChar("MissIssippi", "I")); // Output: 4

 Todo Constraints:
    The function should be case-sensitive.
    The function should handle both lowercase and uppercase characters.
    The character parameter can be any printable ASCII character (the function should accept any character that is part of the ASCII character set and is printable).


*/



// the below is soln is for case sensitive, if we want to make it case-insensitive then we can simply make the str and char to uppercase or lowercase and then count that..


const countChar = (str, char) => {

    let strSplit = str.split("");
    
    // console.log(strSplit);
    let count = 0

    for (let i = 0; i < strSplit.length; i++) {

        if (char === strSplit[i]) {
            count++;
        }

    }

    return count;


}

console.log(countChar("MissIssippi", "I"));