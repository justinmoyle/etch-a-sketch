let color = 'black';
let isHolding = false;

function populateBoard(size){
    let board = document.querySelector(".board");
    board.innerHTML = "";
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size * size;
    for (let i = 0; i < amount; i++){
        let square = document.createElement('div');
        square.style.backgroundColor = "white";
        
        square.addEventListener("mousedown", startColoring);
        square.addEventListener("mouseover", continueColoring);
        
        board.appendChild(square);
    }
}

populateBoard(16);

function changeSize(input) {
    if (input >= 2 && input <= 100){
        populateBoard(input);
    } else {
        console.log("Invalid Input e.g. 2-100");
    }
}

function colorSquare(element) {
        if (color === "random"){
            element.style.backgroundColor = `hsl(${Math.random() * 300}, 100%, 50%)`;
        } else {
            element.style.backgroundColor = color;
        }
}

function startColoring(event){
    isHolding = true;
    colorSquare(event.target);
}

function continueColoring(event) {
    if (isHolding) {
        colorSquare(event.target);
    }
}

function stopColoring() {
    isHolding = false;
}

function changeColor(choice) {
    color = choice;
}

function resetBoard(){
    document.querySelectorAll(".board div").forEach(div => div.style.backgroundColor = "white");
}

document.addEventListener("mouseup", stopColoring);

