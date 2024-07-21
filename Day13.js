/*

 13: Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a', 'e', 'i', 'o', and 'u' as vowels (both lowercase and uppercase).
    
// Example usage:
    console.log (countVowels("Helloo world")); // Output: 3
    console.log (countVowels ("ThE quick brOwn fOx")); // Output: 5
    console.log (countVowels ("Brrrp")); // Output: 0
    
    
    // Constraints:
    // The input string may contain letters in both uppercase and lowercase.
    // The output should be a non-negative integer representing the count of vowels in the input string.
    
    */
   
   const countVowels = (str) => {
  str = str.toLowerCase()
  strArr = str.split("")
  let vowels = ["a","e","i","o","u"]
    let count = 0
    for (let i = 0; i < strArr.length; i++) {
        if (vowels.includes(strArr[i])) {
            count++
        }
        
    }
    return count;
}

console.log (countVowels("Helloo world")); // Output: 4
console.log (countVowels ("ThE quick brOwn fOx")); // Output: 5
console.log (countVowels ("Brrrp")); // Output: 0


// Other Solution

const countVowels2 = (str) => {
    str = str.toLowerCase();
    let strArr = str.split("");
    let vowels = ["a", "e", "i", "o", "u"];
    let count = 0;
    
    for (let i = 0; i < strArr.length; i++) {
      if (strArr[i] === vowels[0] || 
          strArr[i] === vowels[1] || 
          strArr[i] === vowels[2] || 
          strArr[i] === vowels[3] || 
          strArr[i] === vowels[4]) {
        count++;
      }
    }
    
    console.log(count);
  };
  
  countVowels2("helloWORLD"); // output -> 3
  
