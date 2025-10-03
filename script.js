const gridContainer = document.querySelector("#grid-container");
let gridW = gridContainer.clientWidth;
let gridH = gridContainer.clientHeight;
const squareSize = 16;
let sqrPerColumn = Math.floor(gridH/squareSize);
let sqrPerRow = Math.floor(gridW/squareSize);

for(let i = 0; i < (sqrPerColumn*sqrPerColumn); i++){
    const square = document.createElement("div");
    square.classList.add('grid-square');

    gridContainer.appendChild(square)
}