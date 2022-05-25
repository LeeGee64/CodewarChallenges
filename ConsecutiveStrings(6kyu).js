//You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
//n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).
//Note
//consecutive strings : follow one after another without an interruption

//Solution:

function longestConsec(strarr, k) {
  if(strarr.length === 0 | strarr.length < k | k <= 0){
    return "";
  }else if(k===1){
    var testArr = "";
  strarr.forEach((freshArr,currInd)=> 
              {freshArr = strarr[currInd];
              if(testArr.length < freshArr.length){testArr = freshArr}
              })
  return testArr;
  }else {
  var testArr = new Array(k);
  strarr.forEach((freshArr,currInd)=> 
              {freshArr = strarr.slice(currInd-1,currInd + (k-1));
              if(testArr.join('').length < freshArr.join('').length){testArr = freshArr}
              })
  return testArr.join('');
