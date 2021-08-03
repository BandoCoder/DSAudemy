/*
- Its a combination of two things - merging and sorting.
- Exploits the fact that arrays of 0 or 1 element are always sorted.
- Works by decomposing an array into smaller arrays of 0 or 1 elements,
then building up a newly sorted array.
*/

//Merging

/* 
- In order to implement merge sort, it's useful to first implement a function
responsible for merging two arrays.
- Given two arrays which are sorted, this helper functions should create a
new array which is also sorted, and consists of all of the elements in the 
two input arrays.
- This functtion should run in O(n + m) time and O(n + m) space and SHOULD NOT
modify the parameters passed to it.
*/

//Create an empty array, take a loog at the smallest values in each input array.
//While there are still values we havent looked at..
//  -If the value in the first array is smaller than the value in the second arary,
//   push the value in th first array into our results and move on to the next value in the first array.
//  -If the value in the first array is larger than the value in the second array,
//   push the value in the second array into our results and move on to the next and move on to the next value in the second array.
//  -Once we exhaust one array, push in all remaining values from other array.

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

//-Break up the array into halves until you have arrays that are empty or have one element.
//-Once you have smaller sorted arrays, merge those arrays with other sorted arrays
// until you are back at the full length of the array
//-Once the array has been merged back together, return the merged (and sorted) array.

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.lenght / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

//Time complexity: O(n log n) - merge helper function is O(n) and merge sort on its own is O(log n)
//Space complexiy: O(n)
