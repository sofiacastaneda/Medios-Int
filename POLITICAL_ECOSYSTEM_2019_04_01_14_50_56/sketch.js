var estaVivo = true;


//VARIABLES ESPECIE 1 EEUU
var gringo;
var Marines = [];
var numMarines = 5;

//VARIABLES ESPECIE 2 ISIS
var mohamed;
var ejercitoIsis = [];
var numEjercitoIsis = 10;

//VARIABLES ESPECIE 3 UE
var ciudadano;
var unionEuropea = [];
var numUnionEuropea = 3;

//VARIABLES ESPECIE 4 BRIT
var john;
var britanicos = [];
var numBritanicos = 1;

//VARIABLES ESPECIE 5 CHINA
var ping;
var chinos = [];
var numChinos = 3;


////////////////////////////////////////////////
// PRELOAD
function preload() {
  fondo = loadImage('recursos/mapa.jpg');
  fuente = loadFont('recursos/AfaratibnBlady.otf');
}
////////////////////////////////////////////////


function setup() {
  createCanvas(550, 400);

  //EEUU
  gringo = new us(random(width), random(height));

  for (var i = 0; i < numMarines; i = i + 1) {
    Marines[i] = new us(random(width), random(height));
  }


  //ISIS
  mohamed = new isis(random(width), random(height));

  for (var j = 0; j < numEjercitoIsis; j = j + 1) {
    ejercitoIsis[j] = new isis(random(width), random(height));
  }


  //UE
  ciudadano = new ue(random(width), random(height));

  for (var l = 0; l < numUnionEuropea; l = l + 1) {
    unionEuropea[l] = new ue(random(width), random(height));
  }
  
  //REINO UNIDO
  john = new brit(random(width), random(height));

  for (var n = 0; n < numBritanicos; n = n + 1) {
    britanicos[n] = new brit(random(width), random(height));
  }
  
  //CHINA
  ping = new china(random(width), random(height));

  for (var r = 0; r < numChinos; r = r + 1) {
    chinos[r] = new china(random(width), random(height));
  }
  


}

