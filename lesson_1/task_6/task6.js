/*
В зовнішньому файлі напишіть скрипт , в якому оголосіть змінні, для збереження таких даних:
        - ваше ім’я
        - ваше прізвище
        - навчальна група
        - ваш рік народження.
Присвойте змінним відповідні значення. 
Створіть та проініціалізуйте логічну змінну для збереження вашого сімейного стану. 
Визначте тип кожної змінної.
Виведіть значення змінних в консоль, відповідно до їх типу, в такому порядку: Number, Boolean, String.
Створіть 2 довільних змінних типу Null і Undefined відповідно. Виведіть їх тип в консоль.
*/

//object initialization
let person = {
  name: "Rostyslav",
  surname: "Yanchynskyi",
  group: "JS_Fundamentals_06/07",
  yearOfBirthday: 1998,
  isMarried: true,
};

console.log(person.yearOfBirthday + " = " + typeof person.yearOfBirthday);
console.log(person.isMarried + " = " + typeof person.isMarried);
console.log(person.name + " = " + typeof person.name);
console.log(person.surname + " = " + typeof person.surname);
console.log(person.group + " = " + typeof person.group);

let undefinedValue = undefined;
let nullValue = null;

console.log(undefinedValue + " = " + typeof undefinedValue);
console.log(nullValue + " = " + typeof nullValue);
