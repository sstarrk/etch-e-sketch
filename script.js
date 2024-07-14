const container = document.querySelector("div");
const sizeButton = document.querySelector("#size");
let size = 16;

function makeGrid(size) {
    for(let i = 0; i < (size * size); i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        const cellsOnSide = (640 / size);
        cell.style.height = `${cellsOnSide}px`;
        cell.style.width = `${cellsOnSide}px`;
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "#675252";
        });
        container.appendChild(cell);
    }
}
makeGrid(size);


function deleteGrid(size) {
    for(let i = 0; i < (size * size); i++) {
        const cell = document.querySelector(".cell");
        container.removeChild(cell);
    }
}

sizeButton.addEventListener("click", () => {
    deleteGrid(size);
    size = +prompt("Enter number of squares per side. Limit is 100.");
    while (size > 100 || size < 1) {
        size = +prompt("Enter number of squares per side. Limit is 100.");
    }
    makeGrid(size);
});

