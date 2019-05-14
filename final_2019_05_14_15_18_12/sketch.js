/* DATOS OBTENIDOS DE
Max Roser (2019) - "Teachers and Professors". Published online at OurWorldInData.org. Retrieved from: 'https://ourworldindata.org/teachers-and-professors' [Online Resource]
@article{owidteachersandprofessors,
    author = {Max Roser},
    title = {Teachers and Professors},
    journal = {Our World in Data},
    year = {2019},
    note = {https://ourworldindata.org/teachers-and-professors}
}
 */

////Estados de la gráfica
var intro = 0;

var instruccion1 = 1;
var graf1numero = 2;

var instruccion2 = 3;
var graf2ratio = 4;

var instruccion3 = 5;
var graf3mujeres = 6;

var instruccion4 = 7;
var graf4dinero = 8;

var instruccion5 = 9;
var graf5calidad = 10;

var cierre = 11;

///////////////////////////


var estado = graf1numero;


//Variables para cada una de las tablas
//Tabla 1: número de profesores
var datos1numero;
//Tabla 2: proporción profesor-estudiante
var datos2pupilratio;
//Tabla 3: porcentaje de mujeres
var datos3femaleporcentaje;
//Tabla 4: número de profesores entrenados
var datos4trained;
//Tabla 5: 
var datos5salarios;
//Tabla 6: 
var datos6compensation;
//Tabla 7: número de profesores calificados
var datos7qualified;
//Tabla 8: indicador de igualdad hombres vs. mujeres
var datos8indicador;

//Fuentes
//var fuentebold;
//var fuenteregular;
//var fuentelight;

//Variables de imagen
var intro01;
var intro02;
var intro03;
var intro04;
var intro05;
var cortinilla;

//Gráfica 1
var profesorcabeza;
var banderacolombia;
var banderacamerun;
var banderajapon;
var banderausa;

//Grafica
var corredor;

//para los print
var filas1;
var columnas1;

var filas2;
var columnas2;

var filas3;
var columnas3;

var filas4;
var columnas4;

var filas5;
var columnas5;

var filas6;
var columnas6;

var filas7;
var columnas7;

var filas8;
var columnas8;

/////Variables para la gráfica 1
//posición y tamaño para las banderas
var x;
var y;
var tam;
var tamo;

var x2;
var y2;
var tam2;
var tamo2;


var x3;
var y3;
var tam3;
var tamo3;


var x4;
var y4;
var tam4;
var tamo4;




/////Variables para la gráfica 2
var posXrec1 = 120;
var posYrec1 = 50;
var tamRect1 = 90;

var posXrec2 = 320;
var posYrec2 = 50;
var tamRect2 = 90;

var posXrec3 = 520;
var posYrec3 = 50;
var tamRect3 = 90;

var posXrec4 = 730;
var posYrec4 = 50;
var tamRect4 = 90;

//BOTONES PARA CAMBIAR DE ESTADO
//GRÁFICO 1
var posXrec5 = 880;
var posYrec5 = 680;
var tamRect5 = 30;
//GRÁFICO 2
var posXrec6 = 520;
var posYrec6 = 680;
var tamRect6 = 30;
//GRÁFICO 3
var posXrec7 = 515;
var posYrec7 = 720;
var tamRect7 = 30;
//GRÁFICO 4
var posXrec8 = 880;
var posYrec8 = 680;
var tamRect8 = 30;
//GRÁFICO 4
var posXrec9 = 900;
var posYrec9 = 700;
var tamRect9 = 30;
//GRÁFICO 4
var posXrec10 = 930;
var posYrec10 = 700;
var tamRect10 = 30;
//boton del cierre
var posXrec11 = 520;
var posYrec11 = 700;
var tamRect11 = 30;

//Cabezas estudiantes colombia
var posX = [];
var posY = [];
var cant = 24
//datos2pupilratio.getNum(1069, 3); ????
//Cabezas estudiantes japon
var posX2 = [];
var posY2 = [];
var cant2 = 16
//Cabezas estudiantes usa
var posX3 = [];
var posY3 = [];
var cant3 = 14
//Cabezas estudiantes cameroon
var posX4 = [];
var posY4 = [];
var cant4 = 41

