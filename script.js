const gridContainer = document.querySelector("#grid-container");
let gridW = gridContainer.clientWidth;
let gridH = gridContainer.clientHeight;
const squareSize = 16;
//Add +1 into square size for the gap property
let sqrPerColumn = Math.floor(gridH / (squareSize + 1));
let sqrPerRow = Math.floor(gridW / (squareSize + 1));

let loadGrid = (sqrPerSide = sqrPerRow) => {

    gridContainer.innerHTML = ''

    //compensates the space taken for the gap property avoiding overflow
    let avalableWidth = gridW - (sqrPerSide - 1);

    for (let i = 0; i < (sqrPerSide ** 2); i++) {

        const square = document.createElement("div");
        square.classList.add('grid-square');
        square.style.width = `${avalableWidth / sqrPerSide}px`
        square.style.height = `${avalableWidth / sqrPerSide}px`

        gridContainer.appendChild(square);

        //change the hardcoded color to a class
        square.addEventListener('mouseover', (e) => {
            square.style.backgroundColor = "black"
        })
    }
}

let loadGridMobile = (columns, rows) => {

    gridContainer.innerHTML = '';

    const totalSquares = columns * rows;

    const squareWidth = 100 / columns;
    const squareHeight = 100 / rows;

    for (let i = 0; i < totalSquares; i++) {

        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `calc(${100 / columns}% - 1px)`;
        square.style.height = `calc(${100 / rows}% - 1px)`;

        gridContainer.appendChild(square);

    }

    let isDrawing = false;

    gridContainer.addEventListener('touchstart', (e) => {
        if (e.target.classList.contains('grid-square')) {
            isDrawing = true;
            e.target.style.backgroundColor = 'black';
        }
    }, { passive: true }); // passive:true melhora a performance de rolagem se não usar preventDefault aqui

    window.addEventListener('touchend', () => { isDrawing = false; });

    gridContainer.addEventListener('touchmove', (e) => {
        if (isDrawing) {
            e.preventDefault();
            const touch = e.touches[0];
            const element = document.elementFromPoint(touch.clientX, touch.clientY);
            if (element && element.classList.contains('grid-square')) {
                element.style.backgroundColor = 'black';
            }
        }
    });

}

let currentGridW = gridContainer.clientWidth;
let currentGridH = gridContainer.clientHeight;

if (currentGridW <= 600) {

    const targetSquareSize = 16;

    const mobileColumns = Math.floor(currentGridW / targetSquareSize);
    const mobileRows = Math.floor(currentGridH / targetSquareSize);

    loadGridMobile(mobileColumns, mobileRows);

} else {
    // DESKTOP
    loadGrid();
}
let scaleBtn = document.querySelector('#scale');
let currentScale = sqrPerRow;

//Verify if shift is pressed on click to clean the grid instead of dblclick
scaleBtn.addEventListener('click', (e) => {

    if (e.shiftKey) {
        loadGrid(currentScale)
    }
    else {

        let scale = Number.parseInt(prompt("Enter the amount of squares per side you want: "));

        if (scale > 0 && scale < 100) {
            if (currentGridW <= 600) {
                const newRows = Math.floor(scale * (gridContainer.clientHeight / gridContainer.clientWidth));
                loadGridMobile(scale, newRows);
            } else {
                loadGrid(scale);
                currentScale = scale;
            }
        }
        else {
            alert("The number has to be between 1 and 99 !");
        }
    }
})


