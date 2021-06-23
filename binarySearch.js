//Function accepts a sorted array and a value
//Create a left pointer at the start of the array
//and a right pointer at the end of an array.
//While the left pointer comes before the right pointer:
//Create a pointer in the middle
//If you find the value you want, return the index
//If the value is too small move the left pointer up
//If the value is too large, move the right pointer down
//If you never find the value, return -1

function binarySearch(arr, val) {
  // add whatever parameters you deem necessary - good luck!
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === val) {
      return middle;
    } else if (val < arr[middle]) {
      left = middle - 1;
    } else {
      right = middle + 1;
    }
  }
  return -1;
}

function binarySearch2(arr, val) {
  //Make pointers, start end and middle
  let start = 0;
  let end = arr.length - 1;
  //Round somewhere, we chose down
  let middle = Math.floor((start + end) / 2);
  //while middle doesn't equal val and the start is less than the end index
  while (arr[middle] !== val && start <= end) {
    //If value less than middle, move the end pointer minus 1 because we checked that one
    if (val < arr[middle]) {
      end = middle - 1;
      //Else move the start pointer plus 1 because we checked that one
    } else {
      start = middle + 1;
    }
    //Set new middle (IMPORTANT)
    middle = Math.floor((start + end) / 2);
  }
  //If the middle equals the value return the index
  if (arr[middle] === val) {
    return middle;
  }
  //Otherwise return -1 or whatever instrutions say
  return -1;
}

function binarySearchShort(arr, val) {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);

  while (arr[middle] !== val && start <= end) {
    if (val < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === val ? middle : -1;
}
