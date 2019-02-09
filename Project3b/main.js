let size = 10;
let orderElement = 1;

const init = () => {
    //kod
    const btn = document.createElement("button"); //create button
    const textnode = document.createTextNode("Dodaj 10 elementów listy"); //create text node with text inside button
    btn.appendChild(textnode); //add variable with text to button
    document.body.appendChild(btn); //add button to body
    const ul = document.createElement("ul");
    document.body.appendChild(ul);

    btn.addEventListener('click', createLiElements);

}

const createLiElements = () => {
    //kod

    const list = document.ul.createElement('li');
    for (let i = 0; i < 10; i++) {

        const textLiNode = document.createTextNode(`Elementów listy ${orderElement}`);
        document.appendChild(list);

    }
    orderElement++;
}

init()
createLiElements()