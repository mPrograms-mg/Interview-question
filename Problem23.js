// Compress a string (run-length encoding)
// Example Usage:
// const input = "AAAABBBCCDAA";
// const output = compressString(input);

function compressString(input) {
  if (input.length === 0) return "";
  let compressed = "";
  let count = 1;

  for (let i = 0; i <= input.length; i++) {
    if (input[i] === input[i + 1]) {
      count++;
    } else {
      compressed += count + input[i];
      count = 1;
    }
  }

  return compressed;
}

console.log(compressString("AAAABBBCCDAA"));
