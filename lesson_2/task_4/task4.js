/*
Задано масив чисел, знайти число яке найбільш часто входить в масив, 
занести це число в новий масив і видалити всі входження цього числа із поточного масиву.
*/

// Заданий масив чисел
const arr = [4, 5, 2, 1, 6, 5, 3, 5, 2, 5];

// Знайти число, яке найбільш часто входить в масив
const counts = {};
let maxCount = 0;
let mode;

for (let num of arr) {
  counts[num] = (counts[num] || 0) + 1;
  if (counts[num] > maxCount) {
    maxCount = counts[num];
    mode = num;
  }
}

// Занести це число в новий масив
const modeArr = [mode];

// Видалити всі входження цього числа із поточного масиву
for (let i = arr.length - 1; i >= 0; i--) {
  if (arr[i] === mode) {
    arr.splice(i, 1);
  }
}

console.log(modeArr); // [5]
console.log(arr); // [4, 2, 1, 6, 3, 2]
