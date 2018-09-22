var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;
var messageDisplay = document.querySelector("#message");
var resetBtn = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  
  setModeBtns();
  setSquares();
  reset();
}
function setSquares() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function pickColorAno() {
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.innerHTML = "Correct";
        resetBtn.textContent = "Play again?";
        resetPicker(clickedColor);
      }
      else {
        this.style.backgroundColor = "rgb(35, 35, 35";
        messageDisplay.innerHTML = "Wrong, try again";
      }
    });
  }
}

function setModeBtns(){
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function doButton() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}
function reset() {
  colors = generateRandomColors(numSquares);

  pickedColor = pickColor();

  colorDisplay.textContent = pickedColor;
  messageDisplay.innerHTML = "";

  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  document.querySelector("h1").style.backgroundColor = "steelblue";
  resetBtn.textContent = "New colors";
}

resetBtn.addEventListener("click", function resetAll() {
  reset();
});

function resetPicker(color) {
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  document.querySelector("h1").style.backgroundColor = pickedColor;
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  var colors = [];
  for (let i = 0; i < num; i++) {
    colors.push(randomColor());
  }
  return colors;
}

function randomColor() {
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + b + ", " + g + ")";
}
