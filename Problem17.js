// Find the first non-repeating character
str = "programming";
output = "p";

let ans = [...new Set([...str])].join("");
console.log(ans.charAt(0));
