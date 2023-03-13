/*
Написати умовну конструкцію, яка в залежності від часу доби виводитиме відповідне привітання. 
Потрібно отримати реальний час доби із системи. Зробити 2 способами через 2 різних умовних оператора.
В діапазоні годин 23-5 – має виводитися привітання “Доброї ночі”
В діапазоні годин 5-11 – має виводитися привітання “Доброго ранку”
В діапазоні годин 11-17 – має виводитися привітання “Доброго дня”
В діапазоні годин 17-23 – має виводитися привітання “Доброго вечора”.
*/

//if
function showGreetingsByTimeV1() {
  let time = new Date();
  if (time.getHours() == 23 || (time.getHours() >= 0 && time.getHours() <= 6)) {
    console.log("Доброї ночі");
  } else if (time.getHours() >= 5 && time.getHours() <= 11) {
    console.log("Доброго ранку");
  } else if (time.getHours() >= 11 && time.getHours() <= 17) {
    console.log("Доброго дня");
  } else if (time.getHours() >= 17 && time.getHours() <= 23) {
    console.log("Доброго вечора");
  } else {
    console.log("Збій в матриці..");
  }
}

//switch
function showGreetingsByTimeV2() {
  let time = new Date();
  switch (time.getHours()) {
    case 1:
      console.log("Доброї ночі");
      break;
    case 2:
      console.log("Доброї ночі");
      break;
    case 3:
      console.log("Доброї ночі");
      break;
    case 4:
      console.log("Доброї ночі");
      break;
    case 5:
      console.log("Доброї ночі");
      break;
    case 6:
      console.log("Доброго ранку");
      break;
    case 7:
      console.log("Доброго ранку");
      break;
    case 8:
      console.log("Доброго ранку");
      break;
    case 9:
      console.log("Доброго ранку");
      break;
    case 10:
      console.log("Доброго ранку");
      break;
    case 11:
      console.log("Доброго ранку");
      break;
    case 12:
      console.log("Доброго дня");
      break;
    case 13:
      console.log("Доброго дня");
      break;
    case 14:
      console.log("Доброго дня");
      break;
    case 15:
      console.log("Доброго дня");
      break;
    case 16:
      console.log("Доброго дня");
      break;
    case 17:
      console.log("Доброго дня");
      break;
    case 18:
      console.log("Доброго вечора");
      break;
    case 19:
      console.log("Доброго вечора");
      break;
    case 20:
      console.log("Доброго вечора");
      break;
    case 21:
      console.log("Доброго вечора");
      break;
    case 22:
      console.log("Доброго вечора");
      break;
    case 23:
      console.log("Доброго вечора");
      break;
    case 0:
      console.log("Доброї ночі");
      break;
    default:
      console.log("Збій в матриці..");
      break;
  }
}

showGreetingsByTimeV1();
showGreetingsByTimeV2();
