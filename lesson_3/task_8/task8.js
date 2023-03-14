/*
(Ускладнене. Задача не оцінюється. Для тих, кому хочеться поробити ще щось)
Створити функцію create() , яка приймає один аргумент у вигляді рядка. 
Ця функція повертає анонімну функцію, 
яка перевіряє чи переданий в неї аргумент збігається з аргументом зовнішньої функції.
const tom = create("pass_for_Tom");
tom("pass_for_Tom"); //повертає true 
tom("pass_for_tom"); //повертає false
*/

function create(string) {
  return function (stringInner) {
    if (string == stringInner) {
      return true;
    } else {
      return false;
    }
  };
}

const tom = create("pass_for_Tom");
console.log(tom("pass_for_Tom"));
console.log(tom("pass_for_tom"));
