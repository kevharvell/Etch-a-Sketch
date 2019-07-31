let numSquares = 16;
let sideLength = Math.sqrt(numSquares);

let container = document.getElementById("container");

for(let i = 0; i < sideLength; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < sideLength; j++) {
        let div = document.createElement("div");
        div.classList.add("pixel");
        row.appendChild(div);
    }
    container.appendChild(row);
}