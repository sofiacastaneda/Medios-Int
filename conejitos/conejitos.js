var x = 100;
var y = 100;
var x1 = 250;
var y1 = 100;
var direccion = false;
var direccionf = 0;
var direccionb = 4;


var xE = 180;
var yE = 250;

var puntajeA = 0;
var puntajeB = 0;



function setup() {
  createCanvas(400, 400);
  //xE = random (0, width);
  //yE = random (0, height);
}


function draw() {
  background(92, 172, 45);

  //Si va ganando el conejo azul
  if (puntajeA > puntajeB) {
    background(puntajeA, 0, puntajeA);

    //Si va ganando el conejo rosado
  } else if (puntajeB > puntajeA) {
    background(0, 0, puntajeB);
  }


  noStroke();

  //conejito rosado
  fill(255, 205, 218);
  rect(x, y, 40, 40);
  rect(x, y - 35, 15, 35);
  rect(x + 25, y - 35, 15, 35);
  fill(0, 0, 0);
  rect(x + 8, y + 10, 10, 10);
  rect(x + 22, y + 10, 10, 10);
  rect(x + 6, y + 25, 28, 5);
  rect(x + 8, y + 30, 23, 5);
  fill(255, 255, 255);
  rect(x + 5, y - 30, 5, 30);
  rect(x + 30, y - 30, 5, 30);


  //conejito azul
  fill(149, 208, 252);
  rect(x1, y1, 40, 40);
  rect(x1, y1 - 35, 15, 35);
  rect(x1 + 25, y1 - 35, 15, 35);
  fill(0, 0, 0);
  rect(x1 + 8, y1 + 10, 10, 10);
  rect(x1 + 22, y1 + 10, 10, 10);
  rect(x1 + 6, y1 + 25, 28, 5);
  rect(x1 + 8, y1 + 30, 23, 5);
  fill(255, 255, 255);
  rect(x1 + 5, y1 - 30, 5, 30);
  rect(x1 + 30, y1 - 30, 5, 30);

  //zanahoria
  fill(255, 104, 31);
  beginShape();
  vertex(xE, yE);
  vertex(xE + 40, yE);
  vertex(xE + 20, yE + 65);
  endShape();
  fill(36, 106, 20);
  ellipse(xE + 20, yE - 10, 15, 25);
  ellipse(xE + 10, yE - 10, 15, 20);
  ellipse(xE + 30, yE - 10, 15, 20);


  print(dist(x, y, xE, yE));
  if (dist(x, y, xE, yE) < 20) {
    xE = random(0, width);
    yE = random(0, height);
    puntajeA = puntajeA + 30;
  }

  print(dist(x1, y1, xE, yE));
  if (dist(x1, y1, xE, yE) < 20) {
    xE = random(0, width);
    yE = random(0, height);
    puntajeB = puntajeB + 30;
  }


  if (dist(x, y, x1, y1) < 20) {
    x = 100;
    y = 100;
    x1 = 250;
    y1 = 100;
    puntajeA = 0;
    puntajeB = 0;
  }

direccion = 0;

  if (direccionf==0) {
    x = x+5
  } else if (direccionf==1) {
    x = x - 5;
  }  else if (direccionf==2) {
    y = y + 5;
  } else if (direccionf==3) {
    y = y - 5;
  } 
  

  if (direccionb==4) {
    x1 = x1+5
  } else if (direccionb==5) {
    x1 = x1 - 5;
  }  else if (direccionb==6) {
    y1 = y1 + 5;
  } else if (direccionb==7) {
    y1 = y1 - 5;
  } 
  
  
if (keyCode == RIGHT_ARROW) {
    direccionf = 0;
  }
  
  if (keyCode == LEFT_ARROW) {
    direccionf = 1;
  }
  
 if (keyCode == DOWN_ARROW) {
    direccionf = 2;
  }
  
  if (keyCode == UP_ARROW) {
    direccionf = 3;
  }
 /////////////
 if (key == 'd') {
    direccionb = 4;
  }

  if (key == 'a') {
    direccionb = 5;
  }
if (key == 's') {
    direccionb = 6;
}
    
  if (key == 'w') {
    direccionb = 7;
  }


  if (x > width) {
    direccion = true;
    x = 0
  }
  if (x < 0) {
    direccion = false;
    x = 400
  }
  if (y > height) {
    direccion = true;
    y = 0
  }
  if (y < 0) {
    direccion = false;
    y = 400
  }
  if (x1 > width) {
    direccion = true;
    x1 = 0
  }
  if (x1 < 0) {
    direccion = false;
    x1 = 400
  }
  if (y1 > height) {
    direccion = true;
    y1 = 0
  }
  if (y1 < 0) {
    direccion = false;
    y1 = 400
  }
}
