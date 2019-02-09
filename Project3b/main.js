let size = 10;
let orderElement = 1;

const init = () => {
    //kod
    const btn = document.createElement("button"); //create button
    const btnReset = document.createElement("button"); //create button reset
    // const textnode = document.createTextNode("Dodaj 10 elementów listy"); //create text node with text inside button
    // btn.appendChild(textnode); //add variable with text to button

    btn.textContent = "Dodaj 10 elementów do listy";
    btnReset.textContent = "Wyczyść";
    document.body.appendChild(btn); //add button to body
    document.body.appendChild(btnReset); //add button to body

    const ul = document.createElement("ul");
    ul.style.listStyle = "none";
    document.body.appendChild(ul);

    btn.addEventListener('click', createLiElements);
    btnReset.addEventListener('click', cleanList);

}

const createLiElements = () => {
    //kod
    for (let i = 0; i < 10; i++) {
        const li = document.createElement('li');
        li.textContent = `Element nr ${orderElement++}`;
        li.style.fontSize = `${size++}px`;
        document.querySelector('ul').appendChild(li);
    }
}
const cleanList = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
}
init()