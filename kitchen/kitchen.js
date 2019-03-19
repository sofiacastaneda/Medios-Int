
var fondo;
var mick;
var ludwig;

var x = 150;
var y = 250;

//paneo
var hornear;
//rate
var batidora;
//jump
var cuchillo;

var cancionj;
var cancionb;


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
  
 //cancionj.setVolume(0.1);
 //cancionj.play();
  
 //cancionb.setVolume(0.1);
 //cancionb.play();
  
}

function draw() {

  noTint();
  image(fondo, 0, 0, width, height); 
  image(mick, mouseX, mouseY, 100, 100); 
  image(ludwig, x, y, 100, 100); 


  image(hornear, 130, 25, 100, 70); 
  image(batidora, 270, 20, 100, 110); 
  image(cuchillo, 440, 70, 140, 50);
}

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


//if (dist(x, y, x1, y1) < 20) {
//    x = 100;
//    y = 100;
//    x1 = 250;
//    y1 = 100;
//    puntajeA = 0;
//    puntajeB = 0;
//  }
