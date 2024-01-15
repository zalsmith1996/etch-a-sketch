const container = document.querySelector('.container');
const divs = [];

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        divs[i, j]= document.createElement('div');
        container.append(divs[i, j]);
    }
}