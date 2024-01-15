const container = document.querySelector('.container');
const erase = document.querySelector('.erase');
let divs = [];

createGrid();

function createGrid() {
    for (let i = 0; i < 16; i++) {
        for (let j = 0; j < 16; j++) {
            divs[i, j] = document.createElement('div');
            container.append(divs[i, j]);
            divs[i, j].addEventListener('mouseover', changeBackgroundColor);
        }
    }

}

erase.addEventListener('click', resetBackground);

function resetBackground() {
    divs = [];
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    createGrid();
}

function changeBackgroundColor() {
    this.style.backgroundColor = 'red';
}