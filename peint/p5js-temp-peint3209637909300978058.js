//fila izq
//botón de borrar 
var posXrec1 = 10;
var posYrec1 = 10;
var tamRect1 = 50;

//herramienta 1: pincel de flor
var posXrec5 = 10;
var posYrec5 = 70;
var tamRec5= 50;

//herramienta 2: pincel azteca
var posXrec3 = 10;
var posYrec3 = 130;
var tamRec3= 50;

//herramienta 3: groovy
var posXrec6 = 10;
var posYrec6 = 190;
var tamRec6= 50;

//herramienta 4: weird vertex
var posXrec8 = 10;
var posYrec8 = 250;
var tamRec8= 50;

//herramienta 5: vertex+ellipse
var posXrec10 = 10;
var posYrec10 = 310;
var tamRec10= 50;

//herramienta 6: happy face
var posXrec12 = 10;
var posYrec12 = 370;
var tamRec12= 50;

//herramienta 7: ice pick
var posXrec14 = 10;
var posYrec14 = 430;
var tamRec14= 50;

//herramienta 8: lineas ellipse+rect
var posXrec16 = 10;
var posYrec16 = 490;
var tamRec16= 50;

//herramienta 9: triagulitos
var posXrec18 = 10;
var posYrec18 = 550;
var tamRec18= 50;

//herramienta 10: elipsoide
var posXrec20 = 10;
var posYrec20 = 610;
var tamRec20= 50;

//fila derecha

//cambio de color 1: pincel de flor
var posXrec2 = 70;
var posYrec2 = 70;
var tamRec2= 50;

//cambio de color 3
var posXrec4 = 70;
var posYrec4 = 130;
var tamRec4= 50;

//cambio de color: pincel groovy
var posXrec7 = 70;
var posYrec7 = 190;
var tamRec7= 50;

//cambio de color: pincel weird vertex
var posXrec9 = 70;
var posYrec9 = 250;
var tamRec9= 50;

//cambio de color: pincel vertex+ellipse
var posXrec11 = 70;
var posYrec11 = 310;
var tamRec11= 50;

//cambio de color: pincel cara feliz
var posXrec13 = 70;
var posYrec13 = 370;
var tamRec13= 50;

//cambio de color: ice pick
var posXrec15 = 70;
var posYrec15 = 430;
var tamRec15= 50;

//cambio de color: ellipse+rect
var posXrec17 = 70;
var posYrec17 = 490;
var tamRec17= 50;

//cambio de color: triangulitos
var posXrec19 = 70;
var posYrec19 = 550;
var tamRec19= 50;

//cambio de color: elipsoide
var posXrec21 = 70;
var posYrec21 = 610;
var tamRec21= 50;

var colSel = 0

  var herramienta=0

  function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 255);
}

