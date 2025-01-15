const textFieldUser = document.querySelector("#how-many-squares");
const submitButton = document.querySelector("#button-calc-squares");

function createSquares(input) {
  let userInput = input.value;
  let grid = userInput * userInput;
  let squareSize = 960 / userInput;
  document.documentElement.style.setProperty(
    "--square-size",
    `${squareSize}px`
  );

  for (let i = 0; i < grid; i++) {
    const square = document.createElement("div");
    square.classList.add("square");
    document.querySelector("#container-eas").appendChild(square);
  }

  input.value = "";
}

function deleteSquares(squares) {
  squares.forEach((square) => {
    square.remove();
  });
}

submitButton.addEventListener("click", () => {
  let createdSquares = document.querySelectorAll(".square");
  if (createdSquares.length > 0) {
    deleteSquares(createdSquares);
    createSquares(textFieldUser);
  } else {
    createSquares(textFieldUser);
  }
});
