function setup() {
  // put setup code here
  createCanvas(800,600);
}

function draw() {
  // put drawing code here
  background(204);
  point(400, 300);
  line(200, 300, 100, 400);
  triangle(0, 0, 100, 0, 0, 100);
  triangle(700, 0, 800, 0, 800, 100);
  triangle(800, 500, 800, 600, 700, 600);
  triangle(0, 600, 0, 500, 100, 600);
  quad(100, 300, 400, 250, 500, 100, 600, 200);
  ellipse(400, 400, 20, 20);
  rect(400, 400, 100, 100);
  arc(700, 300, 40, 80, 0, 1.57079632679);
}