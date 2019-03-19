//Variables de Imagen
var fondo;
//Imagen de mick jagger
var mick;
// imagen de beethoven
var ludwig;

//variables de movimiento con teclas beethoven
var x;
var y;
var z;


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
  mick = loadImage('assets/jagger.png');
  ludwig = loadImage('assets/ludwig.png');

  hornear = loadImage('assets/horno.png');
  batidora = loadImage('assets/batidora.png');
  cuchillo = loadImage('assets/cuchillo.png');

  //cancionb = loadSound('assets/clasica.mp3');
  //cancionj = loadSound('assets/rock.mp3');
}

function setup() {
  createCanvas(600, 400);
  background(100);
  
  //POSICIÓN DE INICIO BEETHOVEN
  x = 150;
  y = 250;
  
  
  //REPRODUCCIÓN DE LAS CANCIONES
  //cancionj.play();
  //cancionb.play();
}

function draw() {
  
  //MAPEO DEL VOLUMEN - ABAJO MENOS ARRIBA MÁS
  //vol1 = map(mouseY, 0, height, 0.0, 1.1);
  //vol2 = map(y, 0, height, 0.0, 1.1);
  
  //AJUSTE DEL VOLUMEN
  //cancionj.setVolume(vol1);
  //cancionb.setVolume(vol2);
  

  //PANEO PARA LA SECCIÓN QUE CUBRE LA IMAGEN DEL HORNO
  
  //PARA JAGGER
  //hornear = map(mouseX, 100, 170, -1.0, 1.0);
  //cancionj.pan(hornear);
  
//PARA BEETHOVEN
  //hornear = map(x, 100, 170, -1.0, 1.0);
  //cancionb.pan(hornear);

  //MOVER LA IMAGEN DE JAGGER
  image(fondo, 0, 0, width, height); 
  image(mick, mouseX, mouseY, 100, 100); 
  image(ludwig, x, y, 100, 100); 


  //MOVER A BEETHOVEN
  image(hornear, c, d, 100, 70); 
  image(batidora, e, f, 100, 110); 
  image(cuchillo, g, h, 140, 50);

  //ignorar esto
  // if (dist(MouseX, MouseY, c, d) < 20) {
  // }
  //ignorar esto


  //PARA QUE CUANDO SE ACERQUE A LA BATIDORA AUMENTE EL RATE
  //RATE PERSONAJE JAGGER
  //if (dist(MouseX, MouseY, e, f) < 20) {
  //  cancionj.rate(1+z);
  //  z = 0.5
  //}

  ////RATE PERSONAJE BEETHOVEN
  //if (dist(x, y, e, f) < 20) {
  //  cancionb.rate(1+(x/200));
  //  x = 0.5
  //}


  //PARA QUE CUANDO SE ACERQUE AL CUCHILLO SALTE
  
  //JUMP PERSONAJE JAGGER
  //if (dist(MouseX, MouseY, g, h) < 20) {
  //  cancionj.jump(actual + 1);
  //}

  ////JUMP PERSONAJE BEETHOVEN
  //if (dist(X, Y, g, h) < 20) {
  //  cancionB.jump(actual + 1);
  //}


//VARIABLE DE ACTUAL
  //actual = cancionb.currentTime();
  //actual = cancionj.currentTime();
}

//CONTROLES TECLAS BEETHOVEN
function keyPressed() {
  if (keyIsPressed == true) {
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
