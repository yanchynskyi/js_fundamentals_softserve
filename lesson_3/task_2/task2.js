/*
Написати функцію , яка приймає на вхід 2 параметри:
 - початкове значення
 - кінцеве значення
а на виході отримує масив із діапазоном цих значень (реалізувати достатньо лише із числовими значеннями)
let arr = createArray(2, 9);
console.log(arr); // [2,3,4,5,6,7,8,9]
*/

function createArray(start, end) {
  let arr;
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }

  return arr;
}

// just try to realise simple test (not unit)
function testCreateArray() {
  // Test 1
  const arr1 = createArray(2, 9);
  const expected1 = [2, 3, 4, 5, 6, 7, 8, 9];
  if (JSON.stringify(arr1) !== JSON.stringify(expected1)) {
    console.error(`Test 1 failed: expected ${expected1}, but got ${arr1}`);
  } else {
    console.log("Test 1 passed");
  }

  // Test 2
  const arr2 = createArray(-2, 3);
  const expected2 = [-2, -1, 0, 1, 2, 3];
  if (JSON.stringify(arr2) !== JSON.stringify(expected2)) {
    console.error(`Test 2 failed: expected ${expected2}, but got ${arr2}`);
  } else {
    console.log("Test 2 passed");
  }

  // Test 3
  const arr3 = createArray(5, 5);
  const expected3 = [5];
  if (JSON.stringify(arr3) !== JSON.stringify(expected3)) {
    console.error(`Test 3 failed: expected ${expected3}, but got ${arr3}`);
  } else {
    console.log("Test 3 passed");
  }
}

testCreateArray();
