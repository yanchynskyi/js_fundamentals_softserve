/*
Реалізуйте функцію calcRectangleArea(width, height), 
яка приймає 2 параметри ширина прямокутника width і висота прямокутника height і обраховує його площу. 
Передбачити припинення виконання програми і 
генерацію винятку у випадку, якщо функції передано не числові параметри.
Напишіть код, який використовує цю функцію та обробляє можливі виняткові ситуації.
*/

class RectangleException extends Error {
  constructor(message) {
    super(message);
    this.name = "RectangleException";
  }
}

function inputValues() {
  const width = prompt("Input width");
  const height = prompt("Input height");
  calcRectangleArea(width, height);
}

function calcRectangleArea(width, height) {
  let result;

  try {
    if (width === "" || height === "") {
      throw new RectangleException(
        "The field is empty! Please enter your values again"
      );
    } else if (isNaN(Number(width)) || isNaN(Number(height))) {
      throw new RectangleException(
        "The field is incorrect! Please enter values age again"
      );
    } else if (width < 1 || height < 1) {
      throw new RangeError(
        "The field is incorrect! Please enter values age again"
      );
    } else {
      result = width * height;
      console.log(result);
      return result;
    }
  } catch (error) {
    if (error instanceof RectangleException) {
      console.log("Caught an RectangleException: " + error.message);
    } else {
      console.log("Caught some other kind of error: " + error.message);
    }
    throw error;
  }
}

module.exports = {
  RectangleException,
  calcRectangleArea,
};
