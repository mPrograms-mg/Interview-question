// Count occurrences of each character in a string
let str = "hello";
let occ = {};
for (const element of str) {
  console.log(element);
  occ[element] = (occ[element] || 0) + 1;
}

console.log(occ);

// / Check if All Characters Have Equal Number of Occurrences
