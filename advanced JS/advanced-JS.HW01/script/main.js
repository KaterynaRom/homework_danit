// 1. Реализовать класс Employee, в котором будут следующие
// свойства - name (имя), age (возраст), salary (зарплата).
// Сделайте так, чтобы эти свойства заполнялись при создании объекта.
// 2. Создайте геттеры и сеттеры для этих свойств.
// 3. Создайте класс Programmer, который будет наследоваться от класса
// Employee, и у которого будет свойство lang (список языков).
// 4. Для класса Programmer перезапишите геттер для свойства salary.
// Пусть он возвращает свойство salary, умноженное на 3.
// 5. Создайте несколько экземпляров обьекта Programmer, выведите их в консоль.

class Employee {
  constructor(name, age, salary) {
    this._name = name;
    this._age = age;
    this._salary = salary;
  }
  get name (){
    return this._name.toLowerCase();
  }

  set name (value){
    this._name = value;
  }

  get age (){
    return this._age;
  }

  set age (value){
    this._age = value;
  }

  get salary (){
    return this._salary;
  }

  set salary (value){
    this._salary = value;
  }
}

class Programmer extends Employee {
  constructor(name, age, salary, lang) {
    super(name, age, salary);
    this.lang = lang;
  }

  get salary (){
    return this._salary * 3;
  }

}

const webDesinger = new Programmer('Sara', 25, 2000, 'English');
const developer = new Programmer('John', 33, 4000, 'English, French');
console.log(webDesinger);
console.log(webDesinger.salary);
console.log(developer);
console.log(developer.salary);