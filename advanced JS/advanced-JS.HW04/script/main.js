const url = 'https://ajax.test-danit.com/api/swapi/films';

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
            heroesList.insertAdjacentHTML("beforeend",`
              <li>${name}</li>
            `)
          })
      })
    })
  })







  // .then(({ characters, name, openingCrawl }) => {
  //
  //   console.log(characters)
  //   const container = document.querySelector(".container");
  //   characters.forEach(el => {
  //     fetch(el).then(res => res.json())
  //       .then(data => console.log(data))
  //   })
  //

  // })
//   const container = document.querySelector(".container");
//   if(status === 200){
//     console.log(data)
//     data.forEach(({name, model, films,id}) => {
//       container.insertAdjacentHTML("beforeend",
//         `<div class="card">
//                     <p>Name: ${name}</p>
//                     <p>Model: ${model}</p>
//                     <ul id="vehicles-${id}"></ul>
//                     </div>`)
//       films.forEach(filmUrl=>{
//         // Вставить прелоадер
//         axios.get(filmUrl).then(({status, data:{name}}) => {
//           // Убрать прелоадер
//           if(status === 200){
//             document.querySelector(`#vehicles-${id}`)
//               .insertAdjacentHTML("beforeend", `<li>${name}</li>`)
//           }
//         }).catch(error => console.log(error))
//       })
//     })
//   }
//
// }).catch(error => console.log(error));
