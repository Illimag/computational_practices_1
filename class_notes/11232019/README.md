# Dripping Pipe

This code uses the JavaScript Library P5.js to create a canvas with a pipe and a drop of water. When the water hits the bottom of the canvas, the waterlevel increases. Eventually when the waterlevel reaches the top of the canvas, the waterlevel resets.

	var x = 230;
	var y = 220;
	var waterLevel = 0;

	function setup() {
	  createCanvas(400, 400);
	}

	function draw() {
	  background(0);
	  noStroke();
  
	  // draw pipe
	  fill(255);
	  rect(0, 200, x, 20);

	  // draw drip
	  fill(100,150,190)
	  ellipse(x, y, 10);

	  // down 3 pixels each frame, but maybe should be accelerating?
	  y = y + 3

	  // if invisible for a full “height” amount…
	  if (y >= 400) {
	    // reset
	    y = 220;
	    waterLevel += -10;
	  }
  
  
	  fill(100,150,190);
	  rect(0,400,1000,waterLevel);
  
	  if (waterLevel <= -400){
	    waterLevel = 0;
	  }
	}
