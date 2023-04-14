new Promise(function (resolve, reject) {
  // Запитуємо у користувача number за допомогою prompt()
  let number = prompt("Input Phone Number");
  // Перевіряємо, чи користувач ввів число
  if (!Number(number)) {
    reject("Number is incorrect!");
  } else {
    resolve(number);
  }
})
  .catch(function (error) {
    return new Promise(function (resolve, reject) {
      // Запитуємо у користувача number, до тих пір, поки він його не введе
      let number;
      do {
        number = prompt("Please enter a valid number:");
        // Перевіряємо, чи користувач ввів число
      } while (!Number(number));
      resolve(number);
    });
  })
  .then(function (result) {
    // Вивід number у консоль
    console.log(result);
  });
