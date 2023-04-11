/*
8-4. 
Напишіть функцію, яка виконуватиме валідацію номера банківської карти (9999-9999-9999-9999).
*/

function creditCardValidation(card) {
  const regex = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
  return regex.test(card);
}

console.log(creditCardValidation("1234-5678-9012-3456")); //true
console.log(creditCardValidation("12345678-9012-3456")); //false
