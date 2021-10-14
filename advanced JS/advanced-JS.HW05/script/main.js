import {Card} from "./classCard.js";
const urlUsers = 'https://ajax.test-danit.com/api/json/users';
const urlPosts = 'https://ajax.test-danit.com/api/json/posts';
const container = document.querySelector('.container');

let users = {};

axios.get(urlUsers).then(({ data, status }) => {
  if(status === 200) {
    return  data;
  } else {
    console.error('Bad response')
  }
}).then(usersList => {
  usersList.forEach(e => {
    users[`id-${e.id}`] = e;
    })
  }).then(
  axios.get(urlPosts).then(({ data, status }) => {
    if(status === 200){
      data.forEach(({ userId: id, title, body: text, id: postId }) => {
        const email = users[`id-${id}`].email;
        const name = users[`id-${id}`].name;
        container.append(new Card(name, email, title, text, id, postId).render());
      })
    } else {
      console.error('Bad response')
    }
  })
).catch(err => console.log(err))

console.log(users)


