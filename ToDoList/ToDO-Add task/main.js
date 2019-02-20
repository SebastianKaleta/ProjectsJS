const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumer = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task');
const input = document.querySelector('input');

const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumer.textContent = listItems.length;
}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;

    if (titleTask === "") return;

    const task = document.createElement('li');
    task.className = "task";

    task.innerHTML = titleTask + "<button> Usuń</button>"
    ul.appendChild(task);
    input.value = "";

    // const liItems = document.querySelectorAll('li.task').length;
    taskNumer.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask) //wykonujemy zadanie/poszukiwanie w tasku
    // document.querySelector('li:last-child button').addEventListener('click', removeTask) //druga wersja
}

form.addEventListener('submit', addTask)