// Find the most frequent character
// input = "programming"
// output = "g"

const str = "abcdaasedfsa";

function getMostFrequentChar(str) {
  const charMap = {};
  let maxCount = 0;
  let maxChar = "";
  for (const element of str) {
    charMap[element] = (charMap[element] || 0) + 1;

    if (charMap[element] >= maxCount) {
      maxCount = charMap[element];
      maxChar = element;
    }
  }

  return { charMap, maxChar, maxCount };
}

console.log(getMostFrequentChar(str));
