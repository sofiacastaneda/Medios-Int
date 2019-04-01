//ESPECIE 1 US
var posX = [];
var posY = [];
var cant1 = 1;

//ESPECIE 2 ISIS
var posX2 = [];
var posY2 = [];
var cant2 = 4;

//ESPECIE 3 UE
var posX3 = [];
var posY3 = [];
var cant3 = 6;

//ESPECIE 4 BRIT
var posX4 = [];
var posY4 = [];
var cant4 = 1;

//ESPECIE 5 CHINA
var posX5 = [];
var posY5 = [];
var cant5 = 1;


var fondo;
var fuente;


var direccion = false;


function preload() {
  fondo = loadImage('recursos/mapa.jpg');
  fuente = loadFont('recursos/AfaratibnBlady.otf');
}

function setup() {
  createCanvas(520, 400);

  //especie 1 US
  for (var i = 0; i < cant1; i = i + 1) {
    posX[i] = random(width);
    posY[i] = random(height);
  }

  //especie 2 ISIS
  for (var j = 0; j < cant2; j = j + 1) {
    posX2[j] = random(width);
    posY2[j] = random(height);
  }

  //especie 3 UE
  for (var k = 0; k < cant3; k = k + 1) {
    posX3[k] = random(width);
    posY3[k] = random(height);
  }

  //especie 4 BRIT
  for (var l = 0; l < cant4; l = l + 1) {
    posX4[l] = random(width);
    posY4[l] = random(height);
  }

  //especie 5 CHINA
  for (var m = 0; m < cant5; m = m + 1) {
    posX5[m] = random(width);
    posY5[m] = random(height);
  }

}

