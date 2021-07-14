function createNewUser ( ){
    let name = prompt('Enter your name.');
    let surname = prompt('Enter your last name.');
    let birthday = prompt('Enter your date of birth dd.mm.yyyy').split(".");
    let year = +birthday[2];
    let month = +birthday[1];
    let day = +birthday[0];
    let result = '';
    let age = '';
    const dateNow = Date.now();
    const birth = new Date(year, month, day);

    return {
        firstName: name,
        lastName: surname,
        getDiscount(){
            result += this.firstName[0].toUpperCase() + this.lastName.toLowerCase() + year;
            return result;
        },
        getAge(){
            age += Math.floor((Number(dateNow) - Number(birth)) / (1000 * 60 * 60 * 24 * 365));
            return age;
        }
    }
 }
const newUser = createNewUser();
console.log(newUser.getDiscount());
console.log(newUser.getAge());

















