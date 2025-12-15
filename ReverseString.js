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

// console.log(reverseString(str));

// using built method
function reverseStrBuildingMethod(str) {
  let reverseStr = str.split("").reverse().join("");
  console.log(reverseStr);
}

// reverseStrBuildingMethod(str);

//Reverse Each Word of sentence
let string = "Hello I am Mahesh";
let result = "";
let revString = string.split(" ").reverse();

console.log(string);
for (let word of revString) {
  let revWord = "";
  for (let char of word) {
    revWord = char + revWord;
  }
  result += revWord + " ";
}

console.log("===", result);

//Reverse Each Word of sentence with same order using building method
let reverStr = string.split(" ");
console.log(reverStr);
let ans = reverStr.map((char) => char.split("").reverse().join(""));
console.log(ans);
