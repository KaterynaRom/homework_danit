//
// Создать простую HTML страницу с кнопкой Вычислить по IP.
//   По нажатию на кнопку - отправить AJAX запрос по адресу
// https://api.ipify.org/?format=json, получить оттуда IP адрес клиента.
//   Узнав IP адрес, отправить запрос на сервис
// https://ip-api.com/ и получить информацию о физическом адресе.
//   Под кнопкой вывести на страницу информацию, полученную из
// последнего запроса - континент, страна, регион, город, район города.
//   Все запросы на сервер необходимо выполнить с помощью async await.

const urlIp = 'https://api.ipify.org/?format=json';
const urlUser = 'http://ip-api.com/json/';

const button = document.querySelector('.button');
const container = document.querySelector('.container');
button.addEventListener('click', getInfo);

async function getInfo () {
  await fetch(urlIp).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      console.error('Bad response')
    }
  }).then(({ip}) => {
    fetch(urlUser+ip).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        console.error('Bad response')
      }
    }).then(({ country, regionName, region, city, zip }) => {
      container.insertAdjacentHTML('beforeend', `
        <p>country: ${country}</p>
        <p>region name: ${regionName}</p>
        <p>region: ${region}</p>
        <p>city: ${city}</p>
        <p>zip: ${zip}</p>
      `)
    })
  })
}



