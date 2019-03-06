const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = document.getElementsByClassName('task'); //aktualizuje nam na żywo ale nie można forEach
const input = document.querySelector('input');
 


const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key; //pobieramy index tablicy dla usunięcia elementu
    toDoList.splice(index, 1); //czyścumy index tablicy usuwanego elementu
    console.log(toDoList)
    taskNumber.textContent = toDoList.length;
    renderList();
}



const addTask = (e) => {
    e.preventDefault(); //nie odświeża strony
    const titleTask = input.value; //pobieramy wpisywana wartość w input
    if (titleTask === "") return; //blokowanie możliwości dodania pustego zadania
    const task = document.createElement('li');
    task.className = "task"; //tworzenie listy zadań z klasami
    task.innerHTML = titleTask + "<button> Usuń</button>"; //wpisujemy w li buttona
    toDoList.push(task); //pushowanie do tablicy
    renderList();
    ul.appendChild(task);
    input.value = ""; //czyszczenie inputa po wysłaniu

    // const liItems = document.querySelectorAll('li.task').length;
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask) //wykonujemy zadanie/poszukiwanie w tasku
    // document.querySelector('li:last-child button').addEventListener('click', removeTask) //druga wersja
}


const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => { //nadajemy numeracje/index dla każdego elementu pobieranego do tablicy
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement); //dodajemy index przy pomocy data-key
    })
}
form.addEventListener('submit', addTask)