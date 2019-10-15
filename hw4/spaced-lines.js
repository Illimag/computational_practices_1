/* Spread the lines further apart by changing the increment of the for loop above. */

function setup() {
	  createCanvas(400, 400);
}

function draw() {
	  background(255);

	  for (var x = 10; x < width-10; x = x + 100) {
		      line(x, height/2, mouseX, mouseY);
		    }
}

