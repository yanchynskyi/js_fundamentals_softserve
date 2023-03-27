/*
Створіть клас Worker який буде мати конструктор, який приймає наступні 
властивості: fullName (ім’я і прізвище), dayRate (ставка за день роботи), workingDays (кількість відпрацьованих днів). 
1) клас повинен мати метод showSalary(), який буде виводити зарплату працівника. 
Зарплата - це добуток ставки dayRate на кількість відпрацьованих днів workingDays. 
2) додати приватне поле experience і присвоїти йому значення 1.2 і
 використовувати його як додатковий множник при визначенні зарплати – створити метод showSalaryWithExperience(). 
 Вивести значення зарплати з цим коефіцієнтом.
3) додати гетери і сетери для поля experience. Встановити значення experience = 1.5 і вивести його на екран.
4) Вивести значення зарплати з новим experience.
5) Створити кілька екземплярів класу (працівників) з різними зарплатами, як показано в прикладі нижче. 
Посортувати зарплату працівників із найбільшим experience по зростанню і вивести результат в форматі:
   worker_fullName: salary_value 
6) Реалізувати динамічне сортування для будь-кої кількості працівників-екземплярів класу Worker.
*/

class Worker {
  constructor(fullName, dayRate, workingDays) {
    this.fullName = fullName;
    this.dayRate = dayRate;
    this.workingDays = workingDays;
    this._experience = 1.2;
  }

  showSalary() {
    const salary = this.dayRate * this.workingDays;
    console.log(`${this.fullName} salary: ${salary}`);
  }

  showSalaryWithExperience() {
    const salary = this.dayRate * this.workingDays * this._experience;
    console.log(`${this.fullName} salary: ${salary}`);
  }

  get getExperience() {
    return this._experience;
  }

  set setExperience(value) {
    this._experience = value;
  }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);
worker1.showSalary();
console.log("New experience: " + worker1.getExperience);
worker1.showSalaryWithExperience();
worker1.setExperience = 1.5;
console.log("New experience: " + worker1.getExperience);
worker1.showSalaryWithExperience();
