// Write a program to print array of give string without build and with build in method
// let str = "Mahesh Kshirsagar"
//  output = ["Mahesh, Kshirsagar"]

let string = "Mahesh Kshirsagar";

//method 1
let output = string.split(" ");
// console.log(output);

// method 2
let strArr = [];
let word = "";
let i = 0;
for (let index = 0; index <= string.length; index++) {
  if (index === string.length || string[index] === " ") {
    strArr[i] = word;
    i++;
    word = "";
  } else {
    word += string[index];
  }
}
console.log(strArr);
