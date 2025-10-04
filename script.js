const gridContainer = document.querySelector("#grid-container");
let gridW = gridContainer.clientWidth;
let gridH = gridContainer.clientHeight;
const squareSize = 16;
//Add +1 into square size for the gap property
let sqrPerColumn = Math.floor(gridH/(squareSize + 1));
let sqrPerRow = Math.floor(gridW/(squareSize + 1));

let loadGrid = (sqrPerSide = sqrPerRow) =>{

    gridContainer.innerHTML = ''

    //compensates the space taken for the gap property avoiding overflow
    let avalableWidth = gridW - (sqrPerSide -1);

    for(let i = 0; i < (sqrPerSide**2); i++){

        const square = document.createElement("div");
        square.classList.add('grid-square');
        square.style.width = `${avalableWidth/sqrPerSide}px`
        square.style.height = `${avalableWidth/sqrPerSide}px`

        gridContainer.appendChild(square);

        //change the hardcoded color to a class
        square.addEventListener('mouseover', (e) => {
            square.style.backgroundColor = "black"
        })
    }
}

loadGrid();

let scaleBtn = document.querySelector('#scale');
let currentScale = sqrPerRow;

//Verify if shift is pressed on click to clean the grid instead of dblclick
scaleBtn.addEventListener('click', (e) => {

    if(e.shiftKey){
        loadGrid(currentScale)
    }
    else{

        let scale = Number.parseInt(prompt("Enter the amount of squares per side you want: "));

        if(scale > 0 && scale < 100){
            loadGrid(scale);
            currentScale = scale;
        } 
        else{
            alert("The number has to be between 1 and 99 !");
        }
    }
})


