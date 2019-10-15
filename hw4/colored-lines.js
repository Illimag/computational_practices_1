/* Modify the code above to draw each line in a different color. Consider using HSB color mode and re-using the x variable as the hue.  */

function setup() {
	  createCanvas(400, 400);
}

function draw() {
	  background(255);

	  for (var x = 10; x < width-10; x = x + 10) {
		      
		      stroke(x);
		      line(x, height/2, mouseX, mouseY);
		    }
}

