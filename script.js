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

    square.addEventListener("mouseenter", function () {
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
      if (this.style.backgroundColor === "") {
        let backgroundColor = "";
        for (let i = 0; i < 6; i++) {
          let aleatory = Math.floor(Math.random() * 16);
          backgroundColor += colorHex[aleatory];
        }
        this.style.backgroundColor = `#${backgroundColor}`;
      } else {
        if (this.style.opacity === "") {
          this.style.opacity = 0.2;
        } else {
          if (+this.style.opacity <= 1.1) {
            this.style.opacity = `${+this.style.opacity + 0.1}`;
          }
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

submitButton.addEventListener("click", () => {
  deleteSquares();
  createSquares(textFieldUser);
});
