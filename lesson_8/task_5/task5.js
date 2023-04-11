/*
Напишіть функцію, яка приймає рядкові дані і виконує перевірку на їх відповідність емейлу.
Вимоги:
•  Цифри (0-9).
•  Тільки латинські літери в великому (A-Z) і малому (a-z) регістрах.
•  В тілі емейла допустимі лишеі символи “_” і “-”. Але вони не можуть бути 1-им символом емейлу.
 •  Символ “-” не може повторюватися.

checkEmail('my_mail@gmail.com');
"Email is correct!"
checkEmail('#my_mail@gmail.com');
"Email is not correct!"
checkEmail('my_ma--il@gmail.com');
"Email is not correct!"
*/

function checkEmail(email) {
  const emailRegex =
    /^[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*@[A-Za-z0-9]+([_\-.][A-Za-z0-9]+)*\.[A-Za-z]{2,}$/;

  if (emailRegex.test(email)) {
    if (email.indexOf("--") === -1) {
      if (email[0] !== "_" && email[0] !== "-") {
        console.log("Email is correct!"); // Email is valid
        return;
      }
    }
  }
  console.log("Email is not correct!"); // Email is invalid
}

checkEmail("my_mail@gmail.com");
checkEmail("#my_mail@gmail.com");
checkEmail("my_ma--il@gmail.com");
