
const buttonChange = document.querySelector('.night-theme');
const wrapper = document.querySelector('.wrapper');

buttonChange.addEventListener('click', () => {

   wrapper.classList.toggle('night');

   if(wrapper.classList.contains('night')){
       localStorage.setItem('background', 'night');
   } else {
       localStorage.setItem('background', '');
   }
});

if (localStorage.getItem('background')){
    // ??????????
}
