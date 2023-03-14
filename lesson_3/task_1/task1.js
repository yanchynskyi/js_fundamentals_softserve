/*
1. 
Написати функцію compact() яка має приймати на вхід масив, 
а на вихід має повертати значення нового масиву без повторень.
приклад:
const arr = [5, 3, 4, 5,6,7,3];
const arr2 = compact(arr);
console.log(arr2) ; // [5,3,4,6,7]
*/

function compact(arr) {
  let currentValue;
  //compare first element with each element in arr
  for (let i = 0; i < arr.length; i++) {
    currentValue = arr[i];
    for (let a = i + 1; a < arr.length; a++)
      //verify if there is a same values and delete a copy
      if (currentValue == arr[a]) {
        arr.splice(a, 1);
      }
  }

  return arr;
}

const arr = [5, 3, 4, 5, 6, 7, 3];
const arr2 = compact(arr);
console.log(arr2); // [5,3,4,6,7]
