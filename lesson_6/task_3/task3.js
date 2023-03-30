/*
Напишіть скріпт, який за допомогою засобів DOM створить для порожньої HTML-сторінки таку
 структуру з тегів і їх атрибутів.
<body>
  <main class="mainClass check item">         
     <div id="myDiv">
         <p>First paragraph</p>           
     </div>
 </main> 
</body>
*/

const mainElement = document.createElement("main");
mainElement.classList.add("mainClass", "check", "item");

const divElement = document.createElement("div");
divElement.setAttribute("id", "myDiv");

const pElement = document.createElement("p");
pElement.textContent = "First paragraph";

document.body.appendChild(mainElement);
mainElement.appendChild(divElement);
divElement.appendChild(pElement);
