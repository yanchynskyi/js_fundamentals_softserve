/*
 Реалізувати логіку підрахунку ціни товару по його варіаціях
 (шаблон наведений тут, при кліку на колір змінювати ціну товару).
Придумати ще 2 варіації, відяких буде залежати ціна товару.
*/

const colorList = document.querySelectorAll(".color");
console.log(colorList);

colorList.forEach((element) => {
  element.addEventListener("click", function () {
    // виконується код при кліку на color

    //TBD
    console.log("click!");
  });
});
