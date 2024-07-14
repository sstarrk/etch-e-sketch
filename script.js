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
        cell.style.backgroundColor = `grey`;
        cell.addEventListener("mouseover", () => {
            if(cell.style.backgroundColor == "grey") {
                cell.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)} ${Math.floor(Math.random() * 255)})`;
                cell.style.opacity = `0.1`;
            } else if(cell.style.opacity == `0.1`) {
                cell.style.opacity = `0.2`;
            } else if(cell.style.opacity == `0.2`) {
                cell.style.opacity = `0.3`;
            } else if(cell.style.opacity == `0.3`) {
                cell.style.opacity = `0.4`;
            } else if(cell.style.opacity == `0.4`) {
                cell.style.opacity = `0.5`;
            } else if(cell.style.opacity == `0.5`) {
                cell.style.opacity = `0.6`;
            } else if(cell.style.opacity == `0.6`) {
                cell.style.opacity = `0.7`;
            } else if(cell.style.opacity == `0.7`) {
                cell.style.opacity = `0.8`;
            } else if(cell.style.opacity == `0.8`) {
                cell.style.opacity = `0.9`;
            } else if(cell.style.opacity == `0.9`) {
                cell.style.opacity = `1`;
            }
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

