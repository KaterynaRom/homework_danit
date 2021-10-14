export class Card {
  constructor(name, email, title, text, id, postId) {
    this.postId = postId;
    this.id = id;
    this.name = name;
    this.email = email;
    this.title = title;
    this.text = text;
    this.card = document.createElement('div');
    this.button = document.createElement('button');
  }
  render (){
    this.card.classList.add('card');
    this.card.id = `${this.id}`;
    this.card.append(this.button);
    this.button.classList.add('button');
    this.button.innerHTML = 'X';
    this.button.addEventListener('click', this.deleteCard.bind(this));

      this.card.insertAdjacentHTML('beforeend', `
        <div class="user">
          <p class="name">${this.name}</p>
          <p class="mail">${this.email}</p>
        </div>
        <h3 class="title">${this.title}</h3>
        <p class="text">${this.text}</p>
      `);
    return this.card;
  }

  async deleteCard () {
    return await axios.delete(`https://ajax.test-danit.com/api/json/posts/${this.postId}`)
      .then(({ status }) => {
        if(status === 200){
          this.card.outerHTML = '';
        } else {
          console.error('Bad response')
        }
      });
  }
}