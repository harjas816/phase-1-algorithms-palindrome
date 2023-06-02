function isPalindrome(word) {
  let chars = []
  let comparator = ""
  for (i of word){
    chars.push(i)
    }
  let charsReverse = chars.reverse()
  for (i of charsReverse){
    comparator = comparator + i
  }
  if (comparator == word){
    return true
  }
  else{
    return false
  }
}

/* 
  Add your pseudocode here
  
  make a list (chars) to push string characters in 
  make a string (comparator) to eventually concatneate 
  for(the characters in the string){
    push them into chars
  }
  make a list that is just chars but in reverse order
  for(everything in this new reversed chars list){
    concatenate characters with comparator
  }
  if (comparator matches word exactly){
    return true
  }
  else (if comparator doesn't match word){
    return false
  }
*/

/*
  Add written explanation of your solution here
  I took the given string (in this case the parameter "word"),
  and put all of its characters into a list. I then reversed that list,
  and added all the characters of the reverse list to an empty string in order to compare it to the given word.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
