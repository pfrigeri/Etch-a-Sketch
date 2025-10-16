const gridContainer = document.querySelector("#grid-container");
const scaleBtn = document.querySelector('#scale');

let getGridWidth = () => gridContainer.clientWidth;
let getGridHeight = () => gridContainer.clientHeight;
let clearGrid = () => gridContainer.innerHTML = '';

let calculateSquarePerRow = (width, squareSize = 16, gap = 1) => {
    return Math.floor(width / (squareSize + gap));
}

let isDrawing = false;
const stopDrawing = () => { isDrawing = false; };

const mobileTouchStart = (e) => {
    if (e.target.classList.contains('grid-square')) {
        isDrawing = true;
        e.target.style.backgroundColor = 'black';
    }
};

const mobileTouchMove = (e) => {
    if (isDrawing) {
        e.preventDefault();
        const touch = e.touches[0];
        const element = document.elementFromPoint(touch.clientX, touch.clientY);
        if (element && element.classList.contains('grid-square')) {
            element.style.backgroundColor = 'black';
        }
    }
};

let loadSquaredGrid = (sqrPerSide) => {
    // Limpeza crucial: desativa a lógica mobile
    gridContainer.removeEventListener('touchstart', mobileTouchStart);
    gridContainer.removeEventListener('touchmove', mobileTouchMove);
    window.removeEventListener('touchend', stopDrawing);

    clearGrid();
    gridContainer.style.display = 'flex';
    gridContainer.style.flexWrap = 'wrap';

    for (let i = 0; i < (sqrPerSide ** 2); i++) {
        const square = document.createElement("div");
        square.classList.add('grid-square');
        square.style.width = `calc(${100 / sqrPerSide}% - 1px)`;
        square.style.aspectRatio = '1 / 1';
        
        square.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = "black";
        });
        
        gridContainer.appendChild(square);
    }
}

let loadRectangularGrid = (columns, rows) => {
    clearGrid();
    gridContainer.style.display = 'flex';
    gridContainer.style.flexWrap = 'wrap';
    
    for (let i = 0; i < (columns * rows); i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `calc(${100 / columns}% - 1px)`;
        square.style.height = `calc(${100 / rows}% - 1px)`;
        gridContainer.appendChild(square);
    }
}

let currentScale; // Guarda a escala atual do desktop

function initializeGrid() {
    const width = getGridWidth();
    const height = getGridHeight();
    const isMobile = window.matchMedia("(pointer: coarse)").matches;

    if (isMobile) {
        // --- ESTADO MOBILE ---
        const mobileColumns = Math.floor(width / 17); // 16px + 1px gap
        const mobileRows = Math.floor(height / 17);
        loadRectangularGrid(mobileColumns, mobileRows);

        gridContainer.addEventListener('touchstart', mobileTouchStart);
        gridContainer.addEventListener('touchmove', mobileTouchMove, { passive: false });
        window.addEventListener('touchend', stopDrawing);

    } else {
        // --- ESTADO DESKTOP ---
        const initialSqrPerRow = calculateSquarePerRow(width);
        currentScale = initialSqrPerRow;
        loadSquaredGrid(initialSqrPerRow);
    }
}

scaleBtn.addEventListener('click', (e) => {
    const scale = parseInt(prompt("Enter the number of squares per side:"));
    if (isNaN(scale) || scale < 1 || scale > 99) return alert("Number must be between 1 and 99");

    const isTouchDevice = window.matchMedia("(pointer: coarse)").matches;
    const width = getGridWidth();
    const height = getGridHeight();

    if (isTouchDevice) {
        const mobileRows = Math.floor(height / (width / scale));
        loadRectangularGrid(scale, mobileRows);
    } else {
        currentScale = scale;
        loadSquaredGrid(scale);
    }
});


initializeGrid();
console.log(document.querySelector('.grid-square'));
