//Task
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

//Solution


function towerBuilder(nFloors) {
  let towerArray =[];
  let star = "*";
  let space = " ";
  
  for(let i=0;i<nFloors;i++){
    towerArray.push(space.repeat(nFloors-(i+1)) + star.repeat(1+(i*2)) + space.repeat(nFloors-(i+1)));
  }
  
  return towerArray;
}
