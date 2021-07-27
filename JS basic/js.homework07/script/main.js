
const arrList = (arr, parent= document.body) => {

    let list = document.createElement('ul');
    let elements = arr.map(elem => {
        return `<li>${elem}</li>`;
    }).join('\n');
    list.innerHTML = elements;
    parent.append(list);
    return 'список выведен'
};

console.log(arrList(["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"]));


















