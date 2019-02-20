//FILTER I MAP
/* 
// filter
const arr = [34, 219, 109, 2934, 12, 10, 29];
const oddNumbers = arr.filter(number => number % 2) //filtrowanie nieparzystych
const evenNumbers = arr.filter(number => !(number % 2)); //filtrowanie parzystych
const numbersBiggerThen100 = arr.filter(number => number > 100); //filtruje wieksze od 100


// map
const double = arr.map(number => number * 2) //wszystko dwukrotnie wieksze
const people = arr.map(number => number + "osób") //dopisanie tekstu


// forEach
//nie zwraca nowej tablicy, ingerujemy w obecną

arr.forEach((number, index) => arr[index] = number * 2)//przebudowanie obecnej tablicy

 */

//  SEARCH

const input = document.querySelector('input');
const ul = document.querySelector('ul');
const liElements = document.querySelectorAll('li');

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...liElements];

    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText))
    ul.textContent = "";
    tasks.forEach(li => ul.appendChild(li))
}
input.addEventListener('input', searchTask)