var pacman;
var wak;
var maze;
var font;

var ghosts = [];
var ghost1, ghost2, ghost3, ghost4;

var x1 = -200; 
var x2 = -200;
var x3 = 200; 
var x4 = 200;
var y1 = -150; 
var y3 = -150;
var y2 = 150; 
var y4 = 150;

var pacpwr = [];
var pwr1, pwr2, pwr3, pwr4;

function preload()
{
    pac = loadModel('images/monster.obj', true);
    wak = loadImage('images/wak.jpg');
    ghost = loadImage('images/ghost.png');
    maze = loadImage('images/maze.png');
    font = loadFont('fonts/Prisma.ttf');

}

function setup()
{
    createCanvas(800,600,WEBGL);

    ghost1 = new Box(x1, y1, 0, 0, random(0.005,0.01), 45, 45);
    ghost2 = new Box(x2, y2, 0, 0, random(0.005,0.01), 45, 45);
    ghost3 = new Box(x3, y3, 0, 0, random(0.005,0.01), 45, 45);
    ghost4 = new Box(x4, y4, 0, 0, random(0.005,0.01), 45, 45);

    pwr1 = new Sphere(-350, -250, random(0.01,0.04), random(0.01,0.04), random(0.01,0.04), 20);
    pwr2 = new Sphere(-350, 250, random(0.01,0.04), random(0.01,0.04), random(0.01,0.04), 20);
    pwr3 = new Sphere(350, -250, random(0.01,0.04), random(0.01,0.04), random(0.01,0.04), 20);
    pwr4 = new Sphere(350, 250, random(0.01,0.04), random(0.01,0.04), random(0.01,0.04), 20);

    pacman = new Pac(0, 0, 0.01, 0.01, 0.01);


    ghosts[0] = ghost1;
    ghosts[1] = ghost2;
    ghosts[2] = ghost3;
    ghosts[3] = ghost4;

    pacpwr[0] = pwr1;
    pacpwr[1] = pwr2;
    pacpwr[2] = pwr3;
    pacpwr[3] = pwr4;
}

function draw()
{
    //background
    background(0);
    push();
    translate(0,0,-75);
    texture(maze);
    plane(800,600);
    textFont(font);
    textSize(90);
    text('PacMonster',-300,-250);
    pop();
    
    //title & name
    fill(255);
    textFont(font);
    textSize(32);
    text('Isabelle Pape',-390,290);

    //pacman
    pacman.draw();

    noStroke();

    //power pellets
    for(var i = 0; i < pacpwr.length; i++)
    {
        pacpwr[i].draw();
    }

    //ghosts
    for(var i = 0; i < ghosts.length; i++)
    {
        rotateZ(frameCount * 0.01);
        ghosts[i].draw();
    }

    
}


function mouseClicked()
    {
        if (x1 === -200 && x2 === -200) 
        {
            x1 = random(-200,-50);
            x2 = random(-200,-50);
        } 
        else 
        {
            x1 = -200;
            x2 = -200;
        }

    }
