const { performance } = require("perf-hooks");

let t1 = performance.now();
//Function call here
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
