let userInput = +prompt("Quantos quadrados? ");

let grid = userInput * userInput;
let squareSize = 960 / userInput;

for (let i = 0; i < grid; i++) {
  const square = document.createElement("div");
  square.classList.add("square");
  document.getElementById("container-eas").appendChild(square);
}

document.documentElement.style.setProperty("--square-size", `${squareSize}px`);
