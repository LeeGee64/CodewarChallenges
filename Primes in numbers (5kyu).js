//Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

// "(p1**n1)(p2**n2)...(pk**nk)"

//with the p(i) in increasing order and n(i) empty if n(i) is 1.

//Example: n = 86240 should return "(2**5)(5)(7**2)(11)" 

//'Solution':

function primeFactors(n){
  let i = 2;
  let count = 1;
  let primeSet = {};
  let resStr = "";
  
  //creates an object with each prime number along with the primization count
  while (n > 1 ){
    if(n % i === 0){
      primeSet[`${i}`] = count++;
      n = n / i;
    } else {count = 1; i++;}
  }
  
  //converts entries in primeSet object into the result string
  Object.entries(primeSet).forEach(([key, value]) => {
    if(value >1){resStr += `(${key}**${value})`;}else{resStr += `(${key})`;};});
  
  //returns the result
  return resStr;
}

