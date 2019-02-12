var x=0
var direccion=false

function setup() {
createCanvas(900,600);
}

function draw() {
background(255);
noStroke();

fill(0,102,0);
rect(0,0,900,600);

//tronco
fill(51,25,0);
rect(0,150,900,60);

//mono
fill(102,51,0);

//brazo izq
fill(102,51,0);
rect(x+5,150,15,160);

//Brazo der
rect(x+100,150,15,160);


//cabeza
rect(x+30,230,60,60);

//oreja izq
rect(x+30,220,15,15);
//oreja der
rect(x+75,220,15,15);

//cara
fill(236,172,75);
rect(x+40,240,40,45);

//ojos izq
fill(0,0,0);
rect(x+45,250,10,10);
//ojos der
fill(0,0,0);
rect(x+65,250,10,10);
//boca
fill(0,0,0);
rect(x+45,270,30,5);
rect(x+47,275,25,5);
//nariz
fill(102,51,0);
rect(x+55,262,10,5);

//cuerpo
fill(102,51,0);
rect(x+18,290,82,140);

//barriga
fill(236,172,75);
rect(x+30,310,57,95);


//pierna izq
fill(102,51,0);
rect(x+18,430,20,100);

//pierna der
fill(102,51,0);
rect(x+80,430,20,100);

//pie izq
fill(236,172,75);
rect(x+18,530,20,20);
//pie der
fill(236,172,75);
rect(x+80,530,20,20);

//cola
fill(102,51,0);
beginShape();
vertex(x+20,400);
vertex(x-30,400);
vertex(x-30,360);
vertex(x+10,360);
vertex(x+10,385);
vertex(x,385);
vertex(x,370);
vertex(x-20,370);
vertex(x-20,390);
vertex(x+20,390);
endShape(CLOSE);

if (direccion==false) {
    x= x+1;
  } else {
    x = x-1;
  }

if(x>width){
  direccion=true;
}

if(x<0){
 direccion=false
}

}
