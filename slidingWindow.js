//This pattern involves creating a window which can either be
//an array or number from one position to another.
//Depending on a certain condition, the window either increases
//or closes (and a new window is created).  Very useful for keeping
//track of a subset of data in an array/string etc.

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

const sumArr = maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

console.log(sumArr);

function minSubArrayLen(nums, sum) {
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // if current window doesn't add up to the given sum then
    // move the window to right
    if (total < sum && end < nums.length) {
      total += nums[end];
      end++;
    }
    // if current window adds up to at least the sum given then
    // we can shrink the window
    else if (total >= sum) {
      minLen = Math.min(minLen, end - start);
      total -= nums[start];
      start++;
    }
    // current total less than required total but we reach the end, need this or else we'll be in an infinite loop
    else {
      break;
    }
  }

  return minLen === Infinity ? 0 : minLen;
}

function findLongestSubstring(str) {
  //Store longest string length
  let longest = 0;
  //Counter for what letters we have seen
  let seen = {};
  //Start of window
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    //If the letter was seen, we perform a sort of reset, setting start
    //to the letter we just saw since we have to look for non consecutive
    //substrings
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    // index - beginning of substring + 1 (to include current in count)
    longest = Math.max(longest, i - start + 1);
    // store the index of the next char so as to not double count
    seen[char] = i + 1;
  }
  return longest;
}