function draw() {

  //boton 1
  stroke(0, 0, 0);
  strokeWeight(5);
  fill(255);
  rect(posXrec1, posYrec1, tamRect1, tamRect1);
  noFill();
  stroke(0, 0, 0);
  strokeWeight(2);
  beginShape();
  vertex(30, 45);
  vertex(25, 40);
  vertex(40, 25);
  vertex(50, 35);
  vertex(40, 45);
  endShape(CLOSE);
  line(20, 45, 50, 45);
  line(40, 45, 30, 35);

  //boton 2: cambio de color flor
  noStroke();
  fill(53, 151, 240);
  rect(posXrec2, posYrec2, tamRec2, tamRec2);

  //boton3: pincel azteca
  noStroke();
  fill(0, 0, 0);
  rect(posXrec3, posYrec3, tamRec3, tamRec3);
  fill(255, 255, 255);
  rect(17, 150, 5, 5);
  rect(22, 155, 5, 5);
  rect(27, 155, 5, 5);
  rect(32, 150, 5, 5);
  rect(37, 155, 5, 5);
  rect(42, 155, 5, 5);
  rect(47, 150, 5, 5);

  //boton4: cambio de color pincel azteca
  noStroke();
  fill(194, 215, 44);
  rect(posXrec4, posYrec4, tamRec4, tamRec4);

  //boton5: pincel de flor 
  noStroke();
  fill(0, 0, 0);
  rect(posXrec5, posYrec5, tamRec5, tamRec5);
  fill(255, 255, 255);
  ellipse(35, 95, 10, 10);
  ellipse(25, 95, 10, 10);
  ellipse(45, 95, 10, 10);
  ellipse(35, 85, 10, 10);
  ellipse(35, 105, 10, 10);

  //boton6: pincel groovy 
  noStroke();
  fill(0, 0, 0);
  rect(posXrec6, posYrec6, tamRec6, tamRec6);
  fill(255, 255, 255);
  ellipse(37, 220, 10, 10);
  ellipse(44, 226, 15, 15);
  ellipse(32, 215, 7, 7);
  ellipse(27, 210, 10, 10);
  ellipse(22, 205, 15, 15);


  //boton7: cambio de color pincel groovy 
  noStroke();
  fill(255, 169, 3);
  rect(posXrec7, posYrec7, tamRec7, tamRec7);

  //boton8: weird vertex
  noStroke();
  fill(0, 0, 0);
  rect(posXrec8, posYrec8, tamRec8, tamRec8);
  fill(255, 255, 255);
  beginShape();
  vertex(30, 275);
  vertex(50, 295);
  vertex(20, 275);
  vertex(40, 275);
  vertex(30, 290);
  vertex(30, 260);
  vertex(35, 253);
  endShape();

  //boton9: cambio de color weird vertex
  noStroke();
  fill(83, 33, 168);
  rect(posXrec9, posYrec9, tamRec9, tamRec9);

  //boton10: pincel vertex+ellipse
  noStroke();
  fill(0, 0, 0);
  rect(posXrec10, posYrec10, tamRec10, tamRec10);
  fill(255, 255, 255);
  ellipse(35, 320, 10, 10);
  ellipse(35, 350, 10, 10);
  ellipse(50, 335, 10, 10);
  ellipse(20, 335, 10, 10);
  beginShape();
  vertex(35, 350);
  vertex(20, 335);
  vertex(35, 320);
  vertex(50, 335);
  endShape(CLOSE);

  //boton11: cambio de color vertex+ellipse
  noStroke();
  fill(254, 8, 255);
  rect(posXrec11, posYrec11, tamRec11, tamRec11);

  //boton12: pincel carita feliz
  noStroke();
  fill(0, 0, 0);
  rect(posXrec12, posYrec12, tamRec12, tamRec12);
  fill(255, 255, 255);
  rect(22, 380, 7, 7);
  rect(42, 380, 7, 7);
  rect(17, 395, 7, 7);
  rect(47, 395, 7, 7);
  rect(23, 402, 25, 7);

  //boton13: cambio de color carita feliz
  noStroke();
  fill(93, 8, 255);
  rect(posXrec13, posYrec13, tamRec13, tamRec13);

  //boton14: pincel ice pick
  noStroke();
  fill(0, 0, 0);
  rect(posXrec14, posYrec14, tamRec14, tamRec14);
  fill(255, 255, 255);
  beginShape();
  vertex(50, 440);
  vertex(20, 460);
  vertex(25, 470);
  vertex(35, 470);
  vertex(40, 465);
  endShape(CLOSE);

  //boton15: cambio de color ice pick
  noStroke();
  fill(227, 7, 77);
  rect(posXrec15, posYrec15, tamRec15, tamRec15);

  //boton16: pincel ellipse+rect
  noStroke();
  fill(0, 0, 0);
  rect(posXrec16, posYrec16, tamRec16, tamRec16);
  fill(255, 255, 255);
  ellipse(20, 500, 10, 10);
  ellipse(30, 510, 5, 5);
  rect(35, 515, 5, 5);
  rect(45, 525, 10, 10);

  //boton17: cambio de color ellipse+rect
  noStroke();
  fill(42, 178, 13);
  rect(posXrec17, posYrec17, tamRec17, tamRec17);

  //boton18: pincel triangulitos
  noStroke();
  fill(0, 0, 0);
  rect(posXrec18, posYrec18, tamRec18, tamRec18);
  fill(255, 255, 255);
  beginShape();
  vertex(40, 555);
  vertex(30, 565);
  vertex(45, 565);
  endShape(CLOSE);
  beginShape();
  vertex(30, 565);
  vertex(15, 580);
  vertex(50, 580);
  endShape(CLOSE);
beginShape();
  vertex(50, 580);
    vertex(60, 590);
  vertex(10, 590);
  endShape(CLOSE);

  //boton19: cambio de color triangulitos
  noStroke();
  fill(191, 219, 247);
  rect(posXrec19, posYrec19, tamRec19, tamRec19);

 //boton20: pincel elipsoide
  noStroke();
  fill(0, 0, 0);
  rect(posXrec20, posYrec20, tamRec20, tamRec20);
  fill(255,255,255);
  ellipse(30,635,5,25);
  ellipse(40,635,5,25);
rect(30,618,8,6)
   //boton21: cambio de color elipsoide
  noStroke();
  fill(255, 255, 20);
  rect(posXrec21, posYrec21, tamRec21, tamRec21);
  

  //if para el cambio de color
  if (colSel == 0) {
    // blanco
    fill(231, 231, 231);
  } else if (colSel == 1) {
    // light blue
    fill(53, 151, 240);
  } else if (colSel == 2) {
    // lime
    fill(194, 215, 44);
  } else if (colSel == 3) {
    //  orange
    fill(255, 169, 3);
  } else if (colSel == 4) {
    // deep purple
    fill(83, 33, 168);
  } else if (colSel == 5) {
    // fucsia
    fill(254, 8, 255);
  } else if (colSel == 6) {
    // azul mora
    fill(93, 8, 255);
  } else if (colSel == 7) {
    // fresa
    fill(227, 7, 77);
  } else if (colSel == 8) {
    // verde pasto
    fill(42, 178, 13);
  } else if (colSel == 9) {
    // azul pastel
    fill(191, 219, 247);
  }
  else if (colSel == 10) {
    // amarillo intenso
    fill(255, 255, 20);
  }



  if (mouseIsPressed == true) {
    //noStroke();
    //ellipse(mouseX, mouseY, 10, 10);

    //borrar
    if (mouseX > posXrec1 && mouseX < posXrec1 + tamRect1  && mouseY > posYrec1 && mouseY < posYrec1+ tamRect1) {
      colSel = 0
        background(255, 255, 255);
    } //pincel 1: pincel de flor
    if (mouseX > posXrec5 && mouseX < posXrec5 + tamRec5 && mouseY > posYrec5 && mouseY < posYrec5 + tamRec5) {
      herramienta=1;
      colSel=0
    } 
    //cambiar color pincel flor
    if (mouseX > posXrec2 && mouseX < posXrec2 + tamRec2 && mouseY > posYrec2 && mouseY < posYrec2 + tamRec2) {
      colSel = 1;
    } //pincel 2: pincel lineal
    if (mouseX > posXrec3 && mouseX < posXrec3 + tamRec3 && mouseY > posYrec3 && mouseY < posYrec3 + tamRec3) {
      herramienta=3;
    }
    //cambiar color del cuadrado
    if (mouseX > posXrec4 && mouseX < posXrec4 + tamRec4 && mouseY > posYrec4 && mouseY < posYrec4 + tamRec4) {
      colSel = 2;
    }
    //pincel 3: pincel groovy
    if (mouseX > posXrec6 && mouseX < posXrec6 + tamRec6 && mouseY > posYrec6 && mouseY < posYrec6 + tamRec6) {
      herramienta=4;
    }
    //cambiar color del pincel groovy
    if (mouseX > posXrec7 && mouseX < posXrec7 + tamRec7 && mouseY > posYrec7 && mouseY < posYrec7 + tamRec7) {
      colSel = 3;
    }
    //pincel 4: weird vertex
    if (mouseX > posXrec8 && mouseX < posXrec8 + tamRec8 && mouseY > posYrec8 && mouseY < posYrec8 + tamRec8) {
      herramienta=5;
    }
    //cambiar color del pincel weird vertex
    if (mouseX > posXrec9 && mouseX < posXrec9 + tamRec9 && mouseY > posYrec9 && mouseY < posYrec9 + tamRec9) {
      colSel = 4;
    }
    //pincel 5:  vertex + ellipse
    if (mouseX > posXrec10 && mouseX < posXrec10 + tamRec10 && mouseY > posYrec10 && mouseY < posYrec10 + tamRec10) {
      herramienta=6;
    }
    //cambiar color del pincel ellipse+ vertex
    if (mouseX > posXrec11 && mouseX < posXrec11 + tamRec11 && mouseY > posYrec11 && mouseY < posYrec11 + tamRec11) {
      colSel = 5;
    }
    //pincel 6:  cara feliz
    if (mouseX > posXrec12 && mouseX < posXrec12 + tamRec12 && mouseY > posYrec12 && mouseY < posYrec12 + tamRec12) {
      herramienta=7;
    }
    //cambiar color del pincel carita feliz
    if (mouseX > posXrec13 && mouseX < posXrec13 + tamRec13 && mouseY > posYrec13 && mouseY < posYrec13 + tamRec13) {
      colSel = 6;
    }
    //pincel 7:  ice pick
    if (mouseX > posXrec14 && mouseX < posXrec14 + tamRec14 && mouseY > posYrec14 && mouseY < posYrec14 + tamRec14) {
      herramienta=8;
    }
    //cambiar color del pincel carita feliz
    if (mouseX > posXrec15 && mouseX < posXrec15 + tamRec15 && mouseY > posYrec15 && mouseY < posYrec15 + tamRec15) {
      colSel = 7;
    }
    //pincel 8: ellipse+rect
    if (mouseX > posXrec16 && mouseX < posXrec16 + tamRec16 && mouseY > posYrec16 && mouseY < posYrec16 + tamRec16) {
      herramienta=9;
    }
    //cambiar color del pincel ellipse+rect
    if (mouseX > posXrec17 && mouseX < posXrec17 + tamRec17 && mouseY > posYrec17 && mouseY < posYrec17 + tamRec17) {
      colSel = 8;
    }
    //pincel 9: triangulitos
    if (mouseX > posXrec18 && mouseX < posXrec18 + tamRec18 && mouseY > posYrec18 && mouseY < posYrec18 + tamRec18) {
      herramienta=10;
    }
    //cambiar color del pincel triangulitos
    if (mouseX > posXrec19 && mouseX < posXrec19 + tamRec19 && mouseY > posYrec19 && mouseY < posYrec19 + tamRec19) {
      colSel = 9;
    }
    //pincel 10: elipsoide
    if (mouseX > posXrec20 && mouseX < posXrec20 + tamRec20 && mouseY > posYrec20 && mouseY < posYrec20 + tamRec20) {
      herramienta=11;
    }
    //cambiar color del pincel elipsoide
    if (mouseX > posXrec21 && mouseX < posXrec21 + tamRec21 && mouseY > posYrec21 && mouseY < posYrec21 + tamRec21) {
      colSel = 10;
    }

    if (herramienta == 0) {
      // elipse
      ellipse(mouseX, mouseY, 10, 10);
    } else if (herramienta==3) {
      //pincel azteca
      noStroke();
      rect(mouseX, mouseY, 10, 10);
      rect(mouseX+15, mouseY+10, 10, 10);
      rect(mouseX+10, mouseY+10, 10, 10);
      rect(mouseX+25, mouseY, 10, 10);
      rect(mouseX+40, mouseY+10, 10, 10);
      rect(mouseX+35, mouseY+10, 10, 10);
      rect(mouseX+50, mouseY, 10, 10);
    } else if (herramienta==2) {
      noStroke();
      fill(255);
      rect(mouseX, mouseY, 30, 30);
    } else if (herramienta==1) {
      //pincel flor
      noStroke();
      ellipse(mouseX, mouseY, 15, 15);
      ellipse(mouseX+15, mouseY, 15, 15);
      ellipse(mouseX-15, mouseY, 15, 15);
      ellipse(mouseX, mouseY+15, 15, 15);
      ellipse(mouseX, mouseY-15, 15, 15);
    } else if (herramienta==4) {
      //pincel groovy
      noStroke();
      ellipse(mouseX, mouseY, 10, 10);
      ellipse(mouseX+10, mouseY+10, 15, 15);
      ellipse(mouseX+15, mouseY+15, 20, 20);
      ellipse(mouseX+20, mouseY+20, 25, 25);
      ellipse(mouseX-15, mouseY-15, 20, 20);
      ellipse(mouseX-10, mouseY-10, 15, 15);
      ellipse(mouseX-20, mouseY-20, 25, 25);
    } else if (herramienta==5) {
      //weird vertex
      noStroke();
      beginShape();
      vertex(mouseX, mouseY);
      vertex(mouseX+20, mouseY+20);
      vertex(mouseX-10, mouseY);
      vertex(mouseX+10, mouseY);
      vertex(mouseX, mouseY+15);
      vertex(mouseX, mouseY-15);
      vertex(mouseX+5, mouseY-25);
      endShape();
    } else if (herramienta==6) {
      //ellipse+vertex
      noStroke();
      ellipse(mouseX-20, mouseY, 15, 15);
      ellipse(mouseX, mouseY-20, 15, 15);
      ellipse(mouseX+20, mouseY, 15, 15);
      ellipse(mouseX, mouseY+20, 15, 15);
      beginShape();
      vertex(mouseX-19, mouseY);
      vertex(mouseX, mouseY-19);
      vertex(mouseX+19, mouseY);
      vertex(mouseX, mouseY+19);
      endShape();
      noStroke();
      ellipse(mouseX-40, mouseY, 15, 15);
      ellipse(mouseX, mouseY-40, 15, 15);
      ellipse(mouseX+40, mouseY, 15, 15);
      ellipse(mouseX, mouseY+40, 15, 15);
      beginShape();
      vertex(mouseX-39, mouseY);
      vertex(mouseX, mouseY-39);
      vertex(mouseX+39, mouseY);
      vertex(mouseX, mouseY+39);
      endShape();
    } else if (herramienta==7) {
      //pincel carita feliz
      noStroke();
      rect(mouseX, mouseY, 12, 12);
      rect(mouseX+25, mouseY, 12, 12);
      rect(mouseX-10, mouseY+25, 12, 12);
      rect(mouseX+35, mouseY+25, 12, 12);
      rect(mouseX, mouseY+35, 12, 12);
      rect(mouseX+25, mouseY+35, 12, 12);
      rect(mouseX+10, mouseY+35, 15, 12);
    } else if (herramienta==8) {
      //pincel ice pick
      noStroke();
      beginShape();
      vertex(mouseX+20, mouseY-15);
      vertex(mouseX-15, mouseY+5);
      vertex(mouseX-10, mouseY+15);
      vertex(mouseX, mouseY+15);
      vertex(mouseX+5, mouseY+10);
      endShape(CLOSE);
    } else if (herramienta==9) {
      //pincel ellipse+rect
      noStroke();
      ellipse(mouseX+25, mouseY+25, 5, 5);
      ellipse(mouseX+15, mouseY+15, 10, 10);
      rect(mouseX+35, mouseY+35, 5, 5);
      rect(mouseX+45, mouseY+45, 10, 10);
    } else if (herramienta==10) {
      //pincel triangulitos
      noStroke();
      beginShape();
      vertex(mouseX, mouseY);
      vertex(mouseX-10, mouseY+10);
      vertex(mouseX+10, mouseY+10);
      endShape(CLOSE);
      beginShape();
      vertex(mouseX+30, mouseY+30);
      vertex(mouseX-40, mouseY+40);
      vertex(mouseX+40, mouseY+40);
      endShape(CLOSE);
      beginShape();
      vertex(mouseX-10, mouseY+10);
      vertex(mouseX-30, mouseY+30);
      vertex(mouseX+30, mouseY+30);
      endShape(CLOSE);
    }
    else if (herramienta==11) {
      //pincel elipsoide
      noStroke();
      ellipse(mouseX+25, mouseY+25, 5, 25);
     ellipse(mouseX+35, mouseY+25, 5, 25);
     rect(mouseX+25,mouseY+5,10,10);
    }
  }
}
