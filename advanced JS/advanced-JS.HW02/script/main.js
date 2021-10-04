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

class Books {
  constructor(array) {
    this.array = array;
    this.container = document.createElement('div');
    this.list = document.createElement('ul');
    this.render();
    this.fillList();
  }

  createElements () {
    this.container.setAttribute('id', 'root');
    this.container.append(this.list);
  }

  render (selector = 'body') {
    this.createElements();
    document.querySelector(selector).append(this.container);
  }

  fillList () {
    this.list.innerHTML = this.array.map(e => {
      try {
        if(e.author && e.name && e.price){
          return (`<li>${e.author}: ${e.name}, price ${e.price}</li>`);
        } else if (!e.author){
          throw new Error('no property: author');
        } else if(!e.name) {
          throw new Error('no property: name');
        } else if(!e.price) {
          throw new Error('no property: price');
        }
      }

      catch(error){
        console.error(error);
      }
    }).join('');
  }
}

const booksList = new Books(books);
console.log(booksList);