function draw() {
  background(220);
  image(fondo, 0, 0, width, height);

  ///////////////////////////////////////
  // ESPECIE 1 US
  for (var i = 0; i < cant1; i = i + 1) {
    fill(255, 0, 0);
    //BANDERA
    strokeWeight(0);
    //CUADRO AZUL
    fill(0, 0, 255);
    rect(posX[i], posY[i], 40, 40);
    //RAYAS ROJAS
    fill(255, 0, 0);
    rect(posX[i] + 40, posY[i], 50, 10);
    rect(posX[i] + 40, posY[i] + 20, 50, 10);
    rect(posX[i], posY[i] + 40, 90, 10);
    rect(posX[i], posY[i] + 60, 90, 10);
    //RAYAS BLANCAS
    fill(255, 255, 255);
    rect(posX[i] + 40, posY[i] + 10, 50, 10);
    rect(posX[i] + 40, posY[i] + 30, 50, 10);
    rect(posX[i], posY[i] + 50, 90, 10);
    //ESTRELLAS
    fill(255, 255, 255);
    //primera fila
    star(posX[i] + 5, posY[i] + 5, 2, 5.6, 5);
    star(posX[i] + 15, posY[i] + 5, 2, 5.6, 5);
    star(posX[i] + 25, posY[i] + 5, 2, 5.6, 5);
    star(posX[i] + 35, posY[i] + 5, 2, 5.6, 5);
    //segunda fila
    star(posX[i] + 5, posY[i] + 15, 2, 5.6, 5);
    star(posX[i] + 15, posY[i] + 15, 2, 5.6, 5);
    star(posX[i] + 25, posY[i] + 15, 2, 5.6, 5);
    star(posX[i] + 35, posY[i] + 15, 2, 5.6, 5);
    //tercera fila
    star(posX[i] + 5, posY[i] + 25, 2, 5.6, 5);
    star(posX[i] + 15, posY[i] + 25, 2, 5.6, 5);
    star(posX[i] + 25, posY[i] + 25, 2, 5.6, 5);
    star(posX[i] + 35, posY[i] + 25, 2, 5.6, 5);
    //tercera fila
    star(posX[i] + 5, posY[i] + 35, 2, 5.6, 5);
    star(posX[i] + 15, posY[i] + 35, 2, 5.6, 5);
    star(posX[i] + 25, posY[i] + 35, 2, 5.6, 5);
    star(posX[i] + 35, posY[i] + 35, 2, 5.6, 5);

    //LENTES DE SOL
    fill(0, 0, 0);
    arc(posX[i] + 25, posY[i] + 20, 30, 37, TWO_PI, PI);
    arc(posX[i] + 65, posY[i] + 20, 30, 35, TWO_PI, PI);
    strokeWeight(6);
    stroke(0);
    line(posX[i] + 40, posY[i] + 23, posX[i] + 60, posY[i] + 23);
    line(posX[i] + 40, posY[i] + 53, posX[i] + 60, posY[i] + 53);


    //MOVIMIENTO
    posX[i] = posX[i] + random(-0.5, 0.5);
    posY[i] = posY[i] + random(-0.5, 0.5);
  }

  ///////////////////////////////////////
  // ESPECIE 2 ISIS
  for (var j = 0; j < cant2; j = j + 1) {

    noStroke();
    fill(0, 0, 0);
    //CUERPO
    ellipse(posX2[j], posY2[j], 50, 50);
    fill(255, 255, 255);
    textFont(fuente);
    textAlign(CENTER, CENTER);
    textSize(20);
    text('ISIS', posX2[j], posY2[j]);

    posX2[j] = posX2[j] + random(-10, 10);
    posY2[j] = posY2[j] + random(-10, 10);
  }

  ///////////////////////////////////////
  // ESPECIE 3 UE
  for (var k = 0; k < cant3; k = k + 1) {

    noStroke();
    fill(0, 0, 255);
    //CUERPO
    ellipse(posX3[k], posY3[k], 50, 50);

    //ESTRELLAS
    fill(255, 255, 0);
    star(posX3[k] - 15, posY3[k], 2, 5.6, 5);
    star(posX3[k] + 15, posY3[k], 2, 5.6, 5);
    star(posX3[k] + 12, posY3[k] + 10, 2, 5.6, 5);
    star(posX3[k] - 12, posY3[k] + 10, 2, 5.6, 5);
    star(posX3[k] + 12, posY3[k] - 10, 2, 5.6, 5);
    star(posX3[k] - 12, posY3[k] - 10, 2, 5.6, 5);
    star(posX3[k], posY3[k] - 16, 2, 5.6, 5);
    star(posX3[k], posY3[k] + 16, 2, 5.6, 5);


    posX3[k] = posX3[k] + random(-1, 0);
    posY3[k] = posY3[k] + random(0, 1);
  }


  ///////////////////////////////////////
  // ESPECIE 4 BRIT
  for (var l = 0; l < cant4; l = l + 1) {

    noStroke();
    fill(0, 0, 255);
    //CUERPO
    ellipse(posX4[l], posY4[l], 80, 80);



    //LINEAS DE LA BANDERA
    stroke(255, 255, 255);
    strokeWeight(10);
    line(posX4[l] - 30, posY4[l] - 35, posX4[l] + 25, posY4[l] + 30);
    line(posX4[l] + 30, posY4[l] - 35, posX4[l] - 25, posY4[l] + 30);

    stroke(255, 0, 0);
    strokeWeight(5);
    line(posX4[l] - 30, posY4[l] - 35, posX4[l] + 25, posY4[l] + 30);
    line(posX4[l] + 30, posY4[l] - 35, posX4[l] - 25, posY4[l] + 30);

    stroke(255);
    strokeWeight(20);
    line(posX4[l] - 30, posY4[l], posX4[l] + 30, posY4[l]);
    line(posX4[l], posY4[l] - 35, posX4[l], posY4[l] + 30);

    stroke(255, 0, 0);
    strokeWeight(15);
    line(posX4[l], posY4[l] - 35, posX4[l], posY4[l] + 30);
    line(posX4[l] + 30, posY4[l], posX4[l] - 30, posY4[l]);


    //SOMBRERO
    noStroke();
    fill(0, 0, 0);
    ellipse(posX4[l], posY4[l] - 30, 80, 30);
    rect(posX4[l] - 20, posY4[l] - 80, 40, 60);

    //OJOS
    noStroke();

    fill(255);
    ellipse(posX4[l] - 10, posY4[l], 10, 10);
    ellipse(posX4[l] + 10, posY4[l], 10, 10);

    fill(0, 0, 0);
    ellipse(posX4[l] - 10, posY4[l], 5, 5);
    ellipse(posX4[l] + 10, posY4[l], 5, 5);

    noFill();
    strokeWeight(2);
    stroke(255, 255, 0);
    ellipse(posX4[l] - 10, posY4[l], 20, 20);


    //SONRISA
    noFill();
    stroke(0);
    strokeWeight(3);
    arc(posX4[l], posY4[l] + 20, 20, 20, TWO_PI, PI);

    posX4[l] = posX4[l] + random(0, 1);
    posY4[l] = posY4[l] + random(0, 0);
  }

  ///////////////////
  //ESPECIE 5 CHINA
  for (var m = 0; m < cant5; m = m + 1) {

    noStroke();
    fill(255, 0, 0);
    //CUERPO
    ellipse(posX5[m], posY5[m], 70, 70);

    //ESTRELLAS
    fill(255, 255, 0);
    star(posX5[m] - 15, posY5[m], 15, 5.6, 5);
    star(posX5[m] + 10, posY5[m], 7, 2.5, 5);
    star(posX5[m], posY5[m] + 17, 7, 2.5, 5);
    star(posX5[m], posY5[m] - 20, 7, 2.5, 5);

    fill(0);
    arc(posX5[m] - 15, posY5[m] - 5, 20, 25, 0.47, 3.61);
    arc(posX5[m] + 15, posY5[m] - 5, 20, 25, 5.97, 2.67);
    noFill();
    stroke(0);
    strokeWeight(3);
    arc(posX5[m], posY5[m] + 20, 20, 20, PI, TWO_PI);

    posX5[m] = posX5[m] + random(-1, 0);
    posY5[m] = posY5[m] + random(0, 1);
  }



}

//FUNCION PARA GENERAR LAS ESTRELLAS
//CÓDIGO TOMADO DE LA PAGINA DE REFERENCIA DE P5JS
//https://p5js.org/examples/form-star.html
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}