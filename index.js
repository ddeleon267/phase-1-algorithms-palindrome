// your function only needs to deal with lowercase strings that are all letters
// (don't worry about spaces or special characters).

//1. Rewrite the Problem in Your Own Words
// When given a lowercased word, check to see that the work reads the same forward
// and backwards. If this is the case, return true; otherwise, return false.


function isPalindrome(word) {
  return word === word.split("").reverse().join("")
}

/* 3. Pseudocode
  Add your pseudocode here
  // simplest case - check and see if word equals its reversed version
*/

/*
  // determine reversed version of word 
  // => use split to change word to an array, then reverse, then join back to a string
  // strictly compare word to reversed version, return result of comparison
*/

// 2 - Test cases
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  // adding my own test cases
  console.log("Expecting: false");
  console.log("=>", isPalindrome("banana"))

  console.log("Expecting: true");
  console.log("=>", isPalindrome("amanaplanacanalpanama"))
}

module.exports = isPalindrome;
