var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");

var pickedColor = pickColor(); 
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor; 
var messageDisplay = document.querySelector('#message');
 
var resetBtn = document.getElementById('reset');

var easyBtn = document.querySelector('#easyBtn');
var hardBtn = document.querySelector('#hardBtn');

easyBtn.addEventListener('click', function fnEasyBtn (){
  easyBtn.classList.add('selected');
  hardBtn.classList.remove('selected');
  
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i< squares.length; i++){
    if(colors[i]){
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
  }
});

hardBtn.addEventListener('click', function fnhardBtn (){
  hardBtn.classList.add('selected');
  easyBtn.classList.remove('selected');
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  
  colorDisplay.textContent = pickedColor;
  
  for (var i = 0; i< squares.length; i++){    
      squares[i].style.backgroundColor = colors[i];
      squares[i].style.display = 'block';

  }
});

resetBtn.addEventListener('click', function resetAll(){
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();  
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i]; 
  }
  messageDisplay.innerHTML = '';
  document.querySelector('h1').style.backgroundColor = '#232323';

});

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i]; 

  squares[i].addEventListener('click', function pickColorAno(){
    
    var clickedColor = this.style.backgroundColor;

    if(clickedColor === pickedColor){
      
      messageDisplay.innerHTML = 'Correct';
      resetBtn.textContent = 'Play again?';
      resetPicker(clickedColor);

    } else {
      this.style.backgroundColor = 'rgb(35, 35, 35';
      messageDisplay.innerHTML = 'Wrong, try again';
    }
    
  });
}

function resetPicker(color){
  
  for (let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = color;   
  }
  document.querySelector('h1').style.backgroundColor = pickedColor;
}

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  var colors = [];
  for(let i = 0; i < num; i++){
    colors.push(randomColor());
  }
  return colors;
}

function randomColor(){
  var r = Math.floor(Math.random()*256);
  var g= Math.floor(Math.random()*256);
  var b = Math.floor(Math.random()*256);
  return "rgb(" + r +", " + b + ", " + g + ")";

}


