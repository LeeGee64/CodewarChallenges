//As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

//The input to the function will be an array of three distinct numbers (Haskell: a tuple).

//Solution:
function gimme (triplet) {
  let midVal = triplet.find(x => x < Math.max(...triplet) && x > Math.min(...triplet)); 
  return triplet.indexOf(midVal);
}
