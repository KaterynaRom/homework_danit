
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

window.onload = () => {
    if(localStorage.getItem('background') === 'night'){
        wrapper.classList.add('night');
    }
}