function draw() {
  background(220);
  image(fondo, 0, 0, width, height);

  //////////////////
  //ESPECIE 1 EEUU
  gringo.dibujarse();
  gringo.moverse();

  for (var i = 0; i < numMarines; i = i + 1) {
    Marines[i].dibujarse();
    Marines[i].moverse();

    //ISIS MUERE SI SE ACERCA A EEUU
    for (var k = 0; k < ejercitoIsis.length; k = k + 1) {
      if (dist(Marines[i].x, Marines[i].y, ejercitoIsis[k].x, ejercitoIsis[k].y) < 10) {
        ejercitoIsis[k].morirse();
      }
    }
  }

  
  
//////////////////
  //ESPECIE 2 ISIS
  mohamed.dibujarse();
  mohamed.moverse();

  for (var j = 0; j < numEjercitoIsis; j = j + 1) {
    ejercitoIsis[j].dibujarse();
    ejercitoIsis[j].moverse();

    //ISIS MATA A LA UE 
    for (var m = 0; m < unionEuropea.length; m = m + 1) {
      if (dist(ejercitoIsis[j].x, ejercitoIsis[j].y, unionEuropea[m].x, unionEuropea[m].y) < 10) {
        unionEuropea[m].morirse();
      }
    }
    
    //ISIS MATA A CHINA 
    for (var t = 0; t < chinos.length; t = t + 1) {
      if (dist(ejercitoIsis[j].x, ejercitoIsis[j].y, chinos[t].x, chinos[t].y) < 10) {
        chinos[t].morirse();
      }
    }
    
  }
  
  
  
  //////////////////
 //ESPECIE 3 UE
ciudadano.dibujarse();
ciudadano.moverse();

for (var l = 0; l < numUnionEuropea; l = l + 1) {
  unionEuropea[l].dibujarse();
  unionEuropea[l].moverse();

  //UE ALEJA A REINO UNIDO
  /*
  for (var o = 0; o < britanicos.length; o = o + 1) {
      if (dist(unionEuropea[l].x, unionEuropea[l].y, britanicos[o].x, britanicos[o].y) < 10) {
        britanicos[o].alejarse();
      }
    }
  */
} 
  
  
  
  
  //////////////////
 //ESPECIE 4 REINO UNIDO 
  john.dibujarse();
john.moverse();
  
  for (var n = 0; n < numBritanicos; n = n + 1) {
  britanicos[n].dibujarse();
  britanicos[n].moverse();

  //ISIS MUERE SI SE ACERCA A REINO UNIDO
    for (var o = 0; o < ejercitoIsis.length; o = o + 1) {
      if (dist(britanicos[n].x, britanicos[n].y, ejercitoIsis[o].x, ejercitoIsis[o].y) < 10) {
        ejercitoIsis[o].morirse();
      }
    } 
} 
  
  
  //////////////////
 //ESPECIE 5 CHINA
  ping.dibujarse();
ping.moverse();
  
  for (var r = 0; r < numChinos; r = r + 1) {
  chinos[r].dibujarse();
  chinos[r].moverse();

  //EEUU MUERE SI SE ACERCA A CHINA
    for (var s = 0; s < Marines.length; s = s + 1) {
      if (dist(chinos[r].x, chinos[r].y, Marines[s].x, Marines[s].y) < 30) {
        Marines[s].morirse();
      }
    } 
}
  
//cierre del draw
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


///////////////////////////////////////////////
//FUNCION 1
//ESPECIE 1 US

function us(miX, miY) {

  //Caracteristicas
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;
    this.dirX = 1;

  //Habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {

      fill(255, 0, 0);
      //BANDERA
      strokeWeight(0);
      //CUADRO AZUL
      fill(0, 0, 255);
      rect(this.x, this.y, 40, 40);
      //RAYAS ROJAS
      fill(255, 0, 0);
      rect(this.x + 40, this.y, 50, 10);
      rect(this.x + 40, this.y + 20, 50, 10);
      rect(this.x, this.y + 40, 90, 10);
      rect(this.x, this.y + 60, 90, 10);
      //RAYAS BLANCAS
      fill(255, 255, 255);
      rect(this.x + 40, this.y + 10, 50, 10);
      rect(this.x + 40, this.y + 30, 50, 10);
      rect(this.x, this.y + 50, 90, 10);
      //ESTRELLAS
      fill(255, 255, 255);
      //primera fila
      star(this.x + 5, this.y + 5, 2, 5.6, 5);
      star(this.x + 15, this.y + 5, 2, 5.6, 5);
      star(this.x + 25, this.y + 5, 2, 5.6, 5);
      star(this.x + 35, this.y + 5, 2, 5.6, 5);
      //segunda fila
      star(this.x + 5, this.y + 15, 2, 5.6, 5);
      star(this.x + 15, this.y + 15, 2, 5.6, 5);
      star(this.x + 25, this.y + 15, 2, 5.6, 5);
      star(this.x + 35, this.y + 15, 2, 5.6, 5);
      //tercera fila
      star(this.x + 5, this.y + 25, 2, 5.6, 5);
      star(this.x + 15, this.y + 25, 2, 5.6, 5);
      star(this.x + 25, this.y + 25, 2, 5.6, 5);
      star(this.x + 35, this.y + 25, 2, 5.6, 5);
      //tercera fila
      star(this.x + 5, this.y + 35, 2, 5.6, 5);
      star(this.x + 15, this.y + 35, 2, 5.6, 5);
      star(this.x + 25, this.y + 35, 2, 5.6, 5);
      star(this.x + 35, this.y + 35, 2, 5.6, 5);

      //LENTES DE SOL
      fill(0, 0, 0);
      arc(this.x + 25, this.y + 20, 30, 37, TWO_PI, PI);
      arc(this.x + 65, this.y + 20, 30, 35, TWO_PI, PI);
      strokeWeight(6);
      stroke(0);
      line(this.x + 40, this.y + 23, this.x + 60, this.y + 23);
      line(this.x + 40, this.y + 53, this.x + 60, this.y + 53);


    }
  }

  this.moverse = function() {
    
    if (this.x >= width || this.x <= 0)
    {
      this.dirX = -1 * this.dirX;
    }
     this.x = this.x + (2 * this.dirX);
  
    
    this.x = this.x + random(-0.5, 0);
    this.y = this.y + random(-0.5, 0);
  }

  this.morirse = function() {
    this.estaVivo = false;
  }


}

///////////////////////////////////////////////
//FUNCION 2
//ESPECIE 2 ISIS

function isis(miX, miY) {

  //Caracteristicas
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;
  //Habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {

      noStroke();
      fill(0, 0, 0);
      //CUERPO
      ellipse(this.x, this.y, 50, 50);
      fill(255, 255, 255);
      textFont(fuente);
      textAlign(CENTER, CENTER);
      textSize(20);
      text('ISIS', this.x, this.y);
    }
  }

  this.moverse = function() {
    this.x = this.x + random(-20, 20);
    this.y = this.y + random(-20, 20);
  }

  this.morirse = function() {
    this.estaVivo = false;
  }


}


///////////////////////////////////////////////
//FUNCION 3
//ESPECIE 3 UE

