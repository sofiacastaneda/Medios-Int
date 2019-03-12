var seg;
var minu;
var hora;

var seg2;
var minu2;
var hora2;

var x = 0;
var y = 0;

var expSegX = 0;
var expSegY = 0;
var expMinuX = 0;
var expMinuY = 0;
var expHoraX = 0;
var expHoraY = 0;

var f=0;
var g=0;
var h=0;
var i=0;


function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(0, 0, 0);

  seg = second();
  minu = minute();
  hora = hour();


  seg2 = map(seg, 0, 59, 0, width);
  minu2 = map(minu, 0, 59, 0, 360);
  hora2 = map(hora, 0, 23, 0, width);

  //Barra 1: segundero
  strokeWeight(4);

  noStroke();
  fill(255, 197, 18);
  rect(0, 20, width, 10);
  stroke(0);
  //line(seg2, 20, seg2, 50);


  //barra 2: minutero
  strokeWeight(6);

  noStroke();
  fill(98,152,253);
  rect(10, 0, 20, height);
  stroke(0);



  //Barra 3: indicadhora 
  strokeWeight(8);

  noStroke();
  fill(255,255,255);
  rect(0, 360, width, 30);
  stroke(0);
  //line(hora2, 100, hora2, 130);


  fill(255, 255, 255);

  //Círculo 1: segundero
  stroke(255, 197, 18);
  strokeWeight(4);
    fill(255, 197, 18);
  ellipse(seg2, seg2, 10, 10);

  //Círculo 2: minutero
  stroke(98,152,253);
  strokeWeight(6);
    fill(98,152,253);
  ellipse(minu2, minu2, 20, 20);

  //Círculo 3: hora
  stroke(255,255,255);
  strokeWeight(10);
    fill(255,255,255);
  ellipse(hora2, 320, 30, 30);

  // Línea que se alarga con círculo 1;; segundero
  stroke(255, 197, 18);
  strokeWeight(4);
  line(seg2, 20, seg2, seg2);

  // Línea que se alarga con círculo 2;; minutero
  stroke(98,152,253);
  strokeWeight(6);
  line(10, minu2, minu2, minu2);

  // Línea que sigue al círculo 3;; hora
  stroke(255,255,255);
  strokeWeight(8);
  line(hora2, 320, hora2, 390);

  //círculo que sigue al mouse
  stroke(251,41,67);
  fill(251,41,67);
  ellipse(mouseX, mouseY, 15, 15);
  line(mouseX,mouseY,mouseX,mouseY+35);
  //brazo izq
  line(mouseX,mouseY+10,mouseX-10,mouseY+25);
//brazo der
  line(mouseX,mouseY+10,mouseX+10,mouseY+25);
  //pierna izq
    line(mouseX,mouseY+35,mouseX-10,mouseY+55);
  //pierna der
    line(mouseX,mouseY+35,mouseX+10,mouseY+55);


  

  
  //generador de círculos random segundero

  if (dist(mouseX, mouseY, seg2, seg2) < 80) {
    stroke(255, 197, 18);
    strokeWeight(4);
      fill(255, 197, 18);
    ellipse(expSegX, expSegY, 10, 10);
    expSegX = random(0, width);
    expSegY = random(0, height);

    for (var f = 0; f < 10; f++) {
      ellipse(random(0, width), random(0, height), 10, 10);
    }


    //generador de círculos random minutero

    if (dist(mouseX, mouseY, minu2, minu2) < 20) {
      stroke(98,152,253);
      fill(98,152,253);
      strokeWeight(4);

      ellipse(expMinuX, expMinuY, 20, 20);
      expMinuX = random(0, width);
      expMinuY = random(0, height);

      for (var g = 0; g < 100; g++) {
        ellipse(random(0, width), random(0, height), 20, 20);
      }
    }


    //generador de círculos random indhora
    if (dist(mouseX, mouseY, hora2, hora2) < 20) {
      stroke(255,255,255);
      strokeWeight(4);
      ellipse(expHoraX, expHoraY, 10, 10);
      expHoraX = random(0, width);
      expHoraY = random(0, height);

      for (var h = 0; h < 200; h++) {
        ellipse(random(0, width), random(0, height), 30, 30);
      }

    }


    //generador random por proximidad entre segundero y minutero
    if (dist(seg2, seg2, minu2, minu2) < 10) {
      stroke(255, 255, 0);
      strokeWeight(4);
      ellipse(x, y, 10, 10);
      x = random(0, width);
      y = random(0, height);

      for (var i = 0; i < 20; i++) {
        ellipse(random(0, width), random(0, height), 10, 10);
      }


    }

  }


}
