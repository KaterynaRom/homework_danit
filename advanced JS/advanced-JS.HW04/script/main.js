const url = 'https://ajax.test-danit.com/api/swapi/films';
const preloader = document.querySelector('.lds-ellipsis')

fetch(url).then( res => {
  if (res.ok){
    return res.json();
  } else {
    console.error('Bad response')
  }
})
  .then(data =>  {
    console.log(data)
    const container = document.querySelector('.container');
    data.forEach(({ characters, name, openingCrawl, episodeId }) => {
      const cardFilm = document.createElement('div');
      container.append(cardFilm);
      cardFilm.insertAdjacentHTML("beforeend",`
        <div class="card">
          <p>Film: ${name}</p>
          <p>Episode: ${episodeId}</p>
          <p>Description: ${openingCrawl}</p>
          <ul class="characters"></ul>
        </div>
      `);
      const heroesList = cardFilm.querySelector('.characters');
        characters.forEach(el => {
        fetch(el).then(res => res.json())
          .then( ({ name }) => {
            preloader.className = 'inactive';
            heroesList.insertAdjacentHTML("beforeend",`
              <li>${name}</li>
            `)
          })
      })
    })
  })
