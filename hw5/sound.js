// https://editor.p5js.org/jaemnkm/sketches/Zd9L6Q5Ae

// Make the lawnmower come when the grass reaches a pre-determined height.

var mySound;

function preload() {
  soundFormats("wav");
  mySound = loadSound("wow.wav");
}

function setup() {
    createCanvas(400, 200);
    colorMode(HSB);
  }
  
  var x = 0;
  var h = 10;
  
  function draw() {
      if (mouseIsPressed) {
    mySound.play();
  }
    
    stroke(random(60, 70), 100, 90);
    line(x, height-10, x+random(-10, 10), height-10-random(h));
    noStroke();
  
    x = x + 10;
  
    if (x > width) {
      x = random(10);
      h = h + 3;
    }
  
    if (h>10) {
      fill(255);
      rect(0, 0, width, height-5);
      h = 10;
    }
  
    fill(40, 100, 60);
    rect(0, height-10, width, 10);
  }