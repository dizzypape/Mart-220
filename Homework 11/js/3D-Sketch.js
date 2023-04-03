var shape1, shape2, shape3, shape4, shape5, shape6;
var shapes = [];
var currentNumber = 0;

var tube;
var tv;
var ball;
var lost;

function preload()
{
    tube = loadImage("./images/static.jpg");
    tv = loadImage("./images/tv.jpg");
    ball = loadImage("./images/ball.png");
    lost = loadFont("./font/BlackBoard.ttf");
}
function setup() 
{
    createCanvas(800, 600, WEBGL);
    shape1 = new Box(random(100,200), random(100,200), random(0.01,0.04), random(0.01,0.04), random(0.01,0.04), 75, 75);
    shape2 = new Torus(random(-50,-200), random(-5,-100), random(0.01,0.04), random(0.01,0.04), random(0.01,0.04), 20, 10);
    shape3 = new Torus(random(200,350), random(50,250), random(0.01,0.04), random(0.01,0.04), random(0.01,0.04), 20, 15);
    shape4 = new Box(random(-50,-200), random(-75,200), random(0.01,0.04), random(0.01,0.04), random(0.01,0.04), 50, 50);
    shape5 = new Sphere(random(25,150), random(-25,100), random(0.01,0.04), random(0.01,0.04), random(0.01,0.04), 40);
    shape6 = new Sphere(random(-300,-200), random(150,270), random(0.01,0.04), random(0.01,0.04), random(0.01,0.04), 30);

    shapes[0] = shape1;
    shapes[1] = shape2;
    shapes[2] = shape3;
    shapes[3] = shape4;
    shapes[4] = shape5;
    shapes[5] = shape6;

    //setInterval(changeShape, 1000);
}
  
function draw() 
{
    background(200);
    fill(0);
    textFont(lost);
    textSize(80);
    text('Lost in Paradise', -300, -200);
    textSize(32);
    text('aka the 90s', -180,-170);
    textSize(24);
    text('Isabelle Pape', -390, 290);
    //shapes[currentNumber].draw();
    noStroke();
    for(var i = 0; i < shapes.length; i++)
    {
        shapes[i].draw();
    }
    
}

//function changeShape()
//{
//    currentNumber = round(random(0,4));
//}