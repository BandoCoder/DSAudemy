/*
- Start by picking the second element in the array.
- Now compare the second element with the one before it, and swap if nessesary.
- Continue to the next element and if it is in the incorrect order, iterate through
the sorted portion (i.e. the left side) to place the element in the correct place.
- Repeate until array is sorted. 
*/

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currVal = arr[i];
    for (let j = i - 1; j >= 0 && arr[j] > currVal; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currVal;
  }
  return arr;
}

//Good for when array is almost sorted.
//Works great as an online algorithm to sort data as it comes in.
