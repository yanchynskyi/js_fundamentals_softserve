/*
Користувач вводить три довжини сторін трикутника (використовуйте prompt () три рази для введення кожної сторони).
Необхідно 
    a) визначити і вивести в консоль площу трикутника 
    b) перевірити чи цей трикутник є прямокутним і вивести в консоль результат перевірки.
Здійснювати перевірку чи введені користувачем значення коректні, в іншому випадку вивести 'Incorrect data‘. 
Результат обчислення площі трикутника виводити в консоль з точністю 3 знаки після коми 
(наприклад:  8.42355465 =>  8.424).
*/

const side1 = parseFloat(prompt("Введіть довжину першої сторони:"));
const side2 = parseFloat(prompt("Введіть довжину другої сторони:"));
const side3 = parseFloat(prompt("Введіть довжину третьої сторони:"));

function findTriangleArea(side1, side2, side3) {
  // Перевірити, чи введені дані коректні
  if (
    isNaN(side1) ||
    isNaN(side2) ||
    isNaN(side3) ||
    side1 <= 0 ||
    side2 <= 0 ||
    side3 <= 0 ||
    side1 + side2 <= side3 ||
    side2 + side3 <= side1 ||
    side1 + side3 <= side2
  ) {
    console.log("Incorrect data");
  } else {
    // Обчислити площу трикутника за формулою Герона
    const semiPerimeter = (side1 + side2 + side3) / 2;
    const area = Math.sqrt(
      semiPerimeter *
        (semiPerimeter - side1) *
        (semiPerimeter - side2) *
        (semiPerimeter - side3)
    );

    console.log(`Площа трикутника: ${area.toFixed(3)}`);
  }

  // Перевірити, чи трикутник є прямокутним за теоремою Піфагора
  const sides = [side1, side2, side3].sort((a, b) => a - b);
  if (Math.pow(sides[0], 2) + Math.pow(sides[1], 2) === Math.pow(sides[2], 2)) {
    console.log("Цей трикутник є прямокутним.");
  } else {
    console.log("Цей трикутник не є прямокутним.");
  }
}

findTriangleArea(side1, side2, side3);
