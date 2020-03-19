var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");
var random = document.querySelector("#random");



function setGradient() {
    body.style.background = "linear-gradient(to right, " 
    + color1.value 
    + "," 
    + color2.value 
    +")";

    css.textContent = body.style.background + ";";
}

css.textContent = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value
	+ ")"
	+ ";";

    
function getRandomColor1() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function getRandomColor2() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function setRandomColor() {
    color1.value = getRandomColor1();
    color2.value = getRandomColor2();
    setGradient();
  }

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
document.addEventListener('click', function(event) {
	if (event.target.matches('#random')) {
		setRandomColor();
    }
});
