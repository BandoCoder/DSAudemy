//GENERAL
/*
- Like merge sort, exploits the fact that arrays of 0 or 1 element
  are always sorted.
- Works by selecting one element (called the 'pivot') and finding the index
  where the pivot should end up in the sorted array.
- 
*/

//PIVOT HELPER
/*
- In order to implement quick sort, it's useful to first implement a function
  repsonsible for arranging elements in an array on either side of a pivot.
- Given an array, this helper function should designate an element as the pivot.
- It should then rearrange elements in the array so that all values less than the
  pivot are moved to the left of the pivot, and all values greater than the pivot
  are moved to the right of the pivot.
- The order of elements on either side of the pivot doesn't matter!
- The helper should do this IN PLACE, that is, it should not create a new array.
- When complete, the helper should return the index of the pivot
*/

//PICKING A PIVOT
/*
- The runtime of quick sort depends in part on how one selects the pivot
- Ideally, the pivot should be chosen so that it's roughtly the median value,
  in the data set you're sorting.
- For simplicity, we'll always choose the pivot to be the first element.
  
*/

//Pivot Pseudocode
/*
- It will help to accept three arguments: an array, a start index, and an end index.
  (these can default to 0 and the array length minus 1, respectively).
- Grab the pivot from the start of the array.
- Store the current pivot index in a variable (this will kep track of where the
  pivot should end up.)
- Loop through the array from the start to end
  -  If the pivot is greater than the current element, increment the pivot index
     variable and then swap the current element with the element at the pivot index.
- Swap the starting element (i.e. the pivot) with the pivot index.
- Return the pivot index.
*/

function pivot(arr, start = 0, end = arr.length + 1) {
  const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  };
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  return swapIdx;
}

//Quicksort Pseudocode
/*
- Call the pivot helper on the array.
- When the helper returns to you the updated pivot index, recursively call the pivot
  on the subarray to the left and on the right of that index.
- Your base case ocurs when you consider a subarray with less than 2 elements.
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([100, 30, 48, 22, 0, -2, 123, 80, 70, 84, 39, 72, 30]));
