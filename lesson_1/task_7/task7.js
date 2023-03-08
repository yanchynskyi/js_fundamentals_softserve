/*
За допомогою функції prompt() напишіть скрипт , 
який послідовно запитує в користувача логін, імейл та пароль, 
і виводить на екран повідомлення із введеними даними. 
Наприклад “Dear User, your email is usermale@gmail.com, your password is qwerty”.
*/

let login = prompt(`Please enter your email`);
let password = prompt(`Please enter your password`);
console.log(`Dear User, your email is ${login}, your password is ${password}`);
