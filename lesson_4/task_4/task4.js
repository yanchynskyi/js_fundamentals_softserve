/*
Створіть клас MonthException, конструктор якого приймає параметр message і 
ініціалізує поле name значенням MonthException.
Реалізуйте функцію showMonthName(month), в якій параметр month – це порядковий номер місяця в році. 
Функція повертає назву місяця відповідно до введеного номера місяця. 
У випадку некоректного вводу кидається ексепшн у вигляді об’єкта класу MonthException 
з повідомленням Incorrect month number.
Напишіть код, який використовує цю функцію, передбачте обробку можливих винятків.
Приклад роботи програми:
console.log(showMonthName(5));
May
console.log(showMonthName(14));
MonthException Incorrect month number
*/

class MonthException extends Error {
  constructor(message) {
    super(message);
    this.name = "MonthException";
  }
}

function showMonthName(month) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  if (month < 1 || month > 12) {
    throw new MonthException("Incorrect month number.");
  }

  return monthNames[month - 1];
}

try {
  console.log(showMonthName(5));
  console.log(showMonthName(14));
} catch (e) {
  if (e instanceof MonthException) {
    console.log(e.name, e.message);
  } else {
    throw e;
  }
}

module.exports = {
  MonthException,
  showMonthName,
};
