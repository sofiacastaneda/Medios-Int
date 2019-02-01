function setup() {
createCanvas (600,600);
point(10,590);

//cuadrilátero irregular café
fill(141,117,39,240);
noStroke();
quad(110,250,335,130,470,360,280,490);

//triángulo amarillo
fill(255,255,0);
noStroke();
triangle(100,30,250,217,170,260);

//triángulo rojo
fill(204,0,0,230);
noStroke();
triangle(40,210,110,320,235,224);


//rect 1
stroke(0,0,0);
strokeWeight(15);
strokeCap(SQUARE);
line(20,560,540,90);

//triang blanc
fill(255,255,255);
noStroke();
triangle(490,150,552,50,595,60);

//círculo negro
stroke(0,0,0);
strokeWeight(18);
ellipse(360,200,100,100);

//arco rojo dentro del círculo negro
noFill();
stroke(198,9,9);
strokeWeight(6);
arc(351,200,60,80,2.98,5.03);

//círculo rojo dentro del negro
fill(140,23,2);
stroke(140,23,2);
strokeWeight(1);
ellipse(365,190,15,15);

noStroke();

//triángulo negro que "atraviesa" figura compuesta roja sup.
fill(0,0,0);
triangle(330,120,310,110,395,15);


//figura compuesta roja superior
fill(255,0,0);
triangle(300,25,250,80,312,60);
noStroke();
triangle(312,60,300,25,400,110);

//área superpuesta en blanco
fill(255,255,255);
noStroke();
quad(340,76,350,65,361,72,354,83);


//círculo rojo entre trig amarillo y fig comp roja
fill(140,23,2);
ellipse(208,69,14,14);

//semi círculo izq intento 1
//fill(255,0,0,100);
//arc(232,180,80,80,5.18,2.04);

//cuad de fondo para el semicírculo
fill(208,63,63,240);
noStroke();
beginShape();
vertex(190,205);
vertex(230,188);
vertex(250,218);
vertex(200,255);
endShape();

//semicírculo parte amarilla
fill(239,255,0);
noStroke();
arc(227,188,80,60,0.93,2.04);

//semicírculo parte blanca
fill(255,255,255);
noStroke();
arc(227,188,65,65,5.78,0.93);

//semicírculo parte azul
fill(88,85,179);
noStroke();
arc(227,188,60,80,5.13,5.78);


//tendría que poner -> círculo -> medio círculo rojo - > abertura

//abertura 1 círculo
fill(255,255,255);
noStroke();
quad(370,120,360,170,370,170,390,120);

//abertura 2 círculo
fill(255,255,255);
noStroke();
quad(380,220,370,230,380,270,400,260);

//punta negra abertura 2
fill(0,0,0);
noStroke();
quad(375,215,367,220,370,225,380,220);

//línea 1 que atravisa círculo
stroke(0,0,0);
strokeWeight(4);
line(340,190,280,120);

//Línea 2 que atraviesa el círculo
stroke(0,0,0);
strokeWeight(2);
line(410,120,305,270);

//líneas curvas entre círculo rojo y amarillo intento 1
//noFill();
//arc(90, 175,110,100, PI + QUARTER_PI, TWO_PI);


//cosa negra
fill(0,0,0);
noStroke();
beginShape();
vertex(170,280);
vertex(180,190);
vertex(260,290);
vertex(287,265);
vertex(335,310);
vertex(540,510);
vertex(320,330);
vertex(250,330);
vertex(190,243);
vertex(190,300);
endShape(CLOSE);

//quad irregular azul
fill(128,164,221,240);
noStroke();
beginShape();
vertex(180,325);
vertex(145,350);
vertex(150,400);
vertex(220,390);
endShape();

/*
//curva1 
//curveVertex(110,230);
//curveVertex(130,210);
noFill();
stroke(0,0,0);
strokeWeight(2);
beginShape(LINE);
point(110,230);
point(130,210);
curveVertex(120,225);
endShape();
*/

/*
//intento de arco
noFill();
stroke(0,0,0);
strokeWeight(2);
arc(120, 155, 50, 50, 0,HALF_PI, OPEN);  
*/

//arco entre triángulos 1
noFill();
stroke(0,0,0);
strokeWeight(1);
arc(123,200,60,60,2.67,5.34);

//arco entre triángulos 2
noFill();
stroke(0,0,0);
strokeWeight(1);
arc(120,200,80,80,2.70,5.18);

//tres líneas negras atravesando arcos
line(110,140,130,190);
line(77,150,120,195);
line(65,170,110,200);

//línea rojita flotando
noFill();
stroke(155,23,23);
strokeWeight(2);
line(235,150,250,120);

//línea curva sobre triángulo amarillo 1
noFill();
stroke(0,0,0);
strokeWeight(1);
curve(250,225,190,80,180,180,260,150);

//línea curva sobre triángulo amarillo 2
noFill();
stroke(0,0,0);
strokeWeight(1);
curve(250,225,190,50,175,175,260,150);

//línea loca sobre tiángulo amarillo y curvas 1
strokeWeight(1);
point(150, 180);
point(180,165);
point(200,125)
point(210, 120);
point(205, 140);
point(215, 135);
point(215,145);
strokeWeight(1);

noFill();
beginShape();
curveVertex(150, 180);
curveVertex(150, 180);
curveVertex(180, 165);
curveVertex(200, 125);
curveVertex(210, 120);
curveVertex(205, 140);
curveVertex(215, 135);
curveVertex(215, 145);
curveVertex(215, 145);
endShape();

//línea loca sobre tiángulo amarillo y curvas 2
strokeWeight(1);
stroke(0,0,0);
point(160, 170);
point(180,155);
point(200,110)
point(220, 115);
point(213, 130);
point(225, 125);
point(225,135);
strokeWeight(1);

noFill();
beginShape();
curveVertex(160, 170);
curveVertex(160, 170);
curveVertex(180, 155);
curveVertex(200, 110);
curveVertex(220, 115);
curveVertex(213, 130);
curveVertex(225, 125);
curveVertex(225, 135);
curveVertex(225, 135);
endShape();

//línea loca sobre tiángulo amarillo y curvas 3
strokeWeight(1);
stroke(0,0,0);
point(170, 160);
point(180,145);
point(200,100)
point(210,90);
point(220,87);
point(230,90);
point(233,105);
point(225,120);
point(235,115);
point(230,125);
strokeWeight(1);

noFill();
beginShape();
curveVertex(170, 160);
curveVertex(170, 160);
curveVertex(180, 145);
curveVertex(200, 100);
curveVertex(210,90);
curveVertex(220,87);
curveVertex(230,90);
curveVertex(233, 105);
curveVertex(225, 120);
curveVertex(235, 115);
curveVertex(230, 125);
curveVertex(230, 125);
endShape();

//arco rojo en punta de línea negra 1
//vértice ubicado en 280,120
stroke(255,0,0);
strokeWeight(3);
point(275, 130);
point(270,120);
point(272,110);
point(280,110);
point(290, 120);
strokeWeight(3);

noFill();
beginShape();
curveVertex(275, 130);
curveVertex(275, 130);
curveVertex(270, 120);
curveVertex(272, 110);
curveVertex(280, 110);
curveVertex(290, 120);
curveVertex(290, 120);
endShape();

//medio círculo amarillo pequeño
fill(255,255,0);
noStroke();
arc(205,315,25,25,1.26,4.40);

//triángulo blanco sobre círculo negro
fill(255,255,255);
triangle(270,275,260,265,335,195);

//triangulito beige
fill(240,225,150);
triangle(238,224, 235,255, 250,255);

//cuadrado negro sobre cuad. irregular café
fill(0,0,0);
stroke(0,0,0);
quad(260,245,265,250,270,245,265,240);

//arco rojo en punta de línea negra 2
//vértice ubicado en (410,120)

stroke(255,0,0);
strokeWeight(3);
point(400, 125);
point(405,115);
point(413,110);
point(420,115);
point(415, 130);
strokeWeight(3);

noFill();
beginShape();
curveVertex(400, 125);
curveVertex(400, 125);
curveVertex(405, 112);
curveVertex(413, 110);
curveVertex(420, 115);
curveVertex(415, 130);
curveVertex(415, 130);
endShape();

//triángulo blanco que atraviesa línea negra diagonal
fill(255,255,255);
noStroke();
triangle(305,235,350,285,340,293);

//medio círculo blanco pequeño borde azul
fill(255,255,255);
stroke(0,0,255);
arc(347,295,20,20,5.34,2.04);


noFill();


//línea roja que completa círculo arriba //stroke(100,11,11);
stroke(0,0,0);
strokeWeight(3);
arc(370,163,30,30,3.61,6.13);

//quad negro dentro de círculo negro
fill(0,0,0);
noStroke();
beginShape();
vertex(370,165);
vertex(362,160);
vertex(360,170);
vertex(365,172);
endShape();

}
