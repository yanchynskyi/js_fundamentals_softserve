/*
Є масив [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”]
Написати функцію яка виведе нові масиви які складаються із даних початкового масиву, 
але одного типу даних (не приводити тип стрінг в число навіть якщо там лише число)
let  arr = [5, “Limit”, 12, “a”, “3”, 99, 2, [2, 4, 3, “33”, “a”, “text”], “strong”, “broun”];
let arrNew = funcName(arr);
[
[5, 12, 99, 2, 2, 4, 3],
[”Limit”, “a”, “3”, “33”, “a”, “text”, “strong”, “broun”
] 
*/

function funcName(arr) {
  let numArr = [];
  let strArr = [];

  for (let i = 0; i < arr.length; i++) {
    let elem = arr[i];

    if (typeof elem === "number") {
      numArr.push(elem);
    } else if (typeof elem === "string") {
      strArr.push(elem);
    } else {
      break;
    }
  }

  return [numArr, strArr];
}
