/*
Реалізуйте програму, яка по натисканню на кнопку виводитиме повідомлення 
"I was pressed!", при наведенні на кнопку виводитиме повідомлення "Mouse on me!",
а при відведенні курсора миші виводитиме повідомлення "Mouse is not on me!".
*/

function printResult(status) {
  var div = document.getElementById("status");

  switch (status) {
    case "clicked":
      var newParagraph = document.createElement("p");
      var text = document.createTextNode("I was pressed!");
      newParagraph.appendChild(text);
      div.appendChild(newParagraph);
    case "over":
      var newParagraph = document.createElement("p");
      var text = document.createTextNode("Mouse on me!");
      newParagraph.appendChild(text);
      div.appendChild(newParagraph);
    case "out":
      var newParagraph = document.createElement("p");
      var text = document.createTextNode("Mouse is not on me!");
      newParagraph.appendChild(text);
      div.appendChild(newParagraph);
  }
}
