//[2,4,6,8], target = 10
//Out = [1,2]

function twoSum(arr, target) {
  let ind = [];
  for (let index = 0; index < arr.length; index++) {
    for (let j = index + 1; j < arr.length; j++) {
      if (arr[index] + arr[j] === target) {
        ind.push(index);
        ind.push(j);
        return ind;
      }
    }
  }
}
console.log(twoSum([2, 4, 6, 8], 10));

// metho2;
function twoSum2(arr, target) {
  let ind = [];
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] + arr[index + 1] === target) {
      return ind.push(index, index + 1);
    }
  }
}
console.log(twoSum([2, 4, 6, 8], 10));
