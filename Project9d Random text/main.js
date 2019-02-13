const options = ["Wykonaj", "Przemyśl to zanim przejdziesz do dzialania", "Życie jest zbyt krótkie by myśleć!"];

const showAdArr = ["Walcz!", " Nie wiem!", "Wymyśl coś!"];

const h1 = document.querySelector('h1');
const input = document.querySelector('input');

const addOption = (e) => {
    e.preventDefault();
    options.push(input.value);
    input.value = "";
}

const cleanOption = (e) => {
    e.preventDefault();
    options.length = 0;
}

const showAdvice = (e) => {
    e.preventDefault();
    h1.textContent = `${showAdArr[Math.floor(Math.random() * showAdArr.length)]}`;
}

const showOpp = (e) => {
    e.preventDefault();
    alert(options);
}




document.querySelector('.add').addEventListener('click', addOption);
document.querySelector('.clean').addEventListener('click', cleanOption);
document.querySelector('.showAdvice').addEventListener('click', showAdvice);
document.querySelector('.showOptions').addEventListener('click', showOpp);