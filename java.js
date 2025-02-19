
const buttonContainer = document.getElementById('buttonContainer');
const setGridSize = document.createElement('button');
setGridSize.textContent = 'Set Grid Size';
setGridSize.classList.add("setGridSize");
buttonContainer.append(setGridSize);

function generateGrid(number) {
    const container = document.getElementById("gridContainer");
    container.innerHTML = "";
    container.style.width = "100vw";
    container.style.height = "100vh";

    for (let i = 0; i < number; i++){
        const row = document.createElement("div");
        row.classList.add("row");
        row.style.display = "flex";

        for (let j = 0; j < number; j++){
            const cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = "40px";
            cell.style.height = "40px";
            cell.style.border = "1px solid black";
            cell.style.display = "flex";
            cell.style.alignItems = "center";
            cell.style.justifyContent = "center";
            cell.textContent = "";
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}

setGridSize.addEventListener('click', function(){
        
            const gridSize = parseInt(prompt("Enter Grid Size (e.g., 64 for 64x64):"), 10);
            if (!isNaN(gridSize) && gridSize > 0) {
                generateGrid(gridSize);
            } else {
                alert("Invalid input. Pleaase refresh and enter a valid number.");
            }
        });
    

// resetGrid = () => {
//     let boxes = document.querySelectorAll('.gridItem');
//     boxes.forEach(box => {
//         box.style.backgroundColor = 'white';
//     })
// }
