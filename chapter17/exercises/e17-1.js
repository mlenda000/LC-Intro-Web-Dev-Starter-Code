// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:

function divide(numerator, denominator){
    if (denominator === 0){
      throw Error("You cannot divide by zero!");
    }
    let answer = numerator/denominator;
  return answer;
  };
  
  //check to see if divided properly or if its by 0
  console.log(divide(5,10));
  console.log(divide(10,0));