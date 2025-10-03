const gridContainer = document.querySelector("#grid-container");
let gridW = gridContainer.clientWidth;
let gridH = gridContainer.clientHeight;
const squareSize = 16;
//Add +1 into square size for the gap property
let sqrPerColumn = Math.floor(gridH/(squareSize + 1));
let sqrPerRow = Math.floor(gridW/(squareSize + 1));

for(let i = 0; i < (sqrPerColumn*sqrPerColumn); i++){
    const square = document.createElement("div");
    square.classList.add('grid-square');

    gridContainer.appendChild(square);

    square.addEventListener('mouseover', (e) => {
    square.style.backgroundColor = "black"
})
}

//Do a button that resets the grid to the original color
