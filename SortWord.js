// Sort the words in sentence without using inbuilt function
let senten = "cat apple ball";
let words = senten.split(" ");
let smallSen = "";

for (let i = 0; i < words.length; i++) {
  for (let j = i + 1; j < words.length; j++) {
    if (words[i] > words[j]) {
      let temp = words[i];
      words[i] = words[j];
      words[j] = temp;
    }
  }
}
console.log(words);
