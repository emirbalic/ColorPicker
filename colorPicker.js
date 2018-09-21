var colors = [
  "RGB(255, 0, 0)",
  "RGB(255, 255, 0)",
  "RGB(0, 255, 0)",
  "RGB(0, 255, 255)",
  "RGB(0, 0, 255)",
  "RGB(255, 0, 255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor; 

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i];
}
