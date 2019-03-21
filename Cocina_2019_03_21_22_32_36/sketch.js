//Variables de Imagen//
var fondo;
//Imagen de mick jagger
var mick;
// imagen de beethoven
var ludwig;

//variables de movimiento con teclas beethoven
var x;
var y;
var z;

//Imagen horno
var horno;
//variables para paneo
var hornear;
//ubicación en x y y de la imagen para paneo
var c=130;
var d=25;

//rate
var batidora;
//ubicación en x y y de la imagen para rate
var e=270;
var f=20;

//jump
var cuchillo;
//ubicación en x y y de la imagen para jump
var g=440;
var h=70;

//Canción rolling stones
var cancionj;
var vol1;
//Canción beethoven
var cancionb;
var vol2;

var actual;



function preload () {

  fondo = loadImage('assets/cocina.png');
  mick = loadImage('assets/Jagger.png');
 ludwig = loadImage('assets/ludwig.png');

  horno = loadImage('assets/horno.png');
  batidora = loadImage('assets/batidora.png');
  cuchillo = loadImage('assets/cuchillo.png');

  cancionb = loadSound('assets/clasica.mp3');
  cancionj = loadSound('assets/rock.mp3');
}

function setup() {
  createCanvas(600, 400);
  background(100);
  
  //POSICIÓN DE INICIO BEETHOVEN
  x = 150;
  y = 250;
  
  
  //REPRODUCCIÓN DE LAS CANCIONES
  cancionj.loop();
 cancionb.loop();
}

function draw() {
  
  //MAPEO DEL VOLUMEN - ABAJO MENOS ARRIBA MÁS
  vol1 = map(mouseY, height, 0, 0.0, 1.1);
  vol2 = map(y, height, 0, 0.0, 1.1);
  
  //AJUSTE DEL VOLUMEN
  cancionj.setVolume(vol1);
  cancionb.setVolume(vol2);
  

  //PANEO PARA LA SECCIÓN QUE CUBRE LA IMAGEN DEL HORNO
  
  //PARA JAGGER
  hornear = map(mouseX, 100, 170, -1.0, 1.0);
  cancionj.pan(hornear);

  
//PARA BEETHOVEN
  hornear = map(x, 100, 170, -1.0, 1.0);
  cancionb.pan(hornear);

  //MOVER LA IMAGEN DE JAGGER
  image(fondo, 0, 0, width, height); 
  image(mick, mouseX, mouseY, 100, 100); 
  image(ludwig, x, y, 100, 100); 


  //MOVER A BEETHOVEN
  image(horno, c, d, 100, 70); 
  image(batidora, e, f, 100, 110); 
  image(cuchillo, g, h, 140, 50);


  //PARA QUE CUANDO SE ACERQUE A LA BATIDORA AUMENTE EL RATE
  //RATE PERSONAJE JAGGER
  if (dist(mouseX, mouseY, e, f) < 50) {
  cancionj.rate(2);
  }
  if(dist(mouseX, mouseY, e, f) > 50) {
  cancionj.rate(1);
  }

  ////RATE PERSONAJE BEETHOVEN
  if (dist(x, y, e, f) < 70) {
  cancionb.rate(2);
  }
  if(dist(x, y, e, f) > 70) {
  cancionb.rate(1);
  }


  //PARA QUE CUANDO SE ACERQUE AL CUCHILLO SALTE
  
  //JUMP PERSONAJE JAGGER
  if (dist(mouseX, mouseY, g, h) < 80) {
  cancionj.jump(actual + 10);
  }

  ////JUMP PERSONAJE BEETHOVEN
  if (dist(x, y, g, h) < 80) {
  cancionb.jump(actual + 10);
  }


//VARIABLE DE ACTUAL
  actual = cancionb.currentTime();
  actual = cancionj.currentTime();
}

//CONTROLES TECLAS BEETHOVEN
function keyPressed() {
  if (keyIsPressed === true) {
   if (keyCode == RIGHT_ARROW) {
      x = x + 15;
    }
    if (keyCode == LEFT_ARROW) {
      x = x-15;
    }
    if (keyCode == DOWN_ARROW) {
      y = y+15;
    }
    if (keyCode == UP_ARROW) {
    y = y-15;
    }
  }
}