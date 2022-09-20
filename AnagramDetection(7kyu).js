//An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

//Note: anagrams are case insensitive

//Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

//Solution:

var isAnagram = function(test, original) {
  let lTest = test.toLowerCase();
  let lOriginal = original.toLowerCase();
  
  return (lTest.split('').sort((a,b) => (a.localeCompare(b))).join('') === lOriginal.split('').sort((a,b) => (a.localeCompare(b))).join(''));
};
