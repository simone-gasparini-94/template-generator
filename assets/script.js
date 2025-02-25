const createGrids = function(rows, columns) {
    const container = document.querySelector(".container");

    for (let i = 0; i < rows * columns; i++) {
        const grid = document.createElement("div");
        grid.classList.add("grid");
        container.appendChild(grid);
    }

    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid => {
        const randomizer = Math.floor(Math.random() * 2);
        if(randomizer === 1) createCells(grid);
    }))
}

const createCells = function(grid) {
    const rows = 8;
    const columns = 4;
    for (let i = 0; i < rows * columns; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        grid.appendChild(cell);
    }

    const cells = grid.querySelectorAll(".cell");
    addShape(cells);
}

const addShape = function(cells) {  
    cells.forEach((cell => {
        const randomizer = Math.floor(Math.random() * 6);

        if(randomizer === 0) addBigCircle(cell);
        if(randomizer === 1) addBigSquare(cell);
        if(randomizer === 2) addSmallCircle(cell);
        if(randomizer === 3) addSmallSquare(cell);
        if(randomizer === 4) addSquareCircle(cell);
        if(randomizer === 5) addCircleSquare(cell);
    })) 
}

const addBigCircle = (cell) => cell.classList.add("big-circle");
const addBigSquare = (cell) => cell.classList.add("big-square");
const addSmallCircle = (cell) => cell.classList.add("small-circle");
const addSmallSquare = (cell) => cell.classList.add("small-square");
const addSquareCircle = (cell) => cell.classList.add("square-circle");
const addCircleSquare = (cell) => cell.classList.add("circle-square");

document.addEventListener("DOMContentLoaded", () => createGrids(4, 3));
