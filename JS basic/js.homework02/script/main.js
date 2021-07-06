const number = +prompt('Enter your number');

if (number < 5){
    alert('Sorry, no numbers');
} else {
    for (let i = 0; i <= number; i++){
        if (i % 5 === 0){
            console.log(i);
        }
    }
}
