// Reverse words in a sentence
// input : Hello world
// output : World Hello

var reverseWords = function (s) {
  let strArr = s.split(" ").filter((word) => word !== "");
  let ans = "";
  for (let index = strArr.length - 1; index >= 0; index--) {
    ans += strArr[index];
    if (index !== 0) ans += " ";
  }
  return ans;
};

console.log(reverseWords("the sky is blue"));
