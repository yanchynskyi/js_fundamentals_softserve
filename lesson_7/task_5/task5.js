/*
Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!",
а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
*/

function printResult(status) {
  let div = document.getElementById("status");

  switch (status) {
    case "clicked":
      let newParagraph1 = document.createElement("p");
      let text1 = document.createTextNode("I was pressed!");
      newParagraph1.appendChild(text1);
      div.appendChild(newParagraph1);
      break;
    case "over":
      let newParagraph2 = document.createElement("p");
      let text2 = document.createTextNode("Mouse on me!");
      newParagraph2.appendChild(text2);
      div.appendChild(newParagraph2);
      break;
    case "out":
      let newParagraph3 = document.createElement("p");
      let text3 = document.createTextNode("Mouse is not on me!");
      newParagraph3.appendChild(text3);
      div.appendChild(newParagraph3);
      break;
  }
}
