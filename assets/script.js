const grid = document.querySelector(".grid");
const cells = document.querySelectorAll(".cell");

const resetClasses = function() {
    cells.forEach((cell) => {
        cell.classList.remove("big-circle", "big-square", "small-circle", "small-square", "square-circle", "circle-square");
    })
}
const addShape = function() {
    
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

const addBigCircle = function(cell) {
    cell.classList.add("big-circle");
}

const addBigSquare = function(cell) {
    cell.classList.add("big-square")
}

const addSmallCircle = function(cell) {
    cell.classList.add("small-circle");
}

const addSmallSquare = function(cell) {
    cell.classList.add("small-square");
}

const addSquareCircle = function(cell) {
    cell.classList.add("square-circle");
}

const addCircleSquare = function(cell) {
    cell.classList.add("circle-square");
}

document.addEventListener("DOMContentLoaded", addShape);

