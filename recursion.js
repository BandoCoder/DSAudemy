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
  if (num <= 1) return 1;
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
function collectOddValuesPure(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }
  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  //concat all arrays
  newArr = newArr.concat(collectOddValuesPure(arr.slice(1)));
  return newArr;
}

//Power
function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

//Product of array
function productOfArray(arr) {
  if (arr.length === 0) {
    return 1;
  }
  return arr[0] * productOfArray(arr.slice(1));
}

//Recursive Range
function recursiveRange(num) {
  if (num === 0) return 0;
  return num + recursiveRange(num - 1);
}

//Fibonacci
function fib(num) {
  if (num <= 2) return 1;
  return fib(num - 1) + fib(num - 2);
}

//Reverse String
function reverse(str) {
  if (str === "") {
    return "";
  } else {
    return reverse(str.substr(1)) + str.charAt(0);
  }
}

//Is palindrome
function isPalindrome(str) {
  //Reverse String
  function reverse(input) {
    if (input === "") {
      return "";
    } else {
      return reverse(input.substr(1)) + input.charAt(0);
    }
  }
  //Save it to variable
  let reverseStr = reverse(str);

  //Check it
  return str === reverseStr ? true : false;
}

//Is Palindrome Simpler
//If we keep comparing the beginning and the end, and they keep being equal
//We remove it and do i again, if we end up with one left its true
//If we end up with two left we check if they are the same and return
//The result
function isPalindrome2(str) {
  //Check if length is 1, return true if it is
  if (str.length === 1) return true;
  //Ckeck if length is 2, return the result of comparing both
  if (str.length === 2) return str[0] === str[1];
  //Recursive calls.
  if (str[0] === str.slice(-1)) return isPalindrome2(str.slice(1, -1));
  //If we reach the end return false
  return false;
}

function someRecursive(arr, cb) {
  //Base case, emptry array returns false because nothing is falsey
  if (arr.length === 0) return false;
  //run the callback, if callback returns true return true
  if (cb(arr[0])) return true;
  //Recursive call, keeps slicing off array elements unitl base case
  //is reached, running the callback on each one as we go
  return someRecursive(arr.slice(1), cb);
}

//Flatten (arrays within arrays, pull them out into one single array)
function flatten(oldArr) {
  //Create new array to return
  var newArr = [];
  //Iterate over old array
  for (var i = 0; i < oldArr.length; i++) {
    //This method checks if the element is an array, returns bool about it
    if (Array.isArray(oldArr[i])) {
      //We concat the elements, checking for more nested arrays as we go
      newArr = newArr.concat(flatten(oldArr[i]));
    } else {
      //Once we have drilled down and there is no array, push it to the
      //new array.
      newArr.push(oldArr[i]);
    }
  }
  //Return the new array
  return newArr;
}

//Capitalize Words
function capitalizeWords(array) {
  //Base Case, final capitalization
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  //Initialize result variable calling the fucntion recursively and
  //Slicing the array each time we call it until base case is reached
  let res = capitalizeWords(array.slice(0, -1));
  //Capitalize the word and push it to result array
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  //Return the result
  return res;
}

//Nested Even sum
function nestedEvenSum(obj, sum = 0) {
  for (var key in obj) {
    if (typeof obj[key] === "object") {
      sum += nestedEvenSum(obj[key]);
    } else if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    }
  }
  return sum;
}

//Capitalize Words (fire)
function capitalizeFirst(array) {
  if (array.length === 1) {
    return [array[0][0].toUpperCase() + array[0].substr(1)];
  }
  const res = capitalizeFirst(array.slice(0, -1));
  const string =
    array.slice(array.length - 1)[0][0].toUpperCase() +
    array.slice(array.length - 1)[0].substr(1);
  res.push(string);
  return res;
}

//Stringify Numbers
function stringifyNumbers(obj) {
  var newObj = {};
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      newObj[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObj[key] = stringifyNumbers(obj[key]);
    } else {
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

//collectStrings Solution: Helper Method Recursion Version

function collectStrings(obj) {
  var stringsArr = [];

  function gatherStrings(o) {
    for (var key in o) {
      if (typeof o[key] === "string") {
        stringsArr.push(o[key]);
      } else if (typeof o[key] === "object") {
        return gatherStrings(o[key]);
      }
    }
  }

  gatherStrings(obj);

  return stringsArr;
}
//collectStrings Solution: Pure Recursion Version

function collectStrings(obj) {
  var stringsArr = [];
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      stringsArr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      stringsArr = stringsArr.concat(collectStrings(obj[key]));
    }
  }

  return stringsArr;
}
