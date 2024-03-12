//brute force
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 0; j < nums.length; j++) {
//       if (i === j) continue;

//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
// };

//hashmap solution
var twoSum = function (nums, target) {
  let obj = {};
  if (nums.length <= 1) return [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[obj[target - nums[i]]] + nums[i] == target) {
      return [obj[target - nums[i]], i];
    }

    obj[nums[i]] = i;
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
