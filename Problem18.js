// Count occurrences of each character in a string
let str = "aaabb";
let occ = {};
let ans;
for (const element of str) {
  occ[element] = (occ[element] || 0) + 1;
}

console.log(occ);
