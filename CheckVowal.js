// Count Vowels in a String
let str = "Mahesh";
let count = 0;
let vowalWord = [];

for (let index = 0; index < str.length; index++) {
  let ch = str[index];
  if (
    ch === "a" ||
    ch === "e" ||
    ch === "i" ||
    ch === "o" ||
    ch === "u" ||
    ch === "A" ||
    ch === "E" ||
    ch === "I" ||
    ch === "O" ||
    ch === "U"
  ) {
    count++;
    vowalWord.push(ch);
  }
}

console.log(count);
console.log(vowalWord);
