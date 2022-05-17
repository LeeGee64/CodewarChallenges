//In this simple Kata your task is to create a function that turns a string into a Mexican Wave. You will be passed a string and you must return that string in an array where an uppercase letter is a person standing up. 

//Rules

 //1.  The input string will always be lower case but maybe empty.

 //2.  If the character in the string is whitespace then pass over it as if it was an empty seat

//Example: wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

//Solution:
function wave(str){
  let waveArr = [];
  
  for(i=0; i<str.length; i++){
    let strArr = str.toLowerCase().split('');
    if(strArr[i] != " "){
    strArr[i] = strArr[i].toUpperCase();
    waveArr.push(strArr.join(''));}; 
  }
  
  return waveArr;
}
