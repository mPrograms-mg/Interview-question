let json = {
  fruts: ["apple", "banana"],
  age: [100, 102],
};

function extract(data) {
  console.log(data);
  let ans = "";
  for (const key in data) {
    console.log(key + ":", data[key]);
    // ans += `${key}: ${data[key]}\n`;
  }
  return ans;
}

console.log(extract(json));
