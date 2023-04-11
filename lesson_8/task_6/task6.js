/*
Напишіть функцію, яка перевіряє правильність логіна. 
Правильний логін - рядок від 2 до 10 символів, 
що містить лише букви та числа, номер не може бути першим. 
Функція має приймати рядок і знаходити усі числа в цьому рядку, 
включаючи числа з плаваючою комою (наприклад, 3.4).

Приклад роботи:

checkLogin('ee1.1ret3');
true 
//1.1, 3

checkLogin('ee1*1ret3');
false 
//1, 1, 3
*/

function checkLogin(login) {
  const loginRegex = /^[a-zA-Z][a-zA-Z0-9_-]{1,9}$/;

  if (!loginRegex.test(login)) {
    const numberRegex = /[-+]?\d*\.?\d+/g;
    const numbers = login.match(numberRegex);
    console.log(numbers);
    return false; // Login is invalid
  } else {
    const numberRegex = /[-+]?\d*\.?\d+/g;
    const numbers = login.match(numberRegex);
    console.log(numbers);
    return true; // Login is valid
  }
}

console.log(checkLogin("ee1.1ret3")); //true
console.log(checkLogin("ee1*1ret3")); //false
