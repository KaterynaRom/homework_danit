
productsList = () => {

  const products = [
    {
      name: 'apple',
      price: 1,
      img: 'products-img/red-apple.jpg',
      code: 111111,
      color: 'red'
    }, {
      name: 'pear',
      price: 1,
      img: 'products-img/pear.jpg',
      code: 111112,
      color: 'yellow'
    }, {
      name: 'banana',
      price: 1,
      img: 'products-img/bananas.jpg',
      code: 111113,
      color: 'yellow'
    }, {
      name: 'orange',
      price: 1,
      img: 'products-img/orange.jpg',
      code: 111114,
      color: 'orange'
    }, {
      name: 'strawberry',
      price: 1,
      img: 'products-img/strawberry.jpg',
      code: 111115,
      color: 'red'
    }, {
      name: 'beet',
      price: 1,
      img: 'products-img/beet.jpg',
      code: 111116,
      color: 'red'
    }, {
      name: 'carrot',
      price: 1,
      img: 'products-img/carrot.jpg',
      code: 111117,
      color: 'orange'
    }, {
      name: 'cucumber',
      price: 1,
      img: 'products-img/cucumber.jpg',
      code: 111118,
      color: 'green'
    }, {
      name: 'tomato',
      price: 1,
      img: 'products-img/tomato.jpg',
      code: 111114,
      color: 'red'
    }
  ];

  return products.json();
}

console.log(productsList)