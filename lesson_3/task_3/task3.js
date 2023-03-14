/*
Задані цілі числа a і b (a < b). 
Виведіть усі цілі числа від a до b включно, 
при цьому a виводится 1 раз, число а+1 - два рази і т.д.
*/

function createArray(min, max) {
  let arr = new Array();
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }

  return arr;
}

function displayArray(array) {
  let result = "";
  let counter = 0;

  array.forEach((element) => {
    counter++;
    for (let i = 0; i < counter; i++) {
      result += String(element + " ");
    }
  });

  console.log(result);
  return result;
}

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

function testDisplayArray() {
  // Test 1
  const arr1 = displayArray([2, 3, 4, 5]);
  const expected1 = "2 3 3 4 4 4 5 5 5 5 ";
  if (arr1 === expected1) {
    console.log("Test 1 passed");
  } else {
    console.error(`Test 1 failed: expected ${expected1}, but got ${arr1}`);
  }

  // Test 2
  const arr2 = displayArray([-2, -1, 0, 1]);
  const expected2 = "-2 -1 -1 0 0 0 1 1 1 1 ";
  if (arr2 === expected2) {
    console.log("Test 2 passed");
  } else {
    console.error(`Test 2 failed: expected ${expected2}, but got ${arr2}`);
  }

  // Test 3
  const arr3 = displayArray([1]);
  const expected3 = "1 ";
  if (arr3 === expected3) {
    console.log("Test 3 passed");
  } else {
    console.error(`Test 3 failed: expected ${expected3}, but got ${arr3}`);
  }
}

testCreateArray();
testDisplayArray();
