function setup() 
  {
    createCanvas(400, 400);
  }

function setup() 
  {
    createCanvas(400, 400);
  }
function setup() 
  {
    createCanvas(400, 400);
  }

function draw() 
  {
    background(0);
    noStroke();
    
    for (var x = 20; x < width; x += 20) 
      {
        for (var y = 20; y < height; y += 20)
        {
          ellipseMode(CENTER);
          fill(255);
          ellipse(x, y, 15, 15);
        }
      }
  }