var x = 0;
var forward = true;
let step = 3;

function setup() {
  // put setup code here
  createCanvas(720,480);
  strokeWeight(2);
  ellipseMode(RADIUS);
  frameRate(30);
}

function draw() {
  // put drawing code here
  background(204);
   // Neck
  stroke(102); // Set stroke to gray
  line(266+x, 257, 266+x, 162); // Left
  line(276+x, 257, 276+x, 162); // Middle
  line(286+x, 257, 286+x, 162); // Right
  // Antennae
  line(276+x, 155, 246+x, 112); // Small
  line(276+x, 155, 306+x, 56); // Tall
  line(276+x, 155, 342+x, 170); // Medium
  // Body
  noStroke(); // Disable stroke
  fill(102); // Set fill to gray
  ellipse(264+x, 377, 33, 33); // Antigravity orb
  fill(0); // Set fill to black
  rect(219+x, 257, 90, 120); // Main body
  fill(102); // Set fill to gray
  rect(219+x, 274, 90, 6); // Gray stripe
  // Head
  fill(0); // Set fill to black
  ellipse(276+x, 155, 45, 45); // Head
  fill(x+100, x-150, x+100); // Set fill to white
  ellipse(288+x, 150, 14, 14); // Large eye
  fill(0); // Set fill to black
  ellipse(288+x, 150, 3, 3); // Pupil
  fill(153); // Set fill to light gray
  ellipse(263+x, 148, 5, 5); // Small eye 1
  ellipse(296+x, 130, 4, 4); // Small eye 2
  ellipse(305+x, 162, 3, 3); // Small eye 3

  if (forward) {
    x = x + step;
  } else {
    x = x - step;
  }

  if (x > 350) {
    forward = false;
  }

  if (x < -20) {
    forward = true;
  }
}