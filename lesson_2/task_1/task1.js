/*
Дано три цілих числа: a, b, c. Перевірте істинність висловлювання:
 a < b < c.
(-3<0<1 - false)
*/

let a = -3;
let b = 0;
let c = 1;

let result1 = a < b < c; //false
let result2 = a < b && b < c; //true