//arreglo para el touch
var touches = [];

 //ellipse del centro
var posXElipse=510;
var posYElipse=390;
var tamanoElipse=300;

function preload() {
  datos1numero = loadTable('recursos/number-of-teachers.csv', 'csv', 'header');

  datos2pupilratio = loadTable('recursos/pupil-teacher-ratio.csv', 'csv', 'header');

  datos3femaleporcentaje = loadTable('recursos/female-teachers.csv', 'csv', 'header');

  datos4trained = loadTable('recursos/trained-teachers.csv', 'csv', 'header');

  datos5salarios = loadTable('recursos/salaries.csv', 'csv', 'header');

  datos6compensation = loadTable('recursos/compensation-share.csv', 'csv', 'header');

  datos7qualified = loadTable('recursos/qualified-teachers.csv', 'csv', 'header');

  datos8indicador = loadTable('recursos/indicador.csv', 'csv', 'header');

  //fuentebold = loadFont('recursos/Quicksand-Bold.otf');
  //regular = loadFont('recursos/Quicksand-Regular.otf');
  //light = loadFont('recursos/Quicksand-Light.otf');

  //imágenes para las instrucciones, inicio y cierre.
   intro01 = loadImage('intros01.png');
   intro02 = loadImage('intros02.png');
   intro03 = loadImage('intros03.png');
   intro04 = loadImage('intros04.png');
   intro05 = loadImage('intros05.png');
  cortinilla = loadImage('recursos/copiacierre.png');
  //imágenes para la gráfica no. 2
     profesorcabeza = loadImage('teach.jpg');
   banderacolombia = loadImage('colombiaflag.png');
   banderacamerun = loadImage('cameroonflag.png');
  banderajapon = loadImage('japanflag.png');
   banderausa = loadImage('usaflag.png');
  //imágenes para la gráfica del dinero
  corredor = loadImage('correr.png');
}

function setup() {
  createCanvas(1024, 768);

 
  
  //Esta sección del código verifica que se lea la tabla y da el número de filas y columnas de cada una. 
  filas1 = datos1numero.getRowCount();
  columnas1 = datos1numero.getColumnCount();
  print(filas1);
  print(columnas1);

  filas2 = datos2pupilratio.getRowCount();
  columnas2 = datos2pupilratio.getColumnCount();
  print(filas2);
  print(columnas2);

  filas3 = datos3femaleporcentaje.getRowCount();
  columnas3 = datos3femaleporcentaje.getColumnCount();
  print(filas3);
  print(columnas3);

  filas4 = datos4trained.getRowCount();
  columnas4 = datos4trained.getColumnCount();
  print(filas4);
  print(columnas4);

  filas5 = datos5salarios.getRowCount();
  columnas5 = datos5salarios.getColumnCount();
  print(filas5);
  print(columnas5);

  filas6 = datos6compensation.getRowCount();
  columnas6 = datos6compensation.getColumnCount();
  print(filas6);
  print(columnas6);

  filas7 = datos7qualified.getRowCount();
  columnas7 = datos7qualified.getColumnCount();
  print(filas7);
  print(columnas7);

  filas8 = datos8indicador.getRowCount();
  columnas8 = datos8indicador.getColumnCount();
  print(filas8);
  print(columnas8);

  //Esta sección del código corresponde a la GRÁFICA 1
//crea los rectángulos de las banderas
  //for (var i = 0; i < numBanderas; i++) {
    //banderas[i] = new bandera();
  //}
  
    //Esta sección del código corresponde a la GRÁFICA 2
  //aca se define la posición inicial de la bandera1
  x1 = 100; //posicion en x
  y1 = 100; //posicion en y
  tam = 70; //tamaño
  tamo = 100; //tamaño
  
   //aca se define la posición inicial de la bandera2
  x2 = 800; //posicion en x
  y2 = 100; //posicion en y
  tam2 = 70; //tamaño
  tamo2 = 100; //tamaño
  
  //aca se define la posición inicial de la bandera3
  x3 = 100; //posicion en x
  y3 = 620; //posicion en y
  tam3 = 70; //tamaño
  tamo3 = 100; //tamaño
  
  //aca se define la posición inicial de la bandera4
  x4 = 880; //posicion en x
  y4 = 620; //posicion en y
  tam4 = 70; //tamaño
  tamo4 = 100; //tamaño
  
  //ESTA SECCIÓN DEL CÓFIGO CONTIENE LOS FOR DE LA GRÁFICA 2
  
  //for COLOMBIA
  for (var i = 0; i < cant; i = i + 1) {
		posX[i] = random(width); 
		posY[i] = random(height);
	}
  
   //for JAPON
  for (var j = 0; j < cant2; j = j + 1) {
		posX2[j] = random(width); 
		posY2[j] = random(height);
	}
  
  //for USA
  for (var k = 0; k < cant3; k = k + 1) {
		posX3[k] = random(width); 
		posY3[k] = random(height);
	}
  
   //for CAMERUN
  for (var l = 0; l < cant4; l = l + 1) {
		posX4[l] = random(width); 
		posY4[l] = random(height);
	}
  
  
  ///ESTA SECCIÓN DEL CoDiGO CORRESPONDE A LA GRÁFICA 4
  xcorre = 440;
  ycorre = 130;
  tamañocorre = 200;
  
}


