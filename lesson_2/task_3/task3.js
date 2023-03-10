/*
Використовуючи функцію prompt() задайте користувачу питання про досягнення ним повнолітнього віку. 
Результат запишіть в змінну isAdult. 
В залежності від отриманого значення виведіть відповідне повідомлення про статус особи. 
Наприклад: при виконанні умови вік більше 18 вивести “Ви досягли повнолітнього віку”. 
Якщо вік менше 18 років вивести “Ви ще надто молоді”, 
*/

let defaultPlaceholder = "1-99";

function ageVerification(placeholder) {
  let age = prompt("Input your age", placeholder);

  if (0 < age && age < 18) {
    alert("Access denied!");
  } else if (age > 18 && age < 100) {
    alert("Access allowed");
  } else {
    ageVerification("Input CORRECT age please!");
  }
}

ageVerification(defaultPlaceholder);
