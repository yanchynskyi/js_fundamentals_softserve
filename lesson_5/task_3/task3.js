/*
- Створіть клас Person, у якого конструктор приймає параметри name і surname, 
а також міститься метод showFullName(), який виводить у консоль ім’я і прізвище особи. 
- Від класу Person наслідується клас Student, конструктор якого крім name і surname, 
приймає параметр year (рік вступу до університету). 
- В класі Student необхідно перевизначити метод showFullName(midleName), 
щоб виводилося не лише ім’я, прізвище, але і по-батькові (midleName) студента. 
- Також в класі Student необхідно реалізувати метод showCourse(), 
який виводитиме поточний курс студента (від 1 до 6). 
Значення курсу визначатиметься як різниця поточного року (визначити самостійно) і року вступу до ВНЗ.
Приклад результату:
const stud1 = new Student("Petro", "Petrenko", 2019);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 4
*/

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  showFullName() {
    return this.name + " " + this.surname;
  }
}

class Student extends Person {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }

  showFullName(middleName) {
    return this.name + " " + this.surname + " " + middleName;
  }

  showCourse() {
    const currentYear = new Date().getFullYear();
    const course = currentYear - this.year;
    return course;
  }
}

let person1 = new Person("John", "Smith");
console.log(person1);
console.log(person1.showFullName());

let student1 = new Student("Petro", "Mokna", 2018);
console.log(student1);
console.log(student1.showFullName("Petrovych"));
console.log(student1.showCourse());
