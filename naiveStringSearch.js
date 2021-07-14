//Loop over the string
//Loop over the shorter string
//If the characters don't match, break out of the loop
//If the characters do match, keep going
//if you complete the inner loop and find a match, increment the
//count of matches
//Return the count

function naiveSearch(long, short) {
  for (let i = 0; i < long.length; i++) {
    for (let j = 0; j < short.length; j++) {
      if (short[j] !== long[i + j]) {
        break;
      }
      if (j === short.length - 1) {
        count++;
      }
    }
  }
}
