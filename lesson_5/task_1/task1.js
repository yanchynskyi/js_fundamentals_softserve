/*
Напишіть клас Круг та реалізуйте функціонал:
- Визначте конструктор, який запитує координати центру кола, його радіус та ініціалізує об'єкт;
- Визначте метод отримання довжини кола для поточного об'єкта (L = 2 * π * R);
- Визначте статичний метод, який приймає радіус та повертає довжину кола для заданого радіусу;
- Визначте метод отримання об'єкта-кола, який повертає копію поточного об'єкта;
- Визначте статичний метод, який приймає координати центра кола, його радіус та повертає об'єкт кола із заданими параметрами;
- Визначте метод перевірки попадання крапки до кола;
- Визначте метод перетворення поточного стану об'єкта на символьний рядок (toString()).
*/

class Circle {
  constructor(centerX, centerY, radius) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.radius = radius;
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }

  static circumferenceFromRadius(radius) {
    return 2 * Math.PI * radius;
  }

  get copy() {
    return new Circle(this.centerX, this.centerY, this.radius);
  }

  static fromCoordinates(centerX, centerY, radius) {
    return new Circle(centerX, centerY, radius);
  }

  isPointInside(x, y) {
    const distance = Math.sqrt(
      (x - this.centerX) ** 2 + (y - this.centerY) ** 2
    );
    return distance <= this.radius;
  }

  toString() {
    return `Circle at (${this.centerX}, ${this.centerY}) with radius ${this.radius}`;
  }
}
