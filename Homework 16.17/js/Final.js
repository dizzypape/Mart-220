//planet
var planetModel;
var ball;

//textures
var aqua;
var red;
var green;
var pure;
var planet;
var stars;

//font
var font;

function preload()
{
    aqua = loadImage('images/aqua.jpg');
    red = loadImage('images/red.jpg');
    green = loadImage('images/green.jpg');
    pure = loadImage('images/purered.png');
    stars = loadImage('images/stars.jpg');
    planet = loadModel('images/planet.obj', true);
    font = loadFont('fonts/04B_30__.TTF');
}

function setup()
{
    createCanvas(800,600,WEBGL);

    //planet
    planetModel = new Planets(50, -50, 0.02, 0.02, 0.02);

    ball = new Sphere(-250, 160, 0.05, 0.05, 0.05, 45);
    
}

function draw()
{
    background(0);

    fill(255);
    textFont(font);
    textSize(28);
    text('Isabelle Pape',90,290);

    push();
    noStroke();
    translate(0,0,-75);
    texture(stars);
    plane(800,600);
    textFont(font);
    textSize(40);
    text('Any Space?',-420,-290);
    pop();

    //planet
    planetModel.draw();

    texture(green);
    ball.draw();

}