function draw() {
  
  //ESTADO 0: INTRODUCCIÓN 
  if (estado == intro) {
    background(200, 100, 100);
    //text("estado 0: Intro", width / 2, height / 2);
    image(intro01, 0, 0, width, height);

    //ESTADO 1: instruccion1 
  } else if (estado == instruccion1) {
    background(220);
    //text("ESTADO 1: instruccion1", width / 2, height / 2);
    image(intro02, 0, 0, width, height);

    //ESTADO 2 = graf1numero
  } else if (estado == graf1numero) {
    background(250);
    
    //CÍRCULO
    push();
    fill(250);
    strokeWeight(6);
    stroke(0,205,255);
    ellipse(width/2, height/2, 400,400);
    pop();
    
    
 
    //text("ESTADO 2: graf1numero", width / 2, height / 2);
   /* push();
    noFill();
    stroke(0,191,255);
    strokeWeight(5);
    ellipse(width/2, height/2, 600, 600);
    pop();
    */
    //pinta la bandera1
  strokeWeight(2);
  fill(255, 0, 0);
  stroke(255);
  //rect(x, y, tamo, tam);
  image(banderacolombia, x1, y1, tamo, tam);

  
    //pinta la bandera2
  strokeWeight(2);
  fill(255, 255, 0);
  stroke(255);
  //rect(x2, y2, tamo2, tam2);
  image(banderacamerun, x2, y2, tamo2, tam2);

  
  //pinta la bandera3
  strokeWeight(2);
  fill(255, 0, 255);
  stroke(255);
  //rect(x3, y3, tamo3, tam3);
  image(banderajapon, x3, y3, tamo3, tam3);

  
  //pinta la bandera4
  strokeWeight(2);
  fill(0, 0, 255);
  stroke(255);
  //rect(x4, y4, tamo4, tam4);
 image(banderausa, x4, y4, tamo4, tam4);

    //BOTON DE SEGUIR GRAF1
    push();
    stroke(66,200,244);
    strokeWeight(2);
    fill(66,200,244);
    rect(posXrec6, posYrec6, tamRect6, tamRect6);
    pop();
    
    
     push();
    stroke(66,200,244);
    strokeWeight(2);
    fill(66,200,244);
    ellipse(posXElipse, posYElipse, tamanoElipse, tamanoElipse);
    pop();
    
    
    //Este for genera las 4 banderas y permite que se puedan mostrar/arrastrar. 
    /*
    for (var i = 0; i < numBanderas; i++) {
    banderas[i].mostrar();
  }
    */
    //ESTADO 3 = instruccion2
  } else if (estado == instruccion2) {
    background(220);
    //text("ESTADO 3: instruccion2", width / 2, height / 2);
    image(intro03, 0, 0, width, height);
    
    //BOTON DE SEGUIR 
    push();
    stroke(66,200,244);
    strokeWeight(2);
    fill(66,200,244);
    rect(posXrec7, posYrec7, tamRect7, tamRect7);
    pop();

    //ESTADO 4 = graf2ratio
  } else if (estado == graf2ratio) {
    background(246);
    //text("ESTADO 4: graf2ratio", width / 2, height / 2);
    
    image(profesorcabeza, 312, 270, 320, 400);

    //boton pais 1: colombia
    push();
    stroke(0);
    strokeWeight(2);
    rect(posXrec1, posYrec1, tamRect1, tamRect1);
    image(banderacolombia, posXrec1, posYrec1, tamRect1,tamRect1);
    pop();

    //boton pais 2: japon
    push();
    stroke(0);
    strokeWeight(2);
    rect(posXrec2, posYrec2, tamRect2, tamRect2);
    image(banderajapon, posXrec2, posYrec2, tamRect2,tamRect2);
    pop();

    //boton pais 3: usa
    push();
    stroke(0);
    strokeWeight(2);
    rect(posXrec3, posYrec3, tamRect3, tamRect3);
    image(banderausa, posXrec3, posYrec3, tamRect3,tamRect3);
    pop();

    //boton pais 4: camerun
    push();
    stroke(0);
    strokeWeight(2);
    rect(posXrec4, posYrec4, tamRect4, tamRect4);
    image(banderacamerun, posXrec4, posYrec4, tamRect4,tamRect4);
    pop();
    

    //BOTON DE SEGUIR GRAF2
    push();
    stroke(66,200,244);
    strokeWeight(2);
    fill(66,200,244);
    rect(posXrec5, posYrec5, tamRect5, tamRect5);
    pop();
    
    if (mouseIsPressed == true) {

    //límites del botón país 1: Colombia
    if (mouseX > posXrec1 && mouseX < posXrec1 + tamRect1 && mouseY > posYrec1 && mouseY < posYrec1 + tamRect1) {
      //background(255, 0, 0);

      /*
      for (var e = 0; e < numEstCol; e = e + 1) {
        //var numEstCol = datos2pupilratio.getNum(1069, 3);

        var posX = random(width);
        var posY = random(height);

        ellipse(posX, posY, 20, 20);

      }
      */
      
      for (var i = 0; i < cant; i = i + 1) {
		push();
        //cabeza
        fill(224,172,105);
        ellipse(posX[i], posY[i], 90, 90);
        //gafas
        strokeWeight(2);
        fill(255);
        rect(posX[i]-25, posY[i]-20, 25, 20);
       rect(posX[i]+5, posY[i]-20, 25, 20);
       //ojos
        fill(0);
        ellipse(posX[i]-15, posY[i]-10, 10, 10);
        ellipse(posX[i]+18, posY[i]-10, 10, 10);
       //rayita de las gafas
        line(posX[i]+5, posY[i]-10, posX[i], posY[i]-10);
    //boca y nariz
        arc(posX[i], posY[i] + 20, 30, 30, TWO_PI, PI);     
        arc(posX[i], posY[i] + 10, 5, 5, PI, TWO_PI);
		//mejillas sonrojadas
        fill(255,192,203);
        ellipse(posX[i]-25, posY[i]+15, 15, 15);
		ellipse(posX[i]+25, posY[i]+15, 15, 15);
       pop();

        textSize(20);
        text('Hay 24 estudiantes por profesor en Colombia',260,720);
        //text("mostrar el valor de la tabla");
		
		posX[i] = posX[i] + random(-15,15);
		posY[i] = posY[i] + random(0,0);
	}
      

    }

    //límites del botón país 2: japon
    if (mouseX > posXrec2 && mouseX < posXrec2 + tamRect2 && mouseY > posYrec2 && mouseY < posYrec2 + tamRect2) {
      //background(255, 255, 0);
      
      for (var j = 0; j < cant2; j = j + 1) {
		push();
        //cabeza
        fill(224,172,105);
        ellipse(posX[j], posY[j], 90, 90);
        //gafas
        strokeWeight(2);
        fill(255);
        rect(posX[j]-25, posY[j]-20, 25, 20);
       rect(posX[j]+5, posY[j]-20, 25, 20);
       //ojos
        fill(0);
        ellipse(posX[j]-15, posY[j]-10, 10, 10);
        ellipse(posX[j]+18, posY[j]-10, 10, 10);
       //rayita de las gafas
        line(posX[j]+5, posY[j]-10, posX[j], posY[j]-10);
    //boca y nariz
        arc(posX[j], posY[j] + 20, 30, 30, TWO_PI, PI);     
        arc(posX[j], posY[j] + 10, 5, 5, PI, TWO_PI);
		//mejillas sonrojadas
        fill(255,192,203);
        ellipse(posX[j]-25, posY[j]+15, 15, 15);
		ellipse(posX[j]+25, posY[j]+15, 15, 15);
       pop();

        textSize(20);
        text('Hay 16 estudiantes por profesor en Japón',260,720);
		
		posX2[j] = posX2[j] + random(-15,15);
		posY2[j] = posY2[j] + random(0,0);
	}
      
    }

    //límites del botón país 3: usa
    if (mouseX > posXrec3 && mouseX < posXrec3 + tamRect3 && mouseY > posYrec3 && mouseY < posYrec3 + tamRect3) {
      //background(255, 0, 255);
      for (var k = 0; k < cant3; k = k + 1) {
		push();
        //cabeza
        fill(224,172,105);
        ellipse(posX[k], posY[k], 90, 90);
        //gafas
        strokeWeight(2);
        fill(255);
        rect(posX[k]-25, posY[k]-20, 25, 20);
       rect(posX[k]+5, posY[k]-20, 25, 20);
       //ojos
        fill(0);
        ellipse(posX[k]-15, posY[k]-10, 10, 10);
        ellipse(posX[k]+18, posY[k]-10, 10, 10);
       //rayita de las gafas
        line(posX[k]+5, posY[k]-10, posX[k], posY[k]-10);
    //boca y nariz
        arc(posX[k], posY[k] + 20, 30, 30, TWO_PI, PI);     
        arc(posX[k], posY[k] + 10, 5, 5, PI, TWO_PI);
		//mejillas sonrojadas
        fill(255,192,203);
        ellipse(posX[k]-25, posY[k]+15, 15, 15);
		ellipse(posX[k]+25, posY[k]+15, 15, 15);
       pop();

        textSize(20);
        text('Hay 14 estudiantes por profesor en Estados Unidos',260,720);
        //text("mostrar el valor de la tabla");
		
		posX3[k] = posX3[k] + random(-15,15);
		posY3[k] = posY3[k] + random(0,0);
	}
      
    }

    //límites del botón país 4: camerun
    if (mouseX > posXrec4 && mouseX < posXrec4 + tamRect4 && mouseY > posYrec4 && mouseY < posYrec4 + tamRect4) {
     // background(0, 255, 255);
      
       for (var l = 0; l < cant4; l = l + 1) {
		push();
        //cabeza
        fill(224,172,105);
        ellipse(posX[l], posY[l], 90, 90);
        //gafas
        strokeWeight(2);
        fill(255);
        rect(posX[l]-25, posY[l]-20, 25, 20);
       rect(posX[l]+5, posY[l]-20, 25, 20);
       //ojos
        fill(0);
        ellipse(posX[l]-15, posY[l]-10, 10, 10);
        ellipse(posX[l]+18, posY[l]-10, 10, 10);
       //rayita de las gafas
        line(posX[l]+5, posY[l]-10, posX[l], posY[l]-10);
    //boca y nariz
        arc(posX[l], posY[l] + 20, 30, 30, TWO_PI, PI);     
        arc(posX[l], posY[l] + 10, 5, 5, PI, TWO_PI);
		//mejillas sonrojadas
        fill(255,192,203);
        ellipse(posX[l]-25, posY[l]+15, 15, 15);
		ellipse(posX[l]+25, posY[l]+15, 15, 15);
       pop();

        textSize(20);
        text('Hay 41 estudiantes por profesor en Camerún',260,720);
		
		posX4[l] = posX4[l] + random(-15,15);
		posY4[l] = posY4[l] + random(0,0);
	}
      
         
      //BOTON PARA CONTINUAR

    
      }
if (mouseX > 880 && mouseX < 880 + 30 && mouseY > 680 && mouseY < 680 + 30) {
    
  estado = instruccion4;
 print("si");
  
    } 
      
    
      
      
}
  
    
    
  //ESTADO 5 = instruccion3
} else if (estado == instruccion3) {
  background(220);
  //text("ESTADO 5: instruccion3", width / 2, height / 2);
    image(intro04, 0, 0, width, height);

  //ESTADO 6 = graf3mujeres
} else if (estado == graf3mujeres) {
  background(220);
  text("ESTADO 6: graf3mujeres", width / 2, height / 2);

  //ESTADO 7 = instruccion4
} else if (estado == instruccion4) {
  background(220);
  //text("ESTADO 7: instruccion4", width / 2, height / 2);
    image(intro05, 0, 0, width, height);
  
  //BOTON DE SEGUIR GRAF1
    push();
    stroke(66,200,244);
    strokeWeight(2);
    fill(66,200,244);
    rect(posXrec9, posYrec9, tamRect9, tamRect9);
    pop();

  //ESTADO 8 = graf4dinero
} else if (estado == graf4dinero) {
  background(255);
  //text("ESTADO 8: graf4dinero", width / 2, height / 2);
  push();
  textSize(25);
  text("Mueve rápidamente al profesor para que llueva el dinero", 180, 50);
  pop();
  image(corredor, xcorre, ycorre, tamañocorre, tamañocorre);
  
  //BOTON DE SEGUIR GRAF1
    push();
    stroke(66,200,244);
    strokeWeight(2);
    fill(66,200,244);
    rect(posXrec10, posYrec10, tamRect10, tamRect10);
    pop();
  
  //BARRA INDICADORA DEL SALARIO
  push();
  stroke(0,191,200);
  strokeWeight(6);
  line(90,200,90,700);
  pop();
  

  //ESTADO 9 = instruccion5
} else if (estado == instruccion5) {
  background(220);
  text("ESTADO 9: instruccion5", width / 2, height / 2);

  //ESTADO 10 = graf5calidad
} else if (estado == graf5calidad) {
  background(220);
  text("ESTADO 10: graf5calidad", width / 2, height / 2);

  //ESTADO 11 = cierre
} else if (estado == cierre) {
  background(220);
  //text("ESTADO 11: cierre", width / 2, height / 2);
    image(cortinilla, 0, 0, width, height);

   //BOTON DE SEGUIR GRAF1
    push();
    stroke(66,200,244);
    strokeWeight(2);
    fill(66,200,244);
    rect(posXrec11, posYrec11, tamRect11, tamRect11);
    pop();
    
}
  }

