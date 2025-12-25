// Find the longest substring without repeating characters

var lengthOfLongestSubstring = function (str) {
  let start = 0;
  let ends = 0;
  let maxLength = 0;
  let subStr = new Set();

  while (ends < str.length) {
    if (!subStr.has(str[ends])) {
      subStr.add(str[ends]);
      maxLength = Math.max(maxLength, subStr.size);
      console.log(subStr.values());
      ends++;
    } else {
      subStr.delete(str[start]);
      start++;
    }
  }

  return maxLength;
};

console.log(lengthOfLongestSubstring("maheshkshirsagar"));
