// Задание 1
// Две компании решили объединиться, и для этого им нужно объединить базу данных своих клиентов.
//   У вас есть 2 массива строк, в каждом из них - фамилии клиентов. Создайте на их основе один массив, который будет представлять собой объединение двух массив без повторяющихся фамилий клиентов.


// const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
// const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];
// const clients = [...clients1, clients2];
// console.log(clients);


//
// Задание 2
// Перед вами массив characters, состоящий из объектов. Каждый объект описывает одного персонажа.
//   Создайте на его основе массив charactersShortInfo, состоящий из объектов, в которых есть только 3 поля - name, lastName и age.
  const characters = [
  {
    name: "Елена",
    lastName: "Гилберт",
    age: 17,
    gender: "woman",
    status: "human"
  },
  {
    name: "Кэролайн",
    lastName: "Форбс",
    age: 17,
    gender: "woman",
    status: "human"
  },
  {
    name: "Аларик",
    lastName: "Зальцман",
    age: 31,
    gender: "man",
    status: "human"
  },
  {
    name: "Дэймон",
    lastName: "Сальваторе",
    age: 156,
    gender: "man",
    status: "vampire"
  },
  {
    name: "Ребекка",
    lastName: "Майклсон",
    age: 1089,
    gender: "woman",
    status: "vempire"
  },
  {
    name: "Клаус",
    lastName: "Майклсон",
    age: 1093,
    gender: "man",
    status: "vampire"
  }
];

let [{name, lastName, age}]  = characters;
const charactersShortInfo = [{name, lastName, age}];
console.log(charactersShortInfo)
//
// Задание 3
// У нас есть объект user:
//   const user1 = {
//     name: "John",
//     years: 30
//   };
//
// let {name, years: age, isAdmin = false} = user1;
// console.log(name, age, isAdmin);


// Напишите деструктурирующее присваивание, которое:
//
// свойство name присвоит в переменную name
// свойство years присвоит в переменную age
// свойство isAdmin присвоит в переменную isAdmin (false, если нет такого свойства)
//
// Выведите переменные на экран.
//
//   Задание 4
// Детективное агентство несколько лет собирает информацию о возможной личности Сатоши Накамото. Вся информация, собранная в конкретном году, хранится в отдельном объекте. Всего таких объектов три - satoshi2018, satoshi2019, satoshi2020.
//   Чтобы составить полную картину и профиль, вам необходимо объединить данные из этих трех объектов в один объект - fullProfile.
//   Учтите, что некоторые поля в объектах могут повторяться. В таком случае в результирующем объекте должно сохраниться значение, которое было получено позже (например, значение из 2020 более приоритетное по сравнению с 2019).
// Напишите код, который составит полное досье о возможной личности Сатоши Накамото. Изменять объекты satoshi2018, satoshi2019, satoshi2020 нельзя.
//   const satoshi2020 = {
//   name: 'Nick',
//   surname: 'Sabo',
//   age: 51,
//   country: 'Japan',
//   birth: '1979-08-21',
//   location: {
//     lat: 38.869422,
//     lng: 139.876632
//   }
// }
//
// const satoshi2019 = {
//   name: 'Dorian',
//   surname: 'Nakamoto',
//   age: 44,
//   hidden: true,
//   country: 'USA',
//   wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
//   browser: 'Chrome'
// }
//
// const satoshi2018 = {
//   name: 'Satoshi',
//   surname: 'Nakamoto',
//   technology: 'Bitcoin',
//   country: 'Japan',
//   browser: 'Tor',
//   birth: '1975-04-05'
// }
//
// const fullProfile = {...satoshi2018, ...satoshi2019, ...satoshi2020};
// console.log(fullProfile);
//
// Задание 5
// Дан массив книг. Вам нужно добавить в него еще одну книгу, не изменяя существующий массив (в результате операции должен быть создан новый массив).
// const books = [{
//   name: 'Harry Potter',
//   author: 'J.K. Rowling'
// }, {
//   name: 'Lord of the rings',
//   author: 'J.R.R. Tolkien'
// }, {
//   name: 'The witcher',
//   author: 'Andrzej Sapkowski'
// }];
//
// const bookToAdd = {
//   name: 'Game of thrones',
//   author: 'George R. R. Martin'
// }
//
// let {name, author} = bookToAdd;
// const bookArray = [...books, {name, author}];
// console.log(bookArray);

// Задание 6
// Дан обьект employee. Добавьте в него свойства age и salary, не изменяя изначальный объект (должен быть создан новый объект, который будет включать все необходимые свойства). Выведите новосозданный объект в консоль.
//   const employee = {
//   name: 'Vitalii',
//   surname: 'Klichko'
// }
// let {name, surname} = employee;
// const newEmployee = {...employee, age:age = 30, salary:salary = 'confidential information'};
// console.log(newEmployee);

//
// Задание 7
// Дополните код так, чтоб он был рабочим
// const array = ['value', () => 'showValue'];
// let[value, showValue] = array;
// alert(value); // должно быть выведено 'value'
// alert(showValue());  // должно быть выведено 'showValue'