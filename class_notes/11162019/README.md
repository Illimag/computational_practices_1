# 11/16/2019

How to make a circle

	ellipse(200, 100, 50, 10)

P5.js reference:

	https://www.p5js.org/reference

They have embedded code editor in the reference.

Here is the syntax:

	ellipse(x,y,w, [h])

Optional:

	[]

It will assume the height is the same as the width.

	ellipse(200,100,100);

	circle() 

same as 

	ellipse()

This is how to make the ball bounce function.

	function setup() {
	  createCanvas(600, 400);
	  noStroke();
	}

	var ballX = 50;
	var ballSpeed = 3;

	var ballX2 = 50;
	var ballSpeed2 = 5;

	function draw() {
	  background(220);
  
	  fill(255, 0, 0);
	  ellipse(ballX, mouseX, 50);
  
	  fill(0, 255, 0);
	  ellipse(ballX2, mouseY, 50);
  
	  ballX = ballX + ballSpeed;
	  ballX2 = ballX2 + ballSpeed2;
  
	  if (ballX >= width){
	    ballSpeed = -3;
	  }
  
	  if (ballX2 >= width){
	    ballSpeed2 = ballSpeed2 * -1;
	  }
  
	  if (ballX <= 0){
	    ballSpeed =3;
	  }
  
	  if (ballX2 <= 0) {
	    ballSpeed2 = ballSpeed2 * -1;
	  }
	}
