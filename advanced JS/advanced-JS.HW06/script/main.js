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
const urlUser = 'https://ip-api.com/';

const button = document.querySelector('.button');
button.addEventListener('click', async () => {})

async function getIp () {
  await fetch(urlIp).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      console.error('Bad response')
    }
  })
    .then(({ip}) => {
      fetch(urlUser+ip).then(res => {
        if (res.ok) {
          return res.json();
        } else {
          console.error('Bad response')
        }
      })
    });




}

getIp();

