// Write a program to print names having the given character at the given position

// var names = "rohit rakesh sagar akash mahesh"
// var ch = 'a';
// var pos = 2;

// Output: "rakesh sagar mahesh"

//using build in method

let ch = "a";
let pos = 2;
let names = "rohit rakesh sagar akash mahesh";
// method - 1;
let strArr = names
  .split(" ")
  .filter((ele) => ele.charAt(pos - 1) === ch)
  .join(" ");
// console.log(strArr);

//method - 2
let strArr2 = names.split(" ");
let result = "";
for (let index = 0; index < strArr2.length; index++) {
  for (let j = 0; j < strArr2[index].length; j++) {
    if (strArr2[index][j] === ch && j === pos - 1) {
      result += strArr2[index] + " ";
    }
  }
}
console.log(result);

//using without buildin method
