let number = 1;
const btn = document.querySelector('button');
const body = document.querySelector('body');
const list = document.querySelector('ul');
btn.addEventListener('click', function () {
    const newLi = document.createElement('li');
    newLi.textContent = number;
    list.appendChild(newLi);


    if (number % 3 == 0) {
        newLi.classList.add('big');
    }
    number++;
});