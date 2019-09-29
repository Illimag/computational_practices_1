# Lawn Simulator

Here is the code:

    function setup() {
    createCanvas(400, 200);
    colorMode(HSB);
    }

    var x = 0;
    var h = 10;

    function draw() {
    stroke(random(60, 70), 100, 90);
    line(x, height-10, x+random(-10, 10), height-10-random(h));
    noStroke();

    x = x + 10;

    if (x > width) {
        x = random(10);
        h = h + 3;
    }

    if (random(100) > 99.9) {
        fill(255);
        rect(0, 0, width, height-15);
        h = 10;
    }

    fill(40, 100, 60);
    rect(0, height-10, width, 10);
    }

## Questions

1. What code draws the blades of grass?

    stroke(random(60, 70), 100, 90);
    line(x, height-10, x+random(-10, 10), height-10-random(h));
    noStroke();

2. What code makes the "lawnmower" come by? How often does it come by?

    if (random(100) > 99.9) {
        fill(255);
        rect(0, 0, width, height-5);
        h = 10;

3. What's the point of the h variable?

The height of the grass.

4. What does the -10 do in the second and fourth arguments of the line function, height-10-random(h) ? Why is it there?

Changes the height of the grass.