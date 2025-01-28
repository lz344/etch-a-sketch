const textFieldUser = document.querySelector("#how-many-squares");
const submitButton = document.querySelector("#button-calc-squares");

function createSquares(input, color, colorItensity) {
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

    square.addEventListener("mouseenter", function () {
      if (!this.style.backgroundColor) {
        this.style.backgroundColor = color();
      } else {
        if (+this.style.opacity < 0.9) {
          this.style.opacity = colorItensity(+this.style.opacity);
        }
      }
    });

    document.querySelector("#container-eas").appendChild(square);
  }

  input.value = "";
}

function deleteSquares() {
  const container = document.querySelector("#container-eas");
  container.innerHTML = "";
}

function randomColor() {
  const colorHex = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let backgroundColor = "#";
  for (let i = 0; i < 6; i++) {
    let aleatory = Math.floor(Math.random() * 16);
    backgroundColor += colorHex[aleatory];
  }
  return backgroundColor;
}

function colorOpacity(element) {
  return element + 0.1;
}

submitButton.addEventListener("click", () => {
  if (textFieldUser.value <= 0 || textFieldUser.value > 100) {
    alert("O tamanho do grid deve ser maior que 0 e menor que 100!");
  } else {
    deleteSquares();
    createSquares(textFieldUser, randomColor, colorOpacity);
  }
});
