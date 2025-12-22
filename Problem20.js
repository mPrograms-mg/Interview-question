// Check if two strings are anagrams
// input = listen == silent;
//output = true

let str = "listen";
let str1 = "silent";

function checkAnagram(str, str1) {
  let charOccurance = {};
  if (str.length !== str1.length) {
    return false;
  } else {
    for (const element of str) {
      charOccurance[element] = (charOccurance[element] || 0) + 1;
    }
    for (const element of str1) {
      if (!charOccurance[element]) {
        return false;
      }
      charOccurance[element]--;
    }
    return true;
  }
}

console.log(checkAnagram(str, str1));
