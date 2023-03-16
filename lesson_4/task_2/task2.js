/*
Створіть функцію checkAge(), яка запитує у користувача його 
ім'я, вік та статус (адмін, модератор, користувач) 
та генерує модальне вікно з помилкою, якщо:вік користувача менше 18 або більше 70 років 
(генерується помилка типу RangeError).користувач не ввів жодних даних в будь-якому полі 
(виводиться повідомлення The field is empty! Please enter your age з типом помилки Error). 
У полі статус введено неправильне слово (тип помилки EvalError).в полі вік введено нечислове значення. 
У всіх інших випадках користувач отримає доступ до перегляду фільму. 
У блоці catch передбачена можливість виведення назви та опису помилки.
*/

class InputException extends Error {
  constructor(message) {
    super(message);
    this.name = "InputException";
  }
}

const admin = "admin";
const moderator = "moderator";
const user = "user";

function validateName(name) {
  const regex = /^[a-zA-Z ]+$/; //all leters and space
  if (!regex.test(name)) {
    throw new InputException(
      "The name is incorrect! Please enter your name again"
    );
  } else {
    return true;
  }
}

function validateAge(age) {
  if (age === "") {
    throw new InputException("The field is empty! Please enter your age again");
  } else if (isNaN(Number(age))) {
    throw new InputException(
      "The field is incorrect! Please enter your age again"
    );
  } else if (age < 18 || age > 70) {
    throw new RangeError("Access denied!");
  } else {
    return true;
  }
}

function validateStatus(status) {
  switch (status) {
    case admin:
    case moderator:
    case user:
      return true;
    default:
      throw new EvalError(
        "The status is incorrect! Please enter your status again"
      );
  }
}

function inputValues() {
  const name = prompt("Input your name");
  const age = prompt("Input your age");
  const status = prompt("Input your status");
  checkAge(name, age, status);
}

function checkAge(name, age, status) {
  try {
    validateName(name);

    validateAge(age);

    validateStatus(status);

    return true;
  } catch (error) {
    if (error instanceof InputException) {
      console.log("Caught an InputException: " + error.message);
    } else {
      console.log("Caught some other kind of error: " + error.message);
    }
    throw error;
  }
}

module.exports = {
  InputException,
  validateName,
  validateAge,
  validateStatus,
  checkAge,
};
