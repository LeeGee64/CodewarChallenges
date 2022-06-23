//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
//Return your answer as a number.

function sumMix(x){
  let sum = x.reduce ((prev, curr) =>
                      {
                        prev = parseInt(prev) + parseInt(curr);
                        return prev;
                      });
  
  return sum;
}
