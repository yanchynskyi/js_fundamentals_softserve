/*
На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
 У модальному вікні необхідно послідовно вивести вміст:
        1) першого елемента списку
        2) останнього елемента списку
        3) другого елемента списку
        4) четвертого елемента списку
        5) третього елемента списку
Приклад:
•        1
•        2
•        3
•        4
•        5
Результат виводу: 1, 5, 2, 4, 3
*/

const items = document.getElementById("myList").querySelectorAll("li");
const result =
  items[0].textContent +
  " " +
  items[4].textContent +
  " " +
  items[1].textContent +
  " " +
  items[3].textContent +
  " " +
  items[2].textContent;

alert(result);
