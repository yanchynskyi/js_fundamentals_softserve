/*
А. Реалізувати клас, який описує простий маркер. У класі мають бути такі компоненти:
- поле, яке зберігає колір маркера;
- поле, яке зберігає кількість чорнила в маркері (у відсотках);
- метод друку (метод приймає рядок і виводить текст відповідним кольором;
текст виводиться до тих пір, поки в маркері є чорнило; один не пробіловий символ – це 0,5% чорнила в маркері).

В. Реалізувати клас, що описує маркер, що заправляється, 
успадкувавши його від простого маркера і додавши метод для заправки маркера. 

Продемонструвати роботу написаних методів
*/

class Marker {
  constructor(color, inkLevel) {
    this.color = color;
    this.inkLevel = inkLevel;
  }

  print(text) {
    let printedText = "";
    for (let i = 0; i < text.length; i++) {
      if (this.inkLevel > 0) {
        if (text[i] !== " ") {
          this.inkLevel -= 0.5;
        }
        printedText += text[i];
      } else {
        console.log("Out of ink!");
        break;
      }
    }
    console.log("%c" + printedText, `color: ${this.color}`);
  }
}

class RefillableMarker extends Marker {
  constructor(color, inkCapacity) {
    super(color, inkCapacity);
    this.inkCapacity = inkCapacity;
  }

  refill() {
    this.inkLevel = this.inkCapacity;
  }
}

let refillableMarker = new RefillableMarker("blue", 50);

console.log(refillableMarker.color); // виведе 'blue'

refillableMarker.print("Hello world!"); // виведе 'Hello world!' синім кольором

console.log(refillableMarker.inkLevel); // виведе 37.5

refillableMarker.refill(); // заправляємо маркер

console.log(refillableMarker.inkLevel); // виведе 50
