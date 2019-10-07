/* 
 *	Right now, this code just draws a single pixel per frame (using the point funxtion). But the canvas is 400x400, which contains 160,000 pixels, so filling the canvas will take a very long time! Modify the program to add a for loop so that each frame the code will draw 100 pixels at a time instead of just one. What does a for loop that runs 100 times look like?
 *
 * */

function setup() {
	  createCanvas(400, 400);
	  colorMode(HSB, width, height, 100);
}

function draw() {
	  var x = random(width);
	  var y = random(height);
	  
	   for (y = 0; y < 400; y++)
		      {

			        stroke(x, y, 100);
			        point(x, y);
			              
			            }
}

