const container = document.querySelector("div");
const sizeButton = document.querySelector("#size");

function makeGrid(size) {
    for(let i = 0; i < (size * size); i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        const cellsOnSide = (640 / size);
        cell.style.height = `${cellsOnSide}px`;
        cell.style.width = `${cellsOnSide}px`;
        container.appendChild(cell);
    }
}
makeGrid(16);


function deleteGrid() {
    const cellList = document.querySelectorAll(".cell");
    while (cellList.length !== 0) {
        const oneCell = document.querySelector(".cell");
        container.removeChild(oneCell);
    }
}

sizeButton.addEventListener("click", (sizePrompt));

function sizePrompt() {
    let size = +prompt("Enter number of squares per side. Limit is 100.");
    while (userSize > 100 || userSize < 1 || userSize == isNaN ) {
        size = +prompt("Enter number of squares per side. Limit is 100.");
    }
    deleteGrid();
    makeGrid(userSize);
}

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("mouseover", () => {
        cell.style.backgroundColor = "#675252";
    });
});