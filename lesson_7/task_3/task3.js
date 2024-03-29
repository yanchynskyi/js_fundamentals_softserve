/*
Задано сторінку з 3 кнопками і 1 лінкою. Напишіть Javascript код і реалізуйте HTML-сторінку з 
відповідними подіями на кожному елементові:
        1) 1-ша кнопка – при кліку на неї колір фону сторінки міняється на синій
        2) 2-га кнопка – при подвійному кліку на неї колір фону сторінки міняється на рожевий
        3) 3-я кнопка – при натисненні і утримуванні кнопки колір фону сторінки стає коричневий. 
           При відпусканні – білий.
        4) При наведенні на лінку – колір фону стає жовтим, при відведенні – білим.
        Приклад – курсор наведений на лінку.
https://user-images.githubusercontent.com/9075641/228461056-455d4dbf-527b-43de-a3dd-7c079dfbffed.png
*/

//1
function buttonBlue() {
  document.body.style.backgroundColor = "blue";
  paragraph.style.fontSize = "20px";
  paragraph.style.fontStyle = "Comic Sans MS";
  paragraph.textContent = "This is the new text.";
}

//2
let buttonPink = document.getElementById("buttonPink");
buttonPink.addEventListener("dblclick", function () {
  document.body.style.backgroundColor = "pink";
});

//3
let buttonBrown = document.getElementById("buttonBrown");
buttonBrown.addEventListener("mousedown", function () {
  document.body.style.backgroundColor = "brown";
});

buttonBrown.addEventListener("mouseup", function () {
  document.body.style.backgroundColor = "white";
});

//4
function changeColor(color) {
  document.body.style.backgroundColor = color;
}
