const str = "abadd";

//build in method
// const str = "aba";
// const str1 = str.split(" ").reverse().join();
// console.log(str1);

// if (str === str1) {
//   console.log("its palindrome");
// } else {
//   console.log("its not palindrome");
// }

//without building method
console.log(str.length);
let ans = "";
for (let index = 0; index < str.length; index++) {
  if (str[index] === str[str.length - index - 1]) {
    ans = true;
  } else {
    ans = false;
  }
}

console.log(ans ? "palindrome" : "not palindrome");
