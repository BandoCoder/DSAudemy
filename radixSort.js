//HELPERS
//These are from stack overflow.
function getDigit(num, i) {
  if (i > 9) throw new Error("Base 10 ints only");
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function digitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
function mostDigits(nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, digitCount(nums[i]));
  }
  return max;
}

//RADIX SORT

/*
- Define a function that accepts a list of numbers.
- Figure out how many diits the largest number has.
- Loop from k = 0 up to this largest number of digits.
- For each iteration of the loop:
  - Create buckets for each digit (0 - 9).
  - Place each number in the corresponding bucket based on its Kth digit.
- Replace our existing array with values in our buckets, starting with 0 and going up to 9.
- Return list at end.
*/

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return console.log(nums);
}

radixSort([
  1, 210, 588, 1498, 6021, 5874, 6953, 54, 28, 50, 90, 4089, 500, 614,
]);

//Time Complexity
/*
- O(nk)
- n = length of array
- k = number of digits(average)
- Space Complexity = O(n + k)

There is debate about this spelled out on wikipedia.
If all numbers are distinct, k has to be at least log n

The counter argument is that if radix sort isn't as fast as it claims to be, we 
are going to talk about the problems with comparison sorts.

This has to do with how the computer stores data.  More research on toilet.
*/
