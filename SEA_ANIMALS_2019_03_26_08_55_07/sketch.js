//ESPECIE 1 CANGREJO
var posX = [];
var posY = [];

//ESPECIE 2 TIBURÓN
var posX2 = [];
var posY2 = [];

//ESPECIE 3 PULPO
var posX3 = [];
var posY3 = [];

//ESPECIE 4 BALLENA
var posX4 = [];
var posY4 = [];


//ESPECIE 5 TORTUGA
var posX5 = [];
var posY5 = [];

var cant = 5;
var cant2 = 2;
var cant3 = 3;
var cant4 = 1;
var cant5 = 3;


var fondo;

function preload () {

  fondo = loadImage('assets/coral.jpg');
 
}


function setup() {
  createCanvas(626, 485);

  //especie 1 cangrejo
  for (var i = 0; i < cant; i = i + 1) {
    posX[i] = random(width);
    posY[i] = random(height);
  }

  //especie 2 tiburón
  for (var i = 0; i < cant2; i = i + 1) {
    posX2[i] = random(width);
    posY2[i] = random(height);
  }

  //especie 3 pulpo
  for (var i = 0; i < cant3; i = i + 1) {
    posX3[i] = random(width);
    posY3[i] = random(height);
  }

  //especie 4 BALLENA
  for (var i = 0; i < cant4; i = i + 1) {
    posX4[i] = random(width);
    posY4[i] = random(height);
  }
  
  //especie 5 TORTUGA
  for (var i = 0; i < cant5; i = i + 1) {
    posX5[i] = random(width);
    posY5[i] = random(height);
  }

}

function draw() {
  background(220);
  image(fondo, 0, 0, width, height); 

  
  //ESPECIE UNO: CANGREJO

  for (var i = 0; i < cant; i = i + 1) {
    fill(255, 0, 0);
    //cuerpo del cangrejo
    strokeWeight(3);
    stroke(255, 0, 0);
    ellipse(posX[i], posY[i], 30, 20);

    //patas del cangrejo
    line(posX[i] + 10, posY[i], posX[i] + 25, posY[i] + 10);
    line(posX[i] + 5, posY[i], posX[i] + 15, posY[i] + 15);
    line(posX[i] - 10, posY[i], posX[i] - 25, posY[i] + 13);
    line(posX[i], posY[i], posX[i] - 15, posY[i] + 15);
    //pinzas
    ellipse(posX[i] - 20, posY[i] - 15, 5, 10);
    ellipse(posX[i] + 20, posY[i] - 15, 5, 10);
    strokeWeight(4);
    line(posX[i] - 20, posY[i] - 15, posX[i], posY[i] + 10);
    line(posX[i] + 20, posY[i] - 15, posX[i], posY[i] + 10);
    //ojos
    fill(0, 0, 0);
    stroke(0);
    ellipse(posX[i] - 10, posY[i], 3, 3);
    ellipse(posX[i] + 10, posY[i], 3, 3);

    posX[i] = posX[i] + random(-20, 20);
    posY[i] = posY[i] + random(0, 0);
  }

  //ESPECIE DOS : TIBURON

  for (var i = 0; i < cant2; i = i + 1) {

    noStroke();
    fill(40, 20, 200);
    //CUERPO
    ellipse(posX2[i], posY2[i], 90, 40);
    //ALETAS
    triangle(posX2[i] + 15, posY2[i], posX2[i] + 55, posY2[i] + 40, posX2[i] + 50, posY2[i] - 10);
    triangle(posX2[i] + 25, posY2[i], posX2[i] + 55, posY2[i] - 40, posX2[i] + 50, posY2[i] - 10);
    triangle(posX2[i] - 30, posY2[i], posX2[i] - 15, posY2[i] + 40, posX2[i] - 5, posY2[i] + 10);
    triangle(posX2[i] - 20, posY2[i], posX2[i] - 5, posY2[i] + 40, posX2[i] + 5, posY2[i] + 10);
    triangle(posX2[i], posY2[i], posX2[i] + 10, posY2[i] - 40, posX2[i] + 20, posY2[i] - 10);
    noStroke();
    fill(255);
    //OJOS
    ellipse(posX2[i] - 20, posY2[i], 5, 5);
    ellipse(posX2[i] - 30, posY2[i], 5, 5);
    stroke(255);
    strokeWeight(2);
    //BRANQUIAS
    line(posX2[i] + 9, posY2[i], posX2[i] + 15, posY2[i] + 6);
    line(posX2[i], posY2[i], posX2[i] + 6, posY2[i] + 6);

    posX2[i] = posX2[i] + random(0, 0);
    posY2[i] = posY2[i] + random(0, 8);
  }

  //ESPECIE 3 pulpo
  for (var i = 0; i < cant3; i = i + 1) {
    fill(255, 208, 216);
    noStroke();
    //CUERPO Y TENTÁCULOS
    ellipse(posX3[i], posY3[i], 25, 40);
    ellipse(posX3[i], posY3[i] + 20, 25, 25);
    ellipse(posX3[i], posY3[i] + 30, 5, 30);
    ellipse(posX3[i] - 10, posY3[i] + 30, 5, 30);
    ellipse(posX3[i] + 10, posY3[i] + 30, 5, 30);

    noStroke();
    fill(0);
    //OJOS
    ellipse(posX3[i] - 5, posY3[i], 5, 5);
    ellipse(posX3[i] + 5, posY3[i], 5, 5);

    posX3[i] = posX3[i] + random(1, 0);
    posY3[i] = posY3[i] + random(0, 1);
  }



  //ESPECIE 4 BALLENA
  for (var i = 0; i < cant4; i = i + 1) {
    ellipse(posX4[i], posY4[i], 200, 90);
    ellipse(posX4[i]-100, posY4[i]+20, 25, 45);
        ellipse(posX4[i]+100, posY4[i]+20, 25, 45);
    triangle(posX4[i]-50, posY4[i],posX4[i]+5, posY4[i]-70,posX4[i]+50, posY4[i]);
    fill(255);
        ellipse(posX4[i]-30, posY4[i], 15, 15);
            ellipse(posX4[i]+30, posY4[i], 15, 15);
    

    posX4[i] = posX4[i] + random(0, 0);
    posY4[i] = posY4[i] + random(-1, 0);
  }

  //ESPECIE 5: TORTUGA
  for (var i = 0; i < cant5; i = i + 1) {
	  
    	  fill(60,179,113);  
        //cabeza
    ellipse(posX5[i], posY5[i]-30, 30, 30);
    //paticas de arriba
        		ellipse(posX5[i]-30, posY5[i]-15, 25, 13);
        		ellipse(posX5[i]+30, posY5[i]-15, 25, 13);
    //paticas de abajo
    ellipse(posX5[i]-20, posY5[i]+20, 25, 13);
        		ellipse(posX5[i]+20, posY5[i]+20, 25, 13);

    fill(11,85,9);  
    //caparazon
    ellipse(posX5[i], posY5[i], 50, 50);
    
    fill(0);  
    //ojos
    ellipse(posX5[i]-5, posY5[i]-35, 5, 5);
        ellipse(posX5[i]+5, posY5[i]-35, 5, 5);

		
		posX5[i] = posX5[i] + random(0);
		posY5[i] = posY5[i] + random(-2,0);
	}

}