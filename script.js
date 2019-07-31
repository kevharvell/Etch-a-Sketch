
// Draws squares of sideLength x sideLength
const DrawSquares = (sideLength) => {
    // calculate pixel side length using 700px container width
    let pixelSideLength = 600 / sideLength;
    let container = document.getElementById("container");
    for(let i = 0; i < sideLength; i++) {
        // create a row to hold the squares
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < sideLength; j++) {
            // create each square in the row
            let div = document.createElement("div");
            div.classList.add("pixel");
            div.setAttribute("style", 
                    "width: " + pixelSideLength + ";" +
                    "height: " + pixelSideLength + ";");
            // if mouseover, etch the square
            div.addEventListener("mouseover", () => {
                div.classList.add("etched");
            });
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

const Clear = () => {
    let squares = document.getElementsByClassName("pixel");
    for(let i = 0; i < squares.length; i++) {
        squares[i].classList.remove("etched");
    }
}

const InitHandlers = () => {
    let clearBtn = document.getElementById("clearBtn");
    clearBtn.addEventListener("click", () => {
        Clear();
    });
    let sideLengthInput = document.getElementById("sideLength");
    sideLengthInput.addEventListener("change", (e) => {
        ResizeGrid(e.target.value);
    });
}

const ResizeGrid = (sideLength) => {
    let container = document.getElementById("container");
    container.innerHTML = "";
    DrawSquares(sideLength);
}

// MAIN 
DrawSquares(16);
InitHandlers();
