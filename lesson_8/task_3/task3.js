/*
Напишіть регулярний вираз, який в рядковому тексті 2 підстрічки буде міняти місцями.
Приклад роботи:
Вхідний рядок    "Java Script"
Вихід    “Script, Java”
*/

let regex = /(\w+)\s(\w+)/;
let string = "Java Script";

let result = string.replace(regex, "$2, $1");

console.log(result);
