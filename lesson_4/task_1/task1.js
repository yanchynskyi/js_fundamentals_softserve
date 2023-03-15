/*
Напишіть функцію sumSliceArray(arr, first, second), яка приймає масив arr і 
два числа (first и second) – порядкові номери елементів масиву, які необхідно скласти. 
Наприклад, якщо ввели 3 та 5 – сумуються 3-й та 5-й елементи.
Функція повинна генерувати винятки, якщо були введені не числа, 
і коли одне з чисел або обидва більшого розміруза довжину масиву. 
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
*/

class SliceException extends Error {
  constructor(message) {
    super(message);
    this.name = "SliceException";
  }
}

function sumSliceArray(arr, first, second) {
  try {
    if (!Array.isArray(arr)) {
      throw new SliceException("Incorrect Array!");
    } else if (
      first >= arr.length ||
      second >= arr.length ||
      second < 0 ||
      first < 0
    ) {
      throw new SliceException("Invalid index values!");
    } else {
      return arr[first] + arr[second];
    }
  } catch (error) {
    if (error instanceof SliceException) {
      console.log("Caught a SliceException: " + error.message);
    } else {
      console.log("Caught some other kind of error: " + error.message);
    }
    throw error;
  }
}

console.log(sumSliceArray([1, 2, 3], 0, 1));
