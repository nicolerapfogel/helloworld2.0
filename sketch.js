var x = 100; 
var y = 420;
var speed = 2.5;
var a = 20
var b = 370
var c = 93
var d = 310
var e = 195
var f = 420
var g = 195
var h = 340
var i = 300
var j = 350
var k = 300
var l = 268
var m = 370
var n = 360
var o = 400
var p = 320
//let q = 210
//let r = 410


let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let protester1;
let protester2;
let protester3;
let protester4;
let xpos, ypos;
let xspeed = 4;
let yspeed = 3.5;
let xdirection = 1;
let ydirection = 1;
let bounce = 3;

let new_z = -500;


function preload(){
  img1=loadImage('images/rowboat.png') 
  img2=loadImage('images/waves.png')
  img3=loadImage('images/vote.png')
  img4=loadImage('images/blm.png')
  img5 = loadImage('images/lgbtqflag.jpeg')
  img6 = loadImage('images/intersectional.png')
  img7 = loadImage('images/refugees.png')
  img8 = loadImage('images/resist.png')
  img9 = loadImage('images/protester.png')
  protester1 = loadImage('images/blmactivist.png')
  protester2 = loadImage('images/gaycouple.png')
  protester3 = loadImage('images/woman.png')
  protester4 = loadImage('images/refugeeperson.png')
  
}

function setup(){
createCanvas(800, 600);
textAlign(CENTER, CENTER);
xpos = width / 2;
ypos = height / 2;



 
}

function draw(){
    background(182, 213, 239);
    //from p5.js bounce example, but image instead of ellipse
   /* xpos = xpos + xspeed * xdirection;
  ypos = ypos + yspeed * ydirection;
    if (xpos > width - bounce || xpos < bounce) {
    xdirection *= -1;}
    if (ypos > height - bounce || ypos < bounce) {
       ydirection *= -1;}
    
}*/

if(mouseX<400){
    image(img3, mouseX, mouseY, 65, 65);
}else{image(img8, mouseX, mouseY, 100, 100)}


  x += speed; 
  if(x > width){
    x = new_z; }
 stroke(0)
  image(img1, x, y, 400, 190);

  /*q += speed; 
  if(q > width){
    q = new_z; }
    image(img8, q, r, 100, 160);*/


  image(img2, 0, 450, 800, 150)

  

  fill(0)
  textSize(50)
  textAlign(CENTER, CENTER)
  
if(mouseIsPressed){
    textSize(25)
fill(0);
text('If you have come because your liberation is bound up with mine,', 400, 150);
text('then let us work together."', 400, 180);
text('-Lilla Watson', 400, 210);
}else{
  fill(255,0,0);
  stroke(0);
text('Roe Roe Roe', 400, 150);
fill(0, 0, 255);
text('Your Vote', 400, 200)
fill(255, 0, 0);
textSize(20);
noStroke()}
/*if(mouseIsPressed)
fill(0, 0, 255);
text('2020', mouseX, mouseY);*/


stroke(0)
a += speed; 

  if(a > width){
    a = new_z; 
}
//fill(122, 68, 20);
 image(protester1, a, b, 250, 140);

c += speed; 

  if(c > width){
    c = new_z; }
if(mouseIsPressed){
    image(img7, c, d, 80, 65);
} else{
image(img4, c, d, 100, 70)}

e += speed; 

  if(e > width){
    e = new_z; }
image(protester2, e, f, 90, 120)
g += speed; 

  if(g > width){
    g = new_z; }
    if(mouseIsPressed){
        image(img6, g, h, 100, 80);
    } else{
        image(img5, g, h, 90, 70)}

i += speed; 

  if(i > width){
    i = new_z; }
image(protester3, i, j, 90, 120)
k += speed; 

  if(k > width){
    k = new_z; }
if(mouseIsPressed){
    image(img4, k, l+15, 100, 70);
} else{
image(img6, k, l, 100, 80)}

m += speed; 

  if(m > width){
    m = new_z; }
image(protester4, m, n, 80, 180)
o += speed; 

  if(o > width){
    o = new_z; }
    if(mouseIsPressed){
        image(img5, o, p-20, 100, 80);
    } else{
image(img7, o, p, 80, 65)}
} 


