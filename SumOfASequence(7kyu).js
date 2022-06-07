//Your task is to make function, which returns the sum of a sequence of integers.

//The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

//If begin value is greater than the end, function should returns 0

//Solution:

const sequenceSum = (begin, end, step) => {
  let sum = 0;
  let i = begin;
  
  if (end < begin){return 0}else{
  while (i <= end){
    sum += i;
    i += step;
  }
  
  return sum;}
};