function ue(miX, miY) {

  //Caracteristicas
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;
  //Habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {

      noStroke();
      fill(0, 0, 255);
      //CUERPO
      ellipse(this.x, this.y, 50, 50);

      //ESTRELLAS
      fill(255, 255, 0);
      star(this.x - 15, this.y, 2, 5.6, 5);
      star(this.x + 15, this.y, 2, 5.6, 5);
      star(this.x + 12, this.y + 10, 2, 5.6, 5);
      star(this.x - 12, this.y + 10, 2, 5.6, 5);
      star(this.x + 12, this.y - 10, 2, 5.6, 5);
      star(this.x - 12, this.y - 10, 2, 5.6, 5);
      star(this.x, this.y - 16, 2, 5.6, 5);
      star(this.x, this.y + 16, 2, 5.6, 5);


    }
  }

  this.moverse = function() {
    this.x = this.x + random(-1, 0.5);
    this.y = this.y + random(0, 1);
  }

  this.morirse = function() {
    this.estaVivo = false;
  }

  this.alejarse = function() {
    this.estaVivo = true;
    miX = 100
    miY = 100
  }

}



///////////////////////////////////////////////
//FUNCION 4
//ESPECIE 4 REINO UNIDO 

function brit(miX,miY){

  //Caracteristicas
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;
      this.dirX= 1;


  //Habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      
     noStroke();
    fill(0, 0, 255);
    //CUERPO
    ellipse(this.x, this.y, 80, 80);



    //LINEAS DE LA BANDERA
    stroke(255, 255, 255);
    strokeWeight(10);
    line(this.x - 30, this.y - 35, this.x + 25, this.y + 30);
    line(this.x + 30, this.y - 35, this.x - 25, this.y + 30);

    stroke(255, 0, 0);
    strokeWeight(5);
    line(this.x - 30, this.y - 35, this.x + 25, this.y + 30);
    line(this.x + 30, this.y - 35, this.x - 25, this.y + 30);

    stroke(255);
    strokeWeight(20);
    line(this.x - 30, this.y, this.x + 30, this.y);
    line(this.x, this.y - 35, this.x, this.y + 30);

    stroke(255, 0, 0);
    strokeWeight(15);
    line(this.x, this.y - 35, this.x, this.y + 30);
    line(this.x + 30, this.y, this.x - 30, this.y);


    //SOMBRERO
    noStroke();
    fill(0, 0, 0);
    ellipse(this.x, this.y - 30, 80, 30);
    rect(this.x - 20, this.y - 80, 40, 60);

    //OJOS
    noStroke();
    
    fill(255);
    ellipse(this.x - 10, this.y, 10, 10);
    ellipse(this.x + 10, this.y, 10, 10);
    
    fill(0, 0, 0);
    ellipse(this.x - 10, this.y, 5, 5);
    ellipse(this.x + 10, this.y, 5, 5);
    
   noFill();
    strokeWeight(2);
    stroke(255,255,0);
   ellipse(this.x - 10, this.y, 20, 20);

    
    //SONRISA
    noFill();
    stroke(0);
    strokeWeight(3);
    arc(this.x, this.y + 20, 20, 20, TWO_PI, PI);

      
    }
  }
  
   this.moverse = function() {
     
     
    this.x = this.x + random(0,5);
    this.y = this.y + random(0, 0);
  }

  this.morirse = function() {
    this.estaVivo = false;
  }
  
  
  this.alejarse = function() {
    this.estaVivo = true;
    miX = 100
    miY = 100
  }
  

  
}

///////////////////////////////////////////////
//FUNCION 5
//ESPECIE 5 CHINA

function china(miX,miY){

  //Caracteristicas
  this.x = miX;
  this.y = miY;
  this.estaVivo = true;
  //Habilidades
  this.dibujarse = function() {
    if (this.estaVivo == true) {
      
    noStroke();
    fill(255, 0, 0);
    //CUERPO
    ellipse(this.x, this.y, 70, 70);

    //ESTRELLAS
    fill(255, 255, 0);
    star(this.x - 15, this.y, 15, 5.6, 5);
    star(this.x + 10, this.y, 7, 2.5, 5);
    star(this.x, this.y + 17, 7, 2.5, 5);
    star(this.x, this.y - 20, 7, 2.5, 5);

    fill(0);
    arc(this.x - 15, this.y - 5, 20, 25, 0.47, 3.61);
    arc(this.x + 15, this.y - 5, 20, 25, 5.97, 2.67);
    noFill();
    stroke(0);
    strokeWeight(3);
    arc(this.x, this.y + 20, 20, 20, PI, TWO_PI);

      
    }
  }
  
   this.moverse = function() {
    this.x = this.x + random(0, 0);
    this.y = this.y + random(0, 1);
  }

  this.morirse = function() {
    this.estaVivo = false;
  }

  
}
