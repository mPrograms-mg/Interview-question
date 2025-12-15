//Write a program to reverse a string with using buidl method.

let str = "Mahesh";

function reverseString(str) {
  let revStr = "";
  if (str === "") {
    return;
  }
  for (let index = str.length - 1; index >= 0; index--) {
    revStr += str[index];
  }

  return revStr;
}

// for (let char of str) {
//   revStr = char + revStr;
// }

console.log(reverseString(str));
