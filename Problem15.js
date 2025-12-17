// Remove duplicates from a string
let str = "abccdee";
let ans = [...new Set([...str])].join("");
// console.log([...ans].join(""));
// console.log(ans);

let out = str.split("").filter((ele, i, arr) => arr.indexOf(ele) === i);
// console.log(out);

let result = "";
for (const element of str) {
  if (!result.includes(element)) {
    result += element;
  }
}

console.log(result);
