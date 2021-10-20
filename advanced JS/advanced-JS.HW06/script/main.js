
const urlIp = 'https://api.ipify.org/?format=json';
const urlUser = 'http://ip-api.com/json/';

const button = document.querySelector('.button');
const container = document.querySelector('.container');
button.addEventListener('click', getInfo);

async function getInfo () {
  try {
    const myIp = await fetch(urlIp).then(res => res.json()).then(({ip}) => ip);
    const { country, regionName, region, city, zip } = await fetch(urlUser + myIp).then(res => res.json());
    container.insertAdjacentHTML('beforeend', `
        <p>country: ${country}</p>
        <p>region name: ${regionName}</p>
        <p>region: ${region}</p>
        <p>city: ${city}</p>
        <p>zip: ${zip}</p>`);
  } catch (err) {
    console.log(err)
  }
}

