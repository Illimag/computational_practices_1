# Homework 1

## P5.JS Account Creation

I have created the following account for p5.js 

	jaemnkm

## Homework

The code in class is as follows 

	var bubbles = [];

	function setup() {
	  createCanvas(800, 600);

	  for (var i = 0; i < 10; i++) {
	    var bubble = {
	      x: random(width),
	      y: random(height),
	      radius: random(50, 100)
	    };
	    bubbles.push(bubble);
	  }
	}

	function draw() {
	  background(255);

	  for (var i = 0; i < bubbles.length; i++) {
	    var bubble = bubbles[i];

	    if (dist(mouseX, mouseY, bubble.x, bubble.y) < bubble.radius) {
	      if (mouseIsPressed) {
	        bubbles.splice(i, 1); // remove this bubble!
	      }
	      fill(255, 200, 200, 200);
	    } else {
	      fill(255, 220, 200, 200);
	    }

	    ellipse(bubble.x, bubble.y, bubble.radius * 2);
	    bubble.x += random(-1, 1);
	    bubble.y += random(-1, 1);
	  }
	}

## Make bubbles tiny or huge

The following line will change the size of the bubbles to tiny or huge

	radius: random(50, 100)

## Make the bubbles' motions more vigorous

The following lines will make the bubbles' motions more vigorous

	bubble.x += random(-3, 3);
	bubble.y += random(-3, 3);

## Change the bubbles' colors

The following line will change the bubbles color

	fill(255, 220, 200, 200);

## Change the initial number of bubbles

The following line will change the initial number of bubbles

	for (var i = 0; i < 10; i++){}

## Any other changes that are interesting

I found the use of the JavaScript functions

	var.push()

and the

	var.splice()

interesting, because each bubble is an element in an array. 

	var bubbles = [];

As so creating visual objects can be written just like any program that doesn't have any visual outputs.

But P5.JS is centered around creating only visual outputs.

Additionally, the following

	createCanvas(800, 600);

is interesting, because it makes the program create an canvas which is essentially an artboard to be used in a visual space.

Also the following

	background(255);

Changes the background color.
