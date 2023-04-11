/*
Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу. 
Валідними вважаються всі символи на різних позиціях.
Приклад роботи:
checkEmail("Qmail2@gmail.com");
true
*/

function checkEmail(email) {
  let regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return regex.test(email);
}

console.log(checkEmail("fefefef2r23f23"));
console.log(checkEmail("Qmail2@gmail.com"));
