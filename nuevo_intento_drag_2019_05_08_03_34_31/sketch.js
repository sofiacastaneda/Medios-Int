/* DATOS OBTENIDOS DE
Max Roser (2019) - "Teachers and Professors". Published online at OurWorldInData.org. Retrieved from: 'https://ourworldindata.org/teachers-and-professors' [Online Resource]
@article{owidteachersandprofessors,
    author = {Max Roser},
    title = {Teachers and Professors},
    journal = {Our World in Data},
    year = {2019},
    note = {https://ourworldindata.org/teachers-and-professors}
}

>>>>utilizar el present para mostrar en el ipad
>>>> poner el qr para que se lleven el link
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


var estado = intro;


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
var tamRect1 = 50;

var posXrec2 = 320;
var posYrec2 = 50;
var tamRect2 = 50;

var posXrec3 = 520;
var posYrec3 = 50;
var tamRect3 = 50;

var posXrec4 = 730;
var posYrec4 = 50;
var tamRect4 = 50;


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
  tam = 50; //tamaño
  tamo = 70; //tamaño
  
   //aca se define la posición inicial de la bandera2
  x2 = 800; //posicion en x
  y2 = 100; //posicion en y
  tam2 = 50; //tamaño
  tamo2 = 70; //tamaño
  
  //aca se define la posición inicial de la bandera3
  x3 = 100; //posicion en x
  y3 = 620; //posicion en y
  tam3 = 50; //tamaño
  tamo3 = 70; //tamaño
  
  //aca se define la posición inicial de la bandera4
  x4 = 880; //posicion en x
  y4 = 620; //posicion en y
  tam4 = 50; //tamaño
  tamo4 = 70; //tamaño
  
  ///ESTA SECCIÓN DEL CÍDUGO CORRESPONDE A LA GRÁFICA 4
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
    //text("ESTADO 2: graf1numero", width / 2, height / 2);
    push();
    noFill();
    stroke(0,191,255);
    strokeWeight(5);
    ellipse(width/2, height/2, 600, 600);
    pop();
    
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

    //ESTADO 4 = graf2ratio
  } else if (estado == graf2ratio) {
    background(246);
    text("ESTADO 4: graf2ratio", width / 2, height / 2);
    
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
    
    
    if (mouseIsPressed == true) {

    //límites del botón país 1: Colombia
    if (mouseX > posXrec1 && mouseX < posXrec1 + tamRect1 && mouseY > posYrec1 && mouseY < posYrec1 + tamRect1) {
      background(255, 0, 0);

      /*
      for (var e = 0; e < numEstCol; e = e + 1) {
        //var numEstCol = datos2pupilratio.getNum(1069, 3);

        var posX = random(width);
        var posY = random(height);

        ellipse(posX, posY, 20, 20);

      }
      */

    }

    //límites del botón país 2: japon
    if (mouseX > posXrec2 && mouseX < posXrec2 + tamRect2 && mouseY > posYrec2 && mouseY < posYrec2 + tamRect2) {
      background(255, 255, 0);
    }

    //límites del botón país 3: usa
    if (mouseX > posXrec3 && mouseX < posXrec3 + tamRect3 && mouseY > posYrec3 && mouseY < posYrec3 + tamRect3) {
      background(255, 0, 255);
    }

    //límites del botón país 4: camerun
    if (mouseX > posXrec4 && mouseX < posXrec4 + tamRect4 && mouseY > posYrec4 && mouseY < posYrec4 + tamRect4) {
      background(0, 255, 255);
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

  //ESTADO 8 = graf4dinero
} else if (estado == graf4dinero) {
  background(255);
  //text("ESTADO 8: graf4dinero", width / 2, height / 2);
  push();
  textSize(25);
  text("Mueve rápidamente al profesor para que llueva el dinero", 180, 50);
  pop();
  image(corredor, xcorre, ycorre, tamañocorre, tamañocorre);
  
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
  text("ESTADO 11: cierre", width / 2, height / 2);

}
  }

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

function doubleClicked() {
  //Si se hace click se avanza en los estados
  //Esta sección del código organiza en orden del estado 0 al 11, y hace que cuando se llegue al último estado se pueda volver al comienzo. 
  if (estado == intro) {
    estado = instruccion1;

  } else if (estado == instruccion1) {
    estado = graf1numero;

  } else if (estado == graf1numero) {
    estado = instruccion2;

  } else if (estado == instruccion2) {
    estado = graf2ratio;

  } else if (estado == graf2ratio) {
    estado = instruccion3;

  } else if (estado == instruccion3) {
    estado = graf3mujeres;

  } else if (estado == graf3mujeres) {
    estado = instruccion4;

  } else if (estado == instruccion4) {
    estado = graf4dinero;

  } /*else if (estado == graf4dinero) {
    estado = instruccion5;

  } else if (estado == instruccion5) {
    estado = graf5calidad;
    
    else if (estado == graf5calidad) {
    estado = cierre;
    */

  else if (estado == graf4dinero) {
    estado = cierre;

  } else if (estado == cierre) {
    estado = intro;
  }

}

//funcion que se activa si el mouse es arrastrado
function mouseDragged() {

  //revisa si la posición del mouse es cercana a la posicion de la bandera
  if (dist(mouseX, mouseY, x, y) < tam / 2 + 10) {

    //actualiza la posicion de la elipse con la posición del mouse
    x = mouseX;
    y = mouseY;
  }
  
  //revisa si la posición del mouse es cercana a la posicion de la bandera
  if (dist(mouseX, mouseY, x2, y2) < tam2 / 2 + 10) {

    //actualiza la posicion de la elipse con la posición del mouse
    x2 = mouseX;
    y2 = mouseY;
  }
  
  //revisa si la posición del mouse es cercana a la posicion de la bandera
  if (dist(mouseX, mouseY, x3, y3) < tam3 / 2 + 10) {

    //actualiza la posicion de la elipse con la posición del mouse
    x3 = mouseX;
    y3 = mouseY;
  }
  
  //revisa si la posición del mouse es cercana a la posicion de la bandera
  if (dist(mouseX, mouseY, x4, y4) < tam4 / 2 + 10) {

    //actualiza la posicion de la elipse con la posición del mouse
    x4 = mouseX;
    y4 = mouseY;
  }
  
  
  // Este if mueve al corredor
  if (dist(mouseX, mouseY, xcorre, ycorre) < tam / 2 + 10) {

    //actualiza la posicion de la elipse con la posición del mouse
    xcorre = mouseX;
    ycorre = mouseY;
  }
}
   
  
  
