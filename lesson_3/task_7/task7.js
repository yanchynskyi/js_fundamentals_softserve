/*
Напишіть функцію findUnique(arr), яка приймає масив arr і перевіряє на унікальність його елементи. 
Якщо всі елементи масиву унікальні (не мають дублів), то функція поверне true, інакше - false.
findUnique([1, 2, 3, 5, 3]);  // => false
findUnique([1, 2, 3, 5, 11]); // => true
*/

function findUnique(arr) {
  let tempValue;

  for (let i = 0; i < arr.length; i++) {
    tempValue = arr[i];
    for (let a = 0; a < arr.length; a++) {
      if (tempValue == arr[a] && a != i) {
        return false;
      }
    }
  }

  return true;
}

console.log(findUnique([1, 2, 3, 5, 3])); // => false
console.log(findUnique([1, 2, 3, 5, 11])); // => true
