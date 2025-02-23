const grid = document.querySelector(".grid");
const cells = document.querySelectorAll(".cell");

console.log(cells);

const addShape = function() {

    const randomizer = Math.floor(Math.random() * 4);

    console.log(randomizer);

    if(randomizer === 0) addBigCircle();
    if(randomizer === 1) addBigSquare();
    if(randomizer === 2) addSmallCircle();
    if(randomizer === 3) addSmallSquare();
}

const addBigCircle = function() {
    cells.forEach((cell) => {
            cell.classList.add("big-circle");
    })
}

const addBigSquare = function() {
    cells.forEach((cell) => {
            cell.classList.add("big-square");
    })
}

const addSmallCircle = function() {
    cells.forEach((cell) => {
            cell.classList.add("small-circle");
    })
}

const addSmallSquare = function() {
    cells.forEach((cell) => {
            cell.classList.add("small-square");
    })
}

document.addEventListener("DOMContentLoaded", addShape);

