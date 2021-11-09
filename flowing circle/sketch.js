// Try changing these values!
const tailLength = 30;
const ghostSize = 100;
const wiggliness = 40;
const floatiness = 30;

let ghostX;
let ghostY;
const tail = [];

function setup() {
  createCanvas(400, 400);
  ghostX = width / 2;
  ghostY = height / 2;
}

function draw() {

  // The cos() function gives us a value that bounces between -1 and 1.
  // We can use that to create animations!
  ghostX += cos(frameCount / 5) * wiggliness;
  ghostY -= floatiness;

  // If the ghost goes above the top of the canvas, move it back to the bottom.
  if (ghostY < -ghostSize) {
    ghostY = height + ghostSize;
  }

  // Add a point to the beginning of the array.
  tail.unshift({x: ghostX, y: ghostY});
  // If the array is too big, remove the last point.
  if (tail.length > tailLength) {
    tail.pop();
  }

  background(40,300, 200);
  noStroke();

  // Loop over the tail and draw the points.
  for (var index = 1; index < tail.length; index++) {
    const tailPoint = tail[index];

    // Tail gets smaller and more transparent.
    const pointSize = ghostSize * (tail.length - index) / tail.length;
    const pointAlpha = 300 * (tail.length - index) / tail.length;

    fill(300, pointAlpha);
    ellipse(tailPoint.x, tailPoint.y, pointSize);
  }

  // Draw the ghost's face.
  fill(50);
  ellipse(ghostX - ghostSize * .2, ghostY - ghostSize * .1, ghostSize * .2);
  ellipse(ghostX + ghostSize * .2, ghostY - ghostSize * .1, ghostSize * .2);
  ellipse(ghostX, ghostY + ghostSize * .2, ghostSize * .2);
}
