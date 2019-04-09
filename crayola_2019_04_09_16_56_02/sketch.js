var datos;
var cuantos;
var top;
var bot;

//var crayones = [];
//var crayon;

//var overlapping;

//var show;


function preload() {
  datos = loadJSON("data.json");
  top = loadImage('recursos/top.jpg');
  bot = loadImage('recursos/abajo.jpg');
}

function setup() {
  createCanvas(900, 500);
  background(220);

  cuantos = datos.colors.length;
  // show = ??
  //show.mouseOver(showText);

  //for para que salgan los crayones y el texto
  for (var i = 0; i < cuantos; i = i + 1) {

    var posX = random(width);
    var posY = random(height);

    var relleno = datos.colors[i].hex;

    //cuerpo del crayón
    noStroke();
    fill(relleno);
    rect(posX, posY, 15, 60);
    triangle(posX, posY, posX + 15, posY, posX + 8, posY - 15);
    stroke(2);
    ellipse(posX + 8, posY + 30, 10, 30);
    noStroke();

    fill(0);
    rect(posX, posY, 15, 5);
    rect(posX, posY + 50, 15, 5);

    //texto
    textSize(30);
    var nombre = datos.colors[i].color;
    fill(0);
    textSize(12);
    textAlign(CENTER);
    text(nombre, posX + 10, posY + 70);
   
  }

  //INTENTO DE ALGO PARA QUE NO SE SOBREPONGAN LAS FIGURAS
  /*
  var overlapping = false;
  for (var j = 0; j < crayones.length; j++) {
    var otro = crayones[j];
    var d = dist(crayon.x, crayon.y, otro.x, otro.y);
    if (d < crayon.r + otro.r) {
      overlappin = true;
    } else
      crayones.push(crayon)
  }
}
*/


function draw() {}
  
}

//INTENTO PARA HACER UNA FUNCIÓN PARA QUE CUANDO SE PASE EL MOUSE POR ENCIMA SE LEA EL TEXTO
/*
function showText(){
textSize(30);
    var nombre = datos.colors[i].color;
    fill(0);
    textSize(12);
    textAlign(CENTER);
    text(nombre, posX + 10, posY + 70);

}
*/