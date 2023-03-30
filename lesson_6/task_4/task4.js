/*
реалізувати вивід даних із полів при кліку на кнопку "Надіслати" в поле outBlock
*/

function submit() {
  const inputFio = document.getElementsByName("fio");
  const userFio = inputFio[0].value;

  const inputPhone = document.getElementsByName("phone");
  const userPhone = inputPhone[0].value;

  const inputBirthday = document.getElementsByName("birthday");
  const userBirthday = inputBirthday[0].value;

  const inputEmail = document.getElementsByName("email");
  const userEmail = inputEmail[0].value;

  const outResult = document.createElement("p");
  outResult.textContent =
    userFio + " " + userPhone + " " + userBirthday + " " + userEmail;

  const out = document.querySelector(".out");
  out.appendChild(outResult);
}
