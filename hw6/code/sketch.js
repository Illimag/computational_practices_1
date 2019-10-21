let circles = [];

const n = 500;

function setup() {
  createCanvas(1200, 400);
	colorMode(HSB);
  background(255);
	for (let i = 0; i < n; i++) {
		circles.push({
      x: (i/n)*width, 
      y: height/3*2,
      vx: random(-0.5, 0.5),
      vy: random(-2, 1)
    });
	}
}

const d = 30;

function draw() {
  // HSB: fully orange (hue of 30, sat & bri at 100%), 0.03 opacity 
  stroke(30, 100, 100, 0.03);
	
	for (let i = 0; i < circles.length; i++) {
    // for each circle
    let from = circles[i];
		for (let j = i+1; j < circles.length; j++) {
      let to = circles[j];
			if (dist(from.x, from.y, to.x, to.y) < d) {
				line(from.x, from.y, to.x, to.y);
			}
		}
    move(from);
	}
}

function move(circle) {
  circle.x += circle.vx;
  circle.y += circle.vy;
  
  if (circle.x < -d || circle.y < -d || circle.x > width+d || circle.y > height+d) {
    circles.splice(circles.indexOf(circle), 1);
  }
}