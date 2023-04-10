/*
Для заданої HTML-сторінки:
<p id ='text'>I learning JavaScript events!</p> 
<div>
        <button . . . . . >Change style!</button>
</div>

напишіть функцію changeCSS(), яка спрацьовуватиме по кліку на кнопку і 
змінюватиме стиль вмісту тега <p>: колір шрифту – оранжевий, розмір шрифту 20px, шрифт сімейства "Comic Sans MS".
*/

function changeCSS() {
  const button = document.querySelectorAll(".button");
  const paragraph = document.getElementById("text");
  paragraph.style.color = "orange";
  paragraph.style.fontSize = "20px";
  paragraph.style.fontStyle = "Comic Sans MS";
  paragraph.textContent = "This is the new text.";
}
