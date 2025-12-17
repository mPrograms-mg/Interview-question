// Check if a string is a palindrome
const str = "abadd";
let result = "";
for (const element of str) {
  console.log("element==", element);
  result += element;
}
if (str === result) {
  console.log("palindrome");
} else {
  console.log("Not palindrome");
}
