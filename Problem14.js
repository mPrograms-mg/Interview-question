// Write a program to print array of give string without build and with build in method
// let str = "Mahesh Kshirsagar"
//  output = ["Mahesh, Kshirsagar"]

let string = "rohit rakesh sagar akash mahesh";
//method 1
let output = string.split(" ");
// console.log(output);

// method 2
let strArr = [];
let word = "";
let index = 0;
for (let i = 0; i <= string.length; i++) {
  //   console.log("===>", string[i]);
  if (i === string.length || string[i] === " ") {
    strArr[index] = word;
    index++;
    word = "";
  } else {
    word += string[i];
  }
}
// console.log(strArr);

//method 3
let strArray = [];
let words = "";
for (const ch of string) {
  if (ch === " ") {
    strArray.push(words);
    words = "";
  } else {
    words += ch;
  }
}

strArray.push(words);
console.log(strArray);
