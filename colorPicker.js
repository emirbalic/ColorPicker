var colors = generateRandomColors(6);


// [
//   "rgb(255, 0, 0)",
//   "rgb(255, 255, 0)",
//   "rgb(0, 255, 0)",
//   "rgb(0, 255, 255)",
//   "rgb(0, 0, 255)",
//   "rgb(255, 0, 255)"
// ];

var squares = document.querySelectorAll(".square");
//var rgbCode = 255;
var pickedColor = pickColor(); //pickRandomColor(rgbCode);
var colorDisplay = document.getElementById('colorDisplay');
colorDisplay.textContent = pickedColor; 
var messageDisplay = document.querySelector('#message');
 

for (var i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colors[i]; //pickRandomColor(); //
  // squares[i].style.backgroundColor = pickRandomColor(rgbCode);

  squares[i].addEventListener('click', function pickColorAno(){
    
    var clickedColor = this.style.backgroundColor;

    //console.log(clickedColor, pickedColor);
    if(clickedColor === pickedColor){
      
      messageDisplay.innerHTML = 'Correct';
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

// function pickRandomColor(howmany){
  
//   var colorRGB = "rgb(" + pickRandomNumer(howmany) +" ," + pickRandomNumer(howmany) + " ," + pickRandomNumer(howmany)+ ")";
//   //console.log(colorRGB);
//   return colorRGB;
// }

// function pickRandomNumer(howmany){
//   //console.log(howmany);
//   return Math.floor(Math.random()* Number(howmany) +1);
//}
