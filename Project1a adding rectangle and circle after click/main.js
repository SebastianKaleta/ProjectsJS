let increment = 0;
let count = 0;

const btnClick = document.querySelector('.btn').addEventListener('click', function () {
    const addedDiv = document.createElement('div');
    const body = document.querySelector('.container');

    body.appendChild(addedDiv);

    count += 1;
    increment++;
    console.log(increment)
    if (increment >= 5) {
        addedDiv.classList.add('circle');
        increment = 0;
    }
    addedDiv.innerHTML = count;

})