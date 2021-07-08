
function createNewUser ( ){
    let name = prompt('Enter your name.');
    let surname = prompt('Enter your last name.');
    let result = '';
        return {
            firstName: name,
            lastName: surname,
            getDiscount: function(){
                result += this.firstName[0].toLowerCase() + this.lastName.toLowerCase();
                return result;
            }
        }
 }
const newUser = createNewUser();
console.log(newUser.getDiscount());


















