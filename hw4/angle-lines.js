/* 
 * Replace each "???" in the code to create a sketch that looks something like the following image. */

function setup() {
	  createCanvas(400, 400);
	  colorMode(HSB);
}

function draw() {
	  background(255);

	  for (var x = 100; x < 1000; x = x + 10) {
		      line(x, height/2, x+100, height/2-75);
		    }
}

