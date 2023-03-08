/*
Напишіть скрипт, який вираховує кількість секунд в годині, в добі, в місяці, 
записує результати в відповідні змінні, і виводить їх значення на екран.
*/

function countSecPerHour() {
  return 60 * 60;
}
function countSecPerDayAndNight() {
  return 60 * 60 * 24;
}
function countSecPerMonth() {
  return 60 * 60 * 24 * 30;
}

let secPerHour = countSecPerHour();
let secPerDayAndNight = countSecPerDayAndNight();
let secPerMonth = countSecPerMonth();

console.log(
  `Hour has ${secPerHour} seconds\n 
   Day and night have ${secPerDayAndNight} seconds\n 
   Month has ${secPerMonth} seconds`
);
