# Homework 4

1. How many lines are drawn each frame? In other words, how often does the for loop run?

	40 times

2. What do the first, second, and third appearances of the number 10 do in the code?

	The first initalized the variable.

	var x = 10;

	The second is subtracted from the width of the canvas and then used as a condition for the for function.

	x < width-10;

	The third is used to increment the variable.

	x = x + 10;

## Part 2

1. How many times does the loop body run each frame, once the x and y arrays are full?

	six

2. What are two ways of increasing the spacing between rings?

	i = i + 20

3. How can you make the ellipse trail longer?

	  x = x.slice(-70); // remove all but the last 50 x values


