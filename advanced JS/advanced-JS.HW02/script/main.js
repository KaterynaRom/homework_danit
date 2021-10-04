const books = [
  {
    author: "Скотт Бэккер",
    name: "Тьма, что приходит прежде",
    price: 70
  },
  {
    author: "Скотт Бэккер",
    name: "Воин-пророк",
  },
  {
    name: "Тысячекратная мысль",
    price: 70
  },
  {
    author: "Скотт Бэккер",
    name: "Нечестивый Консульт",
    price: 70
  },
  {
    author: "Дарья Донцова",
    name: "Детектив на диете",
    price: 40
  },
  {
    author: "Дарья Донцова",
    name: "Дед Снегур и Морозочка",
  }
];
// 1.Выведите этот массив на экран в виде списка (тег ul - список должен
// быть сгенерирован с помощью Javascript).
// 2.На странице должен находиться div с id="root", куда и нужно будет положить
// этот список (похожая задача была дана в модуле basic).
// 3. Перед выводом обьекта на странице, нужно проверить его на корректность
// (в объекте должны содержаться все три свойства - author, name, price).
// Если какого-то из этих свойств нету, в консоли должна высветиться ошибка
// с указанием - какого свойства нету в обьекте.
// 4.Те элементы массива, которые являются некорректными по условиям предыдущего
//   пункта, не должны появиться на странице.

class Books {
  constructor(array, author, name, price) {
    this.array = array;
    this.container = document.createElement('div');
    this.list = document.createElement('ul');
    this.author = author;
    this.name = name;
    this.price = price;

    this.authorContainer = document.createElement('p');
    this.nameContainer = document.createElement('p');
    this.priceContainer = document.createElement('p');
  }

  createElements () {
    this.container.setAttribute('id', 'root');
    this.container.append(this.list);
    this.authorContainer.innerHTML = this.author;
    this.nameContainer.innerHTML = this.name;
    this.priceContainer.innerHTML = this.price;

    this.list.append(this.authorContainer);
    this.list.append(this.nameContainer);
    this.list.append(this.priceContainer);
  }

  render (selector = 'body') {
    this.createElements();
    document.querySelector(selector).append(this.container);
  }

  fillList (array) {
    this.list.innerHTML = array.map(e => {
      try {
        if(e.author && e.name && e.price){
          (`<li>${e.author}: ${e.name}, price ${e.price}</li>`).join('');
        } else if (!e.author){
          new Error(`no property: ${e.author}`);
        } else if(!e.name) {
          new Error(`no property: ${e.name}`);
        } else if(!e.price) {
          new Error(`no property: ${e.price}`);
        }
      }

      catch(e){
        console.error(e);
      }
    })
  }
}

