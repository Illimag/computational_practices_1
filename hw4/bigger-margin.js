/* Increase the left and right margins on the sketch by changing the initializer and condition of the for loop above.*/

function setup() {
	  createCanvas(400, 400);
}

function draw() {
	  background(255);

	  for (var x = 100; x < width-90; x = x + 10) {
		      line(x, height/2, mouseX, mouseY);
		    }
}

