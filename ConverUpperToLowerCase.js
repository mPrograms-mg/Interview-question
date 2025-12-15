//const val = HeLloWoRdl@123 convert all lowercase chart to uppercase chart

let str = "HeLloWoRdl@123";

const value = str
  .split("")
  .map((val) => {
    if (val >= "a" && val <= "z") {
      return val.toLocaleUpperCase();
    } else if (val >= "A" && val <= "Z") {
      return val.toLocaleLowerCase();
    }
    return val;
  })
  .join("");

console.log(value);
