let targetX = 300;
let targetY = 300;
let currentX = 0;
let currentY = 0;

let prevX = 0;
let prevY = 0;

let totalRotation = 0;

function setup() {
 
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  //  fill(0,0)
  // stroke(255);
  currentX = lerp(currentX, targetX, 0.1);
  currentY = lerp(currentY, targetY, 0.1);

  ellipse(targetX, targetY, 20, 20);



  wheel(currentX, currentY, 120);

  prevX = currentX;
  prevY = currentY;
}

function wheel(x, y, diameter) {
  //problems to solve:

  //not calculating the correct distance, we need distance travelled     over a single frame.
  
  //Solution - create new variables that store the previous values of x and y.

  //wheel not rotating correctly, because we aren't giving passing the right parameters into calcAngle
  
  // Solutions - divide (distanceTravelled/radius) to get rotations in radians.create a global variable totalRotations to accumulate rotations

  //wheel always spinning in one direction.
  //solution - if statement that checks which direction it is moving along the X axis. Can this be improved?
  

  var dist = round(calcDistance(prevX, prevY, x, y), 2);

  text('distance traveled in this frame - ' + dist, 20, 20);
  calcAngle(dist, diameter / 2);
  text('total rotations from origin - ' + totalRotation, 20, 40);

  translate(x, y);// move the wheel towards the target. we get x,y from the lerp function
  rotate(totalRotation); //rotating the wheel by applying the cumulative total rotations to a rotate transformation
  ellipse(0, 0, diameter, diameter);// try changing your wheel design and adjusting you're background/fill opacity. See what kinds of patterns you can form.
  line(0, 0, 0, diameter / 2);
}

function calcDistance(x, y, x1, y1) {
  //calculating the distance between two points with the pythagorean theorum
  return sqrt(sq(x - x1) + sq(y - y1));
}

function calcAngle(distance, radius) {
//rotations in radians = distance travelled over radius. in this function we check to see which direction we're travelling and then add or subtract distance/radius to a cumilative total. We don't return anything
  if (distance > 0) {
    if (currentX > prevX) {
      totalRotation = totalRotation + distance / radius;
    } else {
      totalRotation = totalRotation - distance / radius;
    }
  }
}

function mouseDragged() {
  
  //updating targets on mouseDragged
  targetX = mouseX;
  targetY = mouseY;
}
