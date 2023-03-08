/*
Використовуючи функцію confirm() задайте користувачу питання про досягнення ним повнолітнього віку. 
Результат запишіть в змінну isAdult і виведіть в консоль.
*/

function isAdultConfirmation() {
  let isAdult = confirm("Are you an Adult?");
  return isAdult;
}

let isAdult = isAdultConfirmation();

console.log(isAdult);
