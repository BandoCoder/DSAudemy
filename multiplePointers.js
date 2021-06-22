//Creating pointers or values that correspond to an index or position
//and move towards the beginning, end, or middle based on a certain
//condition.  Very efficient for solving problems with minimal space
//complexity as well.

//PROBLEM: Write a function called sumZero which accepts a sorted array
//of ints.  The function should find the first pair where the sum is 0.
//Return an array that includes both values that sum to zero or undefined
//if a pair does not exist.

//Naive Solution
function sumZeroNaive(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[1], arr[j]];
      }
    }
  }
}

//Multiple Pointers solution
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

function countVals(arr) {
  //two pointers i and j
  //if same move j forward
  //if different move i up one and replace with j index value
  //one j is at the end return index i + 1
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}
