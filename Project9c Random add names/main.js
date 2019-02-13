const names = [];
const div = document.querySelector('div');

const addName = (e) => {
    e.preventDefault(); //zatrzymuje działanie - tu odświeżanie strony
    const input = document.querySelector('input');
    const newName = input.value;

    if (input.value.length) {
        for (name of names) {
            if (name === newName) {
                alert("Już jest!");
                return
            }
        }
        names.push(newName);
        div.textContent += newName + ", ";
        input.value = "";
    }
}

document.querySelector('button').addEventListener('click', addName)