//función en desuso
function bandera(){

  //ubicación de las banderas
  this.x = random(width);
  this.y = random(height);

  //variable de tamaño
  this.tam1 = 50;
  this.tam2 = 30;
  
  //funcion para dibujar la bandera
  this.mostrar = function() {
    rect(this.x, this.y, this.tam1, this.tam2);
  }
  
   //Función para arrastrar la bandera
  this.arrastrar = function() {
    this.x = mouseX;
    this.y = mouseY;
  }

}

/*
function mouseDragged(){

  for (var i = 0; i < numBanderas; i++) {

    //revisa si el mouse esta encima de alguna bola
    if (dist(mouseX, mouseY, banderas[i].x, banderas[i].y) < banderas[i].tam + 10) {

      //llama a la funcion arrastrar
      banderas[i].arrastrar();
    }
  }
}
*/

function touchEnded() {
  //Si se hace click se avanza en los estados
  //Esta sección del código organiza en orden del estado 0 al 11, y hace que cuando se llegue al último estado se pueda volver al comienzo. 
  if (estado == intro) {
    estado = instruccion1;

  } else if (estado == instruccion1) {
    estado = graf1numero;

 // } else if (estado == graf1numero) {
    //estado = instruccion2;

 //// } else if (estado == instruccion2) {
   //// estado = graf2ratio;

 // } else if (estado == graf2ratio) {
   // estado = instruccion4;
    
 // } else if (estado == instruccion4) {
  //  estado = graf4dinero;

   /*else if (estado == instruccion3) {
    estado = graf3mujeres;

  } else if (estado == graf3mujeres) {
    estado = instruccion4;

  } else if (estado == instruccion4) {
    estado = graf4dinero;*/

   /*else if (estado == graf4dinero) {
    estado = instruccion5;

  } else if (estado == instruccion5) {
    estado = graf5calidad;
    
    else if (estado == graf5calidad) {
    estado = cierre;
    */

//} else if (estado == graf4dinero) {
    //estado = cierre;

  //} else if (estado == cierre) {
   // estado = intro;
  }

}

