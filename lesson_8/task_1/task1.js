/*
Напишіть функцію, яка перевірятиме чи перший символ в рядку написаний в верхньому регістрі, чи ні. 
Приклад роботи:
upperCase('regexp'); 
"String's not starts with uppercase character"
upperCase('RegExp');
"String's starts with uppercase character"
*/

function upperCase(text) {
  let regex = /[A-Z]/;
  if (regex.test(text)) {
    console.log("String's starts with uppercase character");
  } else {
    console.log("String's not starts with uppercase character");
  }
}

upperCase("regexp");
upperCase("RegExp");
