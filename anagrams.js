// Given two strings, write a function to determine if the second string
// is an anagram of the first.

function validAnagram(str1, str2) {
  // add whatever parameters you deem necessary - good luck!
  // Run checks if string is empty or strings are not same length
  if (str1 === "" && str2 === "") {
    return true;
  }
  if (str1.length !== str2.length) {
    return false;
  }
  //Initalize objects for counters
  let freqCounter1 = {};
  let freqCounter2 = {};

  //Create Objects through iteration
  for (let val of str1) {
    freqCounter1[val] = (freqCounter1[val] || 0) + 1;
  }
  for (let val of str2) {
    freqCounter2[val] = (freqCounter2[val] || 0) + 1;
  }

  //Iterate through one ob
  for (let key in freqCounter1) {
    if (!(key in freqCounter2)) {
      return false;
    }
    if (freqCounter2[key] !== freqCounter1[key]) {
      return false;
    }
  }
  return true;
}

// OR THIS ONE IS SIMPLER

function validAnaram2(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  //Initalize object
  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    //if letter exists, incremnt, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    //Cant find letter or letter is zero then its not an anagram
    //Because zero is falsey
    if (!lookup[letter]) {
      return false;
    } else {
      //If letter exists, subtract one, one is truthy
      lookup[letter] -= 1;
    }
  }
  return true;
}
