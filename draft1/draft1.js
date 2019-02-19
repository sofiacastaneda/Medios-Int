var x=0
var direccion=false
var direccionf=true
var m=0
var y=0

function setup() {
createCanvas(1060,700);
}

function draw() {
background(255);
frameRate(4);
noStroke();

fill(22,85,13);
rect(0,0,1060,700);





//árbol 1
fill(51,0,0);
beginShape();
vertex(900-x,-10);
vertex(1060-x,-10);
vertex(1065-x, 5);
vertex(1080-x,30);
vertex(1100-x,50);
vertex(1085-x,250);
vertex(1090-x,320);
vertex(1110-x,400);
vertex(1120-x,550);
vertex(1130-x,700);
vertex(900-x,710);
vertex(800-x,700);
vertex(820-x,600);
vertex(840-x,500);
vertex(870-x,45);
endShape(CLOSE);

////árbol 2
fill(51,0,0);
beginShape();
vertex(600-x,-10);
vertex(630-x,-10);
vertex(640,-x,30);
vertex(680-x,30);
vertex(600-x,50);
vertex(685-x,250);
vertex(690-x,320);
vertex(620-x,550);
vertex(630-x,700);
vertex(500-x,710);
vertex(400-x,700);
vertex(420-x,600);
vertex(440-x,500);
vertex(450-x,0);
endShape(CLOSE);

//árbol 3
fill(51,0,0);
beginShape();
vertex(1200-x,-10);
vertex(1360-x,-10);
vertex(1365-x, 5);
vertex(1380-x,30);
vertex(1400-x,50);
vertex(1385-x,250);
vertex(1390-x,320);
vertex(1410-x,400);
vertex(1420-x,550);
vertex(1430-x,700);
vertex(1200-x,710);
vertex(1220-x,700);
vertex(1220-x,600);
vertex(1240-x,500);
vertex(1270-x,45);
endShape(CLOSE);

////árbol 4
fill(51,0,0);
beginShape();
vertex(320-x,-10);
vertex(280-x,-10);
vertex(280,-x,30);
vertex(280-x,30);
vertex(250-x,50);
vertex(325-x,250);
vertex(320-x,320);
vertex(270-x,550);
vertex(290-x,700);
vertex(260-x,710);
vertex(50-x,700);
vertex(70-x,600);
vertex(90-x,500);
vertex(50-x,300);
vertex(200-x,0);
endShape(CLOSE);

////árbol 5
fill(51,0,0);
beginShape();
vertex(220-x,-10);
vertex(180-x,-10);
vertex(180,-x,30);
vertex(180-x,30);
vertex(150-x,50);
vertex(325-x,250);
vertex(320-x,320);
vertex(170-x,550);
vertex(190-x,700);
vertex(160-x,710);
vertex(-50-x,700);
vertex(-70-x,600);
vertex(-90-x,500);
vertex(-50-x,300);
vertex(-100-x,0);
endShape(CLOSE);


if (direccionf==true) {
    m= m-1;
  } else {
    m = m+1;
  }

if(m<width){
  direccionf=false;
}

if(m<0){
 direccionf=true;
}


//Hojas 
fill(37,137,22);
ellipse(-1-m,20,40,180);
ellipse(40-m,60,30,150);
ellipse(60-m,20,45,165);
ellipse(100-m,30,25,190);
fill(23,116,9);
ellipse(21-m,20,40,180);
ellipse(70-m,30,45,210);
ellipse(120-m,20,35,180);

fill(37,137,22);
ellipse(-30-m,20,40,180);
ellipse(-60-m,60,30,150);
ellipse(-90-m,20,45,165);
ellipse(-130-m,30,25,190);
fill(23,116,9);
ellipse(-51-m,20,40,180);
ellipse(-100-m,30,45,210);
ellipse(-150-m,20,35,180);

fill(37,137,22);
ellipse(-130-m,20,40,180);
ellipse(-160-m,60,30,150);
ellipse(-190-m,20,45,165);
ellipse(-230-m,30,25,190);
fill(23,116,9);
ellipse(-151-m,20,40,180);
ellipse(-200-m,30,45,210);
ellipse(-250-m,20,35,180);

fill(37,137,22);
ellipse(-230-m,20,40,180);
ellipse(-260-m,60,30,150);
ellipse(-290-m,20,45,165);
ellipse(-330-m,30,25,190);
fill(23,116,9);
ellipse(-251-m,20,40,180);
ellipse(-300-m,30,45,210);
ellipse(-350-m,20,35,180);

fill(37,137,22);
ellipse(-330-m,20,40,180);
ellipse(-360-m,60,30,150);
ellipse(-390-m,20,45,165);
ellipse(-430-m,30,25,190);
fill(23,116,9);
ellipse(-351-m,20,40,180);
ellipse(-400-m,30,45,210);
ellipse(-450-m,20,35,180);

fill(37,137,22);
ellipse(-430-m,20,40,180);
ellipse(-460-m,60,30,150);
ellipse(-490-m,20,45,165);
ellipse(-530-m,30,25,190);
fill(23,116,9);
ellipse(-451-m,20,40,180);
ellipse(-500-m,30,45,210);
ellipse(-550-m,20,35,180);

fill(37,137,22);
ellipse(-530-m,20,40,180);
ellipse(-560-m,60,30,150);
ellipse(-590-m,20,45,165);
ellipse(-630-m,30,25,190);
fill(23,116,9);
ellipse(-551-m,20,40,180);
ellipse(-600-m,30,45,210);
ellipse(-650-m,20,35,180);

fill(37,137,22);
ellipse(-630-m,20,40,180);
ellipse(-660-m,60,30,150);
ellipse(-690-m,20,45,165);
ellipse(-730-m,30,25,190);
fill(23,116,9);
ellipse(-651-m,20,40,180);
ellipse(-700-m,30,45,210);
ellipse(-750-m,20,35,180);

fill(37,137,22);
ellipse(-730-m,20,40,180);
ellipse(-760-m,60,30,150);
ellipse(-790-m,20,45,165);
ellipse(-830-m,30,25,190);
fill(23,116,9);
ellipse(-751-m,20,40,180);
ellipse(-800-m,30,45,210);
ellipse(-850-m,20,35,180);

fill(37,137,22);
ellipse(-830-m,20,40,180);
ellipse(-860-m,60,30,150);
ellipse(-890-m,20,45,165);
ellipse(-930-m,30,25,190);
fill(23,116,9);
ellipse(-851-m,20,40,180);
ellipse(-900-m,30,45,210);
ellipse(-950-m,20,35,180);

fill(37,137,22);
ellipse(-930-m,20,40,180);
ellipse(-960-m,60,30,150);
ellipse(-990-m,20,45,165);
ellipse(-1030-m,30,25,190);
fill(23,116,9);
ellipse(-951-m,20,40,180);
ellipse(-1000-m,30,45,210);
ellipse(-1050-m,20,35,180);

fill(37,137,22);
ellipse(-1030-m,20,40,180);
ellipse(-1060-m,60,30,150);
ellipse(-1090-m,20,45,165);
ellipse(-1130-m,30,25,190);
fill(23,116,9);
ellipse(-1051-m,20,40,180);
ellipse(-1100-m,30,45,210);
ellipse(-1150-m,20,35,180);

fill(37,137,22);
ellipse(-1130-m,20,40,180);
ellipse(-1160-m,60,30,150);
ellipse(-1190-m,20,45,165);
ellipse(-1230-m,30,25,190);
fill(23,116,9);
ellipse(-1151-m,20,40,180);
ellipse(-1200-m,30,45,210);
ellipse(-1250-m,20,35,180);

fill(37,137,22);
ellipse(-1230-m,20,40,180);
ellipse(-1260-m,60,30,150);
ellipse(-1290-m,20,45,165);
ellipse(-1330-m,30,25,190);
fill(23,116,9);
ellipse(-1251-m,20,40,180);
ellipse(-1300-m,30,45,210);
ellipse(-1350-m,20,35,180);

fill(37,137,22);
ellipse(-1330-m,20,40,180);
ellipse(-1360-m,60,30,150);
ellipse(-1390-m,20,45,165);
ellipse(-1430-m,30,25,190);
fill(23,116,9);
ellipse(-1351-m,20,40,180);
ellipse(-1400-m,30,45,210);
ellipse(-1450-m,20,35,180);

fill(37,137,22);
ellipse(-1430-m,20,40,180);
ellipse(-1460-m,60,30,150);
ellipse(-1490-m,20,45,165);
ellipse(-1530-m,30,25,190);
fill(23,116,9);
ellipse(-1451-m,20,40,180);
ellipse(-1500-m,30,45,210);
ellipse(-1550-m,20,35,180);

fill(37,137,22);
ellipse(-1530-m,20,40,180);
ellipse(-1560-m,60,30,150);
ellipse(-1590-m,20,45,165);
ellipse(-1630-m,30,25,190);
fill(23,116,9);
ellipse(-1551-m,20,40,180);
ellipse(-1600-m,30,45,210);
ellipse(-1650-m,20,35,180);

fill(37,137,22);
ellipse(-1630-m,20,40,180);
ellipse(-1660-m,60,30,150);
ellipse(-1690-m,20,45,165);
ellipse(-1730-m,30,25,190);
fill(23,116,9);
ellipse(-1651-m,20,40,180);
ellipse(-1700-m,30,45,210);
ellipse(-1750-m,20,35,180);

fill(37,137,22);
ellipse(-1730-m,20,40,180);
ellipse(-1760-m,60,30,150);
ellipse(-1790-m,20,45,165);
ellipse(-1830-m,30,25,190);
fill(23,116,9);
ellipse(-1751-m,20,40,180);
ellipse(-1800-m,30,45,210);
ellipse(-1850-m,20,35,180);

fill(37,137,22);
ellipse(-1830-m,20,40,180);
ellipse(-1860-m,60,30,150);
ellipse(-1890-m,20,45,165);
ellipse(-1930-m,30,25,190);
fill(23,116,9);
ellipse(-1851-m,20,40,180);
ellipse(-1900-m,30,45,210);
ellipse(-1950-m,20,35,180);

fill(37,137,22);
ellipse(-1930-m,20,40,180);
ellipse(-1960-m,60,30,150);
ellipse(-1990-m,20,45,165);
ellipse(-2030-m,30,25,190);
fill(23,116,9);
ellipse(-1951-m,20,40,180);
ellipse(-2000-m,30,45,210);
ellipse(-2050-m,20,35,180);

fill(37,137,22);
ellipse(101-m,20,40,180);
ellipse(140-m,60,30,150);
ellipse(160-m,20,45,165);
ellipse(200-m,30,25,190);
fill(23,116,9);
ellipse(121-m,20,40,180);
ellipse(170-m,30,45,210);
ellipse(220-m,20,35,180);

fill(37,137,22);
ellipse(201-m,20,40,180);
ellipse(240-m,60,30,150);
ellipse(260-m,20,45,165);
ellipse(300-m,30,25,190);
fill(23,116,9);
ellipse(221-m,20,40,180);
ellipse(270-m,30,45,210);
ellipse(320-m,20,35,180);

fill(37,137,22);
ellipse(301-m,20,40,180);
ellipse(340-m,60,30,150);
ellipse(360-m,20,45,165);
ellipse(400-m,30,25,190);
fill(23,116,9);
ellipse(321-m,20,40,180);
ellipse(370-m,30,45,210);
ellipse(420-m,20,35,180);

fill(37,137,22);
ellipse(401-m,20,40,180);
ellipse(440-m,60,30,150);
ellipse(460-m,20,45,165);
ellipse(500-m,30,25,190);
fill(23,116,9);
ellipse(421-m,20,40,180);
ellipse(470-m,30,45,210);
ellipse(520-m,20,35,180);


fill(37,137,22);
ellipse(501-m,20,40,180);
ellipse(540-m,60,30,150);
ellipse(560-m,20,45,165);
ellipse(600-m,30,25,190);
fill(23,116,9);
ellipse(521-m,20,40,180);
ellipse(570-m,30,45,210);
ellipse(620-m,20,35,180);

fill(37,137,22);
ellipse(601-m,20,40,180);
ellipse(640-m,60,30,150);
ellipse(660-m,20,45,165);
ellipse(700-m,30,25,190);
fill(23,116,9);
ellipse(621-m,20,40,180);
ellipse(670-m,30,45,210);
ellipse(720-m,20,35,180);

fill(37,137,22);
ellipse(701-m,20,40,180);
ellipse(740-m,60,30,150);
ellipse(760-m,20,45,165);
ellipse(800-m,30,25,190);
fill(23,116,9);
ellipse(721-m,20,40,180);
ellipse(770-m,30,45,210);
ellipse(820-m,20,35,180);

fill(37,137,22);
ellipse(801-m,20,40,180);
ellipse(840-m,60,30,150);
ellipse(860-m,20,45,165);
ellipse(900-m,30,25,190);
fill(23,116,9);
ellipse(821-m,20,40,180);
ellipse(870-m,30,45,210);
ellipse(920-m,20,35,180);

fill(37,137,22);
ellipse(901-m,20,40,180);
ellipse(940-m,60,30,150);
ellipse(960-m,20,45,165);
ellipse(1000-m,30,25,190);
fill(23,116,9);
ellipse(921-m,20,40,180);
ellipse(970-m,30,45,210);
ellipse(1020-m,20,35,180);

//tronco

fill(51,25,0);
rect(0,230,1060,60);

fill(51,25,0);
beginShape();
vertex(0,230);
vertex(110,210);
vertex(120,210);
vertex(130,230);
endShape(CLOSE);


fill(51,25,0);
beginShape();
vertex(200,230);
vertex(510,210);
vertex(520,210);
vertex(530,230);
endShape(CLOSE);

fill(51,25,0);
beginShape();
vertex(600,270);
vertex(690,280);
vertex(790,280);
vertex(605,310);
endShape(CLOSE);

fill(51,25,0);
beginShape();
vertex(800,270);
vertex(970,280);
vertex(980,280);
vertex(955,310);
endShape(CLOSE);

//mono
fill(102,51,0);

//brazo izq
fill(102,51,0);
rect(x+5,230,15,160);

//Brazo der
rect(x+100,230,15,160);

//mano 1
fill(236,172,75);
rect(x+5,230,15,15);
//mano 2
fill(236,172,75);
rect(x+100,230,15,15);

//cabeza
fill(102,51,0);
rect(x+30,310,60,60);

//oreja izq
rect(x+30,300,15,15);
//oreja der
rect(x+75,300,15,15);

//cara
fill(236,172,75);
rect(x+40,320,40,45);

//ojos izq
fill(0,0,0);
rect(x+45,330,10,10);
//ojos der
fill(0,0,0);
rect(x+65,330,10,10);
//boca
fill(0,0,0);
rect(x+45,350,30,5);
rect(x+47,355,25,5);
//nariz
fill(102,51,0);
rect(x+55,342,10,5);

//cuerpo
fill(102,51,0);
rect(x+18,370,82,140);

//barriga
fill(236,172,75);
rect(x+30,390,57,95);


//pierna izq
fill(102,51,0);
rect(x+18,510,20,100);

//pierna der
fill(102,51,0);
rect(x+80,510,20,100);

//pie izq
fill(236,172,75);
rect(x+18,610,20,20);
//pie der
fill(236,172,75);
rect(x+80,610,20,20);

//cola
fill(102,51,0);
beginShape();
vertex(x+20,480);
vertex(x-30,480);
vertex(x-30,440);
vertex(x+10,440);
vertex(x+10,465);
vertex(x,465);
vertex(x,450);
vertex(x-20,450);
vertex(x-20,470);
vertex(x+20,470);
endShape(CLOSE);

if (direccion==false) {
    x= x+16;
  } else {
    x = x-16;
  }

if(x>width){
  direccion=true;
}

if(x<0){
 direccion=false;
}

if (direccion==true){
 y = y+6
}



//monedita
fill(255,169,31);
rect(920,350,65,95);
rect(930,340,45,115);
fill(255,255,0);
rect(920,350,60,90);
rect(930,340,40,110);
fill(255,169,31);
rect(940,355,20,80);

//banana(s)
fill(254,255,23);
rect(x-800,y+100,60,15);
rect(x-790,y+115,40,10);
rect(x-870,y+75,25,25);
fill(x-721,y+83,6);
rect(x-765,y+65,15,15);

fill(254,255,23);
rect(x-700,y+100,60,15);
rect(x-690,y+115,40,10);
rect(x-770,y+75,25,25);
fill(x-621,y+83,6);
rect(x-665,y+65,15,15);


fill(254,255,23);
rect(x-600,y+100,60,15);
rect(x-690,y+115,40,10);
rect(x-670,y+75,25,25);
fill(x-521,y+83,6);
rect(x-565,y+65,15,15);


fill(254,255,23);
rect(x-400,y+100,60,15);
rect(x-390,y+115,40,10);
rect(x-370,y+75,25,25);
fill(x-421,y+83,6);
rect(x-365,y+65,15,15);

fill(254,255,23);
rect(x-300,y+100,60,15);
rect(x-290,y+115,40,10);
rect(x-270,y+75,25,25);
fill(x-321,y+83,6);
rect(x-265,y+65,15,15);

fill(254,255,23);
rect(x-200,y+100,60,15);
rect(x-190,y+115,40,10);
rect(x-170,y+75,25,25);
fill(x-221,y+83,6);
rect(x-165,y+65,15,15);


fill(254,255,23);
rect(x-100,y+100,60,15);
rect(x-90,y+115,40,10);
rect(x-70,y+75,25,25);
fill(x-121,y+83,6);
rect(x-65,y+65,15,15);


fill(254,255,23);
rect(x+100,y+100,60,15);
rect(x+110,y+115,40,10);
rect(x+130,y+75,25,25);
fill(x+21,y+83,6);
rect(x+135,y+65,15,15);


fill(254,255,23);
rect(x+200,y+100,60,15);
rect(x+210,y+115,40,10);
rect(x+230,y+75,25,25);
fill(x+121,y+83,6);
rect(x+235,y+65,15,15);


fill(254,255,23);
rect(x+400,y+100,60,15);
rect(x+410,y+115,40,10);
rect(x+430,y+75,25,25);
fill(x+121,y+83,6);
rect(x+435,y+65,15,15);


fill(254,255,23);
rect(x+600,y+100,60,15);
rect(x+610,y+115,40,10);
rect(x+630,y+75,25,25);
fill(x+121,y+83,6);
rect(x+635,y+65,15,15);

fill(254,255,23);
rect(x+800,y+100,60,15);
rect(x+810,y+115,40,10);
rect(x+830,y+75,25,25);
fill(x+121,y+83,6);
rect(x+835,y+65,15,15);

fill(254,255,23);
rect(x+1000,y+100,60,15);
rect(x+1010,y+115,40,10);
rect(x+1030,y+75,25,25);
fill(x+121,y+83,6);
rect(x+1035,y+65,15,15);

  




//j = 0
//l = Math.random();
//l*170;

//function cocos(){

//background(255);
//fill(255,0,0);

//ellipse(l,j,20,20);
//j = j+3
//}

//cocos();


//NO BORRAR esto por algún motivo si se va el código se cuelga
function cocos(){
fill(0,255,0);}


if (frameCount < 230) {
    if (frameCount % 2 == 0) {
      //Agreguen esta linea solo cuando el código esté listo: 
      //saveCanvas("mono"+frameCount, 'jpg');
    }
  }
  print(frameCount);




}
