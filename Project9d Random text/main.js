const options = ["Wykonaj", "Przemyśl to zanim przejdziesz do dzialania", "Życie jest zbyt krótkie, by myśleć!"];

const showAdArr = ["Walcz!", " Nie wiem!", "Wymyśl coś!"];

const h1 = document.querySelector('h1');
const btnAdd = document.querySelector('.add');
const btnClean = document.querySelector('.clean');
const btnShow = document.querySelector('.showAdvice');
const btnOpp = document.querySelector('.showOptions');
const input = document.querySelector('input');

const addOption = (e) => {
    e.preventDefault();

    options.push(input.value);
    console.log(options);
    input.value = "";
}

const cleanOption = (e) => {
    e.preventDefault();
    options.length = 0;
    console.log(options);
}

const showAdvice = (e) => {
    e.preventDefault();
    h1.textContent = `${showAdArr[Math.floor(Math.random() * showAdArr.length)]}`;
    console.log(h1);
}

const showOpp = (e) => {
    e.preventDefault();
    alert(options);
}




btnAdd.addEventListener('click', addOption);
btnClean.addEventListener('click', cleanOption);
btnShow.addEventListener('click', showAdvice);
btnOpp.addEventListener('click', showOpp);