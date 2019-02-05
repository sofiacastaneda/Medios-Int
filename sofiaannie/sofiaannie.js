var q1=0
var r1=0
var q2=50
var r2=0
var q3=50
var r3=50 

var x1=0
var y1=50
var x2=50
var y2=50
var x3=50
var y3=100

var z1=0
var v1=100
var z2=0
var v2=150
var z3=50
var v3=150

var a1=0
var b1=150
var a2=0
var b2=200
var a3=50
var b3=200

var m1=50
var n1=150
var m2=100
var n2=150
var m3=100
var n3=200

var k1=100
var l1=150
var k2=150
var l2=150
var k3=150
var l3=200

var w1=150
var e1=150
var w2=150
var e2=200
var w3=200
var e3=200 


function setup() {

createCanvas(1600,1600);
 
noStroke();
fill(0,0,0);  
rect(0,0,1600,1600);

noStroke();  
fill(220,122,4);
rect(400,400,800,800);
  
  
noStroke();
fill(255,255,255);  

for (var cant=0; cant<2; cant=cant+1){
triangle(q1,r1,q2,r2,q3,r3);
 
 
triangle(x1,y1,x2,y2,x3,y3);
triangle(x1,y1,x2,y2,x3,y3);
x1=x1+50
y1=50-y1
x2=x2+50
y2=50-y2
x3=x3+50
y3=y3-50



triangle(z1,v1,z2,v2,z3,v3);
triangle(z1,v1,z2,v2,z3,v3);
z1=z1+50
v1=v1-50
z2=z2+50
v2=v2-50
z3=z3+50
v3=v3-50
triangle(z1,v1,z2,v2,z3,v3);
z1=z1+50
v1=v1-50
z2=z2+50
v2=v2-50
z3=z3+50
v3=v3-50



triangle(a1,b1,a2,b2,a3,b3);
triangle(a1,b1,a2,b2,a3,b3);
a1=a1+50
b1=b1-50
a2=a2+50
b2=b2-50
a3=a3+50
b3=b3-50
triangle(a1,b1,a2,b2,a3,b3);
a1=a1+50
b1=b1-50
a2=a2+50
b2=b2-50
a3=a3+50
b3=b3-50
triangle(a1,b1,a2,b2,a3,b3);
a1=a1+50
b1=b1-50
a2=a2+50
b2=b2-50
a3=a3+50
b3=b3-50


triangle(m1,n1,m2,n2,m3,n3);
triangle(m1,n1,m2,n2,m3,n3);
m1=m1+50
n1=n1-50
m2=m2+50
n2=n2-50
m3=m3+50
n3=n3-50
triangle(m1,n1,m2,n2,m3,n3);
m1=m1+50
n1=n1-50
m2=m2+50
n2=n2-50
m3=m3+50
n3=n3-50



triangle(k1,l1,k2,l2,k3,l3);
triangle(k1,l1,k2,l2,k3,l3);
k1=k1+50
l1=l1-50
k2=k2+50
l2=l2-50
k3=k3+50
l3=l3-50


triangle(w1,e1,w2,e2,w3,e3);


}



}
