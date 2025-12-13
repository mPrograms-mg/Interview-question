// n = 3 output = 2. fibonanci series sum of preceding
// 0 1 1 2
const n = 3;
let n1 = 0;
let n2 = 1;
let sum = 0;
for (let index = 2; index < n; index++) {
  //   console.log(index);
  sum = n1 + n2;
  n1 = n2;
  n2 = sum;
}

console.log(n2);