//funcion que se activa si el mouse es arrastrado
//usada en la primera gráfica
function mouseDragged() {

  //revisa si la posición del mouse es cercana a la posicion de la bandera
  if (dist(mouseX, mouseY, x1+ tam /2, y1) < tam / 2 + 10) {

    //actualiza la posicion de la bandera con la posición del mouse
    x1 = mouseX;
    y1 = mouseY;
  }
  
  //revisa si la posición del mouse es cercana a la posicion de la bandera 2
  if (dist(mouseX, mouseY, x2, y2) < tam2 / 2 + 10) {

    //actualiza la posicion de la bandera con la posición del mouse
    x2 = mouseX;
    y2 = mouseY;
  }
  
  //revisa si la posición del mouse es cercana a la posicion de la bandera 3
  if (dist(mouseX, mouseY, x3, y3) < tam3 / 2 + 10) {

    //actualiza la posicion de la bandera con la posición del mouse
    x3 = mouseX;
    y3 = mouseY;
  }
  
  //revisa si la posición del mouse es cercana a la posicion de la bandera 4
  if (dist(mouseX, mouseY, x4, y4) < tam4 / 2 + 10) {

    //actualiza la posicion de la bandera con la posición del mouse
    x4 = mouseX;
    y4 = mouseY;
  }
  
  
  // Este if mueve al corredor de la gráfica 4
  if (dist(mouseX, mouseX, xcorre, ycorre) < tam / 2 + 10) {

    //actualiza la posicion de la elipse con la posición del mouse
    xcorre = mouseX;
    ycorre = mouseX;
  }
  
  if (dist(x1, y1, tamanoElipse, tamanoElipse) < 100 ) {
      textSize(50);
      text('187042',width/2, height/2);
    }
    
  if (dist(x2, y2, tamanoElipse, tamanoElipse) < 100 ) {
      textSize(50);
      text('93738',width/2, height/2);
    }
  
  if (dist(x3, y3, tamanoElipse, tamanoElipse) < 100 ) {
      textSize(50);
      text('406511',width/2, height/2);
    }
  
  if (dist(x4, y4, tamanoElipse, tamanoElipse) < 100 ) {
      textSize(50);
      text('1687937',width/2, height/2);
    }
   return false;
}

function touchStarted(){
  
  if (mouseX > 520 && mouseX < 520 + 30 && mouseY > 680 && mouseY < 680 + 30) {
    
  estado = instruccion2;
 print("si"); }

  if (mouseX > 515 && mouseX < 515 + 30 && mouseY > 720 && mouseY < 720 + 30) {
    
  estado = graf2ratio;
 print("si"); }
  
  if (mouseX > 880 && mouseX < 880 + 30 && mouseY > 680 && mouseY < 680 + 30) {
    
  estado = instruccion4;
 print("sii"); }
  
  if (mouseX > 900 && mouseX < 900 + 30 && mouseY > 700 && mouseY < 700 + 30) {
    
  estado = graf4dinero;
 print("siii"); }
  
  if (mouseX > 930 && mouseX < 930 + 30 && mouseY > 700 && mouseY < 700 + 30) {
    
  estado = cierre;
 print("siiii"); }
  
  if (mouseX > 520 && mouseX < 520 + 30 && mouseY > 700 && mouseY < 700 + 30) {
    
  estado = intro;
 print("no"); }
  
}
   
  
  
