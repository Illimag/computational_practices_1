function setup() 
  {
    createCanvas(400, 400);
  }

function draw() 
  {
    background(220);
    
    for (var i = 1; i <= width; i = i + 10)
    {
      
      line(abs(width/2 - i), i, width - abs(width/2 - i), i);
    }
    
  }  