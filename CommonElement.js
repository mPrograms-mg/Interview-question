// get common element form array
let a = [1, 2, 3, 4];
let b = [3, 4, 5, 6];

let result = [];

for (let index = 0; index < a.length; index++) {
  for (let j = 0; j < b.length; j++) {
    if (a[index] === b[j]) {
      result.push(a[index]);
    }
  }
}
// console.log(result);

let ans = a.filter((ele) => b.includes(ele));
console.log(ans);
