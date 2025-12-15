// 7️⃣ Find Duplicate Characters
let str = "programming";
let result = "";

for (let i = 0; i < str.length; i++) {
  let count = 0;
  for (let j = 0; j < str.length; j++) {
    if (str[i] === str[j]) count++;
  }
  if (count > 1 && !result.includes(str[i])) {
    result += str[i] + " ";
  }
}

console.log(result);

function findDuplicateCharacters(str) {
  let freq = {};
  let result = [];

  for (let ch of str) {
    freq[ch] = (freq[ch] || 0) + 1;
  }

  for (let ch in freq) {
    if (freq[ch] > 1) {
      result.push(ch);
    }
  }

  return result;
}

findDuplicateCharacters("programming");
console.log(findDuplicateCharacters("programming"));
// ["r", "g", "m"]
