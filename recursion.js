//Factorial

//Iterative
function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i++) {
    total *= i;
  }
  return total;
}

//Recursive
function factorialR(num) {
  if (num === 1) return 1;
  return num * factorial(num - 1);
}

//COLLECT ODD VALUES
//Helper method recursion
function collectOddValues(arr) {
  //define collection array outside of recursive function
  //so it does not disappear
  let result = [];

  //recurse here
  function helper(helperInput) {
    //base case
    if (helperInput.length === 0) {
      return;
    }
    //if its even add to the result array
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    //else delete it
    helper(helperInput.slice(1));
  }
  helper(arr);
  return result;
}

//Pure recursion
function collectOdValuesPure(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  //concat all arrays
  newArr = newArr.concat(collectOdValuesPure(arr.slice(1)));
  return newArr;
}
