
var fondo;
var mick;
var ludwig;

var x = 150;
var y = 250;

//paneo
var hornear;
var c=130;
var d=25;
//rate
var batidora;
var e=270;
var f=20;
//jump
var cuchillo;
var g=440;
var h=70;

var cancionj;
var vol1;
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

  cancionj = loadSound('assets/clasica.mp3');
  cancionb = loadSound('assets/rock.mp3');
  
}

function setup() {
  createCanvas(600, 400);
  background(100);
 
  //actual = cancionb.currentTime();
        //actual = cancionj.currentTime();


//AJUSTAR EL VOLUMEN 0 ABAJO Y ALTO ARRIBA

  //vol1 = map(mouseY, height, 0, 0.0, 1.1);
  //cancionj.setVolume(vol1);
//cancionj.play();
  
  //vol2 = map(y, height, 0, 0.0, 1.1);
  //cancionb.setVolume(vol2);
//cancionb.play();

  
}

function draw() {

//PANEO PARA LA SECCIÓN QUE CUBRE LA IMAGEN DEL HORNO
//hornear= map(mouseX, 100, 170, -1.0,1.0);
//cancionj.pan(hornear);

//hornear= map(x, 100, 170, -1.0,1.0);
//cancionb.pan(hornear);

//JAGGER
  noTint();
  image(fondo, 0, 0, width, height); 
  image(mick, mouseX, mouseY, 100, 100); 
  image(ludwig, x, y, 100, 100); 


//BEETHOVEN
  image(hornear, c, d, 100, 70); 
  image(batidora, e, f, 100, 110); 
  image(cuchillo, g, h, 140, 50);
  
  //ignorar esto
 // if (dist(MouseX, MouseY, c, d) < 20) {
 // }
   //ignorar esto




//PARA QUE CUANDO SE ACERQUE A LA BATIDORA AUMENTE EL RATE
  
  //PERSONAJE JAGGER
  // if (dist(MouseX, MouseY, e, f) < 20) {
 // cancionj.rate(1+x);
 //x = 0.5
 // }
 
   //PERSONAJE BEETHOVEN
  // if (dist(x, y, e, f) < 20) {
 // cancionb.rate(1+x);
 //x = 0.5
 // }
 
 
 
 
 //PARA QUE CUANDO SE ACERQUE AL CUCHILLO SALTE

  //PERSONAJE JAGGER
  // if (dist(MouseX, MouseY, g, h) < 20) {
 // cancionj.jump(actual + 1);
 // }
 
    //PERSONAJE BEETHOVEN
 // if (dist(X, Y, g, h) < 20) {
 // cancionB.jump(actual + 1);
 // }
  
}

//CONTROLES BEETHOVEN
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
if (keyIsPressed == true) {
    if (key== 'd') {
      x1 = x1 + 15;
    }
    
}

}
