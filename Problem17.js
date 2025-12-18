// Find the first non-repeating character
str = "aabb";
let freq = {};

for (let ch of str) {
  freq[ch] = (freq[ch] || 0) + 1;
}

for (let first in freq) {
  if (freq[first] === 1) {
    ans = str.indexOf(first);
    break;
  } else {
    ans = -1;
  }
}

console.log(ans);
