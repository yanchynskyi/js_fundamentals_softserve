/*
Для сторінки
<body>
  <h1>I'am a big header!!!</h1>
  <div id="myDiv">
    <p>First paragraph</p>
    <p>Second paragraph</p>
    <p>Third paragraph</p>
    <p>Fourth paragraph</p>
  </div>
  <ul id="myList">
    <li>Make</li>
    <li>me</li>
    <li>horizontal!</li>
  </ul>
  <span>Make me invisible, please!</span>
</body>

Напишіть скріпт, який за допомогою засобів DOM простилізує сторінку так як показано на картинці.
*/

const h1 = document.querySelector("h1");
const myDivParagraphs = myDiv.querySelectorAll("p");
const myList = document.getElementById("myList");
const myListItems = myList.querySelectorAll("li");
const span = document.querySelector("span");

h1.style.fontSize = "36px";
h1.style.backgroundColor = "lightgreen";

myDivParagraphs[0].style.fontWeight = "bold";
myDivParagraphs[1].style.color = "red";
myDivParagraphs[2].style.textDecoration = "underline";
myDivParagraphs[3].style.fontStyle = "italic";

const listItems = document.getElementsByTagName("li");
for (var i = 0; i < listItems.length; i++) {
  listItems[i].style.display = "inline";
}

span.style.color = "white";
