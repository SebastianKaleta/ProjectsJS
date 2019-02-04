let number = 1;
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    const newLi = document.createElement('li');
    newLi.textContent = number;
    const list = document.querySelector('ul');
    list.appendChild(newLi);


    if (number % 3 == 0) {
        newLi.classList.add('big');
    }
    number++;
});