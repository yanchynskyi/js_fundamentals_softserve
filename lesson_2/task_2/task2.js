let x = 1;
let y = 2;

let res1 = String(x) + String(y); // Допишіть код, необхідно використовувати змінні x і y
console.log(res1); // ""12""
console.log(typeof res1); // ""string""

let res2 = String(Boolean(x)) + String(y);
console.log(res2); // Допишіть код, необхідно використовувати змінні x і y // ""true2""
console.log(typeof res2); // ""string""

let res3 = x < y;
console.log(res3); // Допишіть код, необхідно використовувати змінні x і y // true
console.log(typeof res3); // ""boolean""

let res4 = Math.pow(x + y);
console.log(res4); // Допишіть код, необхідно використовувати змінні x і y // NaN
console.log(typeof res4); // ""number""
