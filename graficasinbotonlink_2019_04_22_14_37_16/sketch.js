//Esta gráfica muestra el número de estudiantes por profesor a lo largo de los años en Colombia. 
//Pupil-teacher ratio in secondary education (headcount basis)
//http://data.un.org/Data.aspx?q=colombia&d=UNESCO&f=series%3aPTRHC_23%3bref_area%3aCOL

//Cada círculo tiene un map que permite expresar gráficamente el número de profesores. 
//Para mayor claridad se agregaron los datos en texto junto con líneas que permiten identificar a qué burbuja pertenece qué dato. 
//Al ser una progresión en el tiempo, los datos están ubicados horizontalmente. 

var grafica;

var filas;
var columnas;

function preload() {
  grafica = loadTable('recursos/radio.csv', 'csv', 'header');
}

function setup() {
  createCanvas(1000, 500);
    background(255);

  
  filas = grafica.getRowCount();
  columnas = grafica.getColumnCount();
  
  
  //print para revisar que lea el archivo
  print(filas);
  print(columnas);
  
  ////////////////////////////////////////
  //Cabecera y pie de gráfica
 
  //cajas azules
  push();
  stroke(70, 133, 234);
  fill(70, 133, 234);
  //superior
  rect(0,0,width,60);
  //inferior
  rect(0,height-71,width,70);
  pop();
  
  //texto de las cajas
  //superior
  push();
    fill(255);
    textSize(17);
     text('Colombia', 10, 23);
      textSize(25);
   text('Pupil-teacher ratio in secondary education (headcount basis)', 10, 48);
    pop();
  
  //inferior
  push();
    fill(255);
   textSize(18);
  text('Save this graph.', 30, 452);
    textSize(15);
  text('Data obtained from UN Data: a World of information.', 10, 474);
      textSize(10);   
  text('URL:http://data.un.org/Data.aspx?q=colombia&d=UNESCO&f=series%3aPTRHC_23%3bref_area%3aCOL', 10, 489);
    pop();
  ////////////////////////////////////////


 ////////////////////////////////////////
  //FOR PARA CREAR LOS CÍRCULOS, determina el radio del círculo según el número de profesores de cada año.
  //También crea las rayas y los textos de cada burbuja. 
  
  for (var i = 0; i < filas; i = i + 1) {
    var profesores = grafica.getNum(i, 5);
    var ano = grafica.getString(i, 1);

    //print para revisar que las var funcionen
    print(ano);
    print(profesores);
    
    var alto = map(profesores, 17, 28, 0, 200);
    var ancho = width / filas;
    var posX = (filas - 1 - i) * (ancho);
    var posY = 250;
       
    //CIRCULOS PROFESORES (MÁS LA RAYITA NEGRA QUE INDICA EL CENTRO DEL CÍRCULO)
   
    fill(random(0,255),random(0,255),random(0,255));
    //noStroke();
    ellipse(posX+28, posY, alto, alto);
    
    //strokeWeight(3);
    fill(random(0,255),random(0,255),random(0,255));
    line(posX-5,120,posX-5,380);
    fill(0);
    
    //TEXTO INFERIOR: AÑO
     push();
    translate(posX, height - 100);
    rotate(-HALF_PI);
    fill(0);
    textSize(13);
    textAlign(CENTER);
    text(ano, 0, 0);
    pop();

    //TEXTO SUPERIOR: NUMERO PROFESORES
     push();
    translate(posX, 100);
    rotate(-HALF_PI);
    fill(0);
    textSize(13);
    textAlign(CENTER);
    //número de profesores por estudiante, nf() limita el número de decimales que se muestran a dos. 
    text(nf(profesores,2,2), 0, 0);
    pop();
  }
  
  strokeWeight(3);
  line(0,250,width,250);

}

function draw() {
}