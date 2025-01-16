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
    square.addEventListener("mouseenter", () => {
      console.log("passou por aqui!");
    });
    document.querySelector("#container-eas").appendChild(square);
  }

  input.value = "";
}

function deleteSquares() {
  const container = document.querySelector("#container-eas");
  container.innerHTML = "";
}

submitButton.addEventListener("click", () => {
  deleteSquares();
  createSquares(textFieldUser);
});
