function setup() {
  // Create the canvas
  createCanvas(720, 400);
  background(0, 0, 0);
}

var radius = 50;
var xoffset = radius + 150;
var yoffset = radius + 150;
var layers = radius / 2;
var rotation = 0;
var protrude = 10;

function draw() {
  
  translate(xoffset, yoffset);
  rotate(radians(rotation));
  background(0, 0, 0);
  
  stroke(127, 63, 120, 25);
  fill(0, 102, 153);
  text("S", -4, radius);
  text("N", -4, -radius);
  text("W", -radius, 4);
  text("E", radius, 4);
  
  for(var i = 0; i < layers; i++) {
	stroke(127, 63, 120, i * 5);
	//fill(127, 63, 120, 25 - i);
	ellipse(0, 0, radius - i, radius - i);
  }
  
  stroke(127, 63, 120, 120);
  line(0 - (radius / 2) - protrude, 0, (radius / 2) + protrude, 0);
  line(0, 0 - (radius / 2) - protrude, 0, (radius / 2) + protrude);  
	
  //rotate(radians(-rotation));	
  text("TheOminousMango: Hello World!", -85, radius + 30);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    rotation += 1;
  } else if (keyCode === RIGHT_ARROW) {
    rotation -= 1;
  }
}