//1 string
// let str = "Hello world!";
// let str1 = "Hello";
// let str2 = "2";
// console.log(str2, str1, str);

//2 number
// let num = 25;
// let num2 = 25.4;
// console.log(num, num2);

//3 boolean
// let bool1 = true; // yes значение true дается всему что имеет значение н: let str = (Boolean(2))
// let bool2 = false; // no значение false дается всему что пусто н: let str = (Boolean(""))
// console.log(bool1);
// console.log(bool2);

//4 undefined
// let a;
// console.log(a);

//5 null
// let b = null;
// console.log(b);

//6 object
// let user = {
//   name: "Zuhra",
//   age: 19,
//   hobby: null,
//   cat: {
//     name: navigator,
//     age: 5,
//   },
//   "last-name": "To",
// };
// console.log(user);
// console.log(user.name);
// console.log(user.cat.age);
// console.log(user["last-name"]);

// array
// let arr = [
//   "Hello",
//   33,
//   null,
//   { name: localStorage },
//   undefined,
//   true,
//   555n,
//   [2, 3, 1],
// ];
// console.log(arr);
// console.log(arr[5]);
// console.log(arr[0][1]);
// console.log(arr[7][2]);
// console.log(arr.length);
// console.log(arr.length - 1);

// let greet = "Hello World";
// let greet2 = greet.slice(0, 5);
// console.log(greet2);

//LeetCode задачи
//! Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

//?ответ
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] == target) {
//         return [i, j];
//       }
//     }
//   }
// };
// console.log(twoSum([3, 2, 4, 5], 6));

// var isPalindrome = function (x) {
//   let b = x.toString().split("").reverse().join("");
//   if (b == x.toString()) {
//     return console.log(true);
//   } else {
//     return console.log(false);
//   }
// };
// isPalindrome(212);

//! Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

//? ответ
var longestCommonPrefix = function (strs) {
  return strs.reduce((prev, next) => {
    let i = 0;
    while (prev[i] && next[i] && prev[i] === next[i]) i++;
    return prev.slice(0, i);
  });
};
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
