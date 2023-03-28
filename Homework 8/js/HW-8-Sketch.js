//variables
var robby;
var idlePaths = [];
var runRobby;
var runPaths = [];
var gear = [];
var oil;
var healthBar = [];
var i = 0;
var points = 0;
var wrench = [];
var ground = rect(0,590,width,10,'s');

function preload() 
{
    idlePaths = loadStrings("./images/idle/idle.txt");
    runPaths = loadStrings("./images/run/run.txt");
}

function setup()
{
    createCanvas(800,600);

    world.gravity.y = 10;

    ground = createSprite(400,595,width,10,'s');

    gear[0] = createSprite(random(650, 780),random(50, 525),100,100, 'static');
    gear[0].img = "./images/gear.png";
    gear[0].scale = 0.10;
    gear[0].diameter = 75;

    gear[1] = createSprite(random(50, 150),random(50, 525),100,100, 'static');
    gear[1].img = "./images/gear.png";
    gear[1].scale = 0.10;
    gear[1].diameter = 75;

    gear[2] = createSprite(random(315, 550),random(50, 525),100,100, 'static');
    gear[2].img = "./images/gear.png";
    gear[2].scale = 0.10;
    gear[2].diameter = 75;

    oil = createSprite(random(50, 200),random(400, 550), 100,100, 's');
    oil.img = "./images/oilbarrel.jpg";
    oil.scale = 0.10;
    oil.diameter = 0.5;
    oil.rotationLock = true;

    wrench[0] = createSprite(random(20,200),300,100,100,'d');
    wrench[0].img = "./images/wrench.png";
    wrench[0].scale = 0.10;
    wrench[0].diameter = 50;
    wrench[0].rotationLock = true;
    wrench[0].bounciness = 1;

    wrench[1] = createSprite(random(300,500),300,100,100,'d');
    wrench[1].img = "./images/wrench.png";
    wrench[1].scale = 0.10;
    wrench[1].diameter = 50;
    wrench[1].rotationLock = true;
    wrench[1].bounciness = 1;

    wrench[2] = createSprite(650,300,100,100,'d');
    wrench[2].img = "./images/wrench.png";
    wrench[2].scale = 0.10;
    wrench[2].diameter = 50;
    wrench[2].rotationLock = true;
    wrench[2].bounciness = 1;

    robby = new robot(0, 0, 150, 150);
    robby.diameter = 150;
    robby.rotationLock = true;
    robby.loadAnimation('idle', idlePaths);
    robby.loadAnimation('walk', runPaths);

    healthBar[i] = new healthbar(75,575,160,12,20,247,31);
}

function draw()
{
    background(225);

    createBoarder();

    //explanation
    textSize(14);
    text('Collect the oil barrels and avoid the wrenches! Be careful, the gears might get in the way... Use W, A, S, and D to move!', 20,20);

     //health bar
     fill(0);
     text('Health:',10,585);
     textSize(16);
     stroke(0);
     fill(225);
     rect(75,575,150,12);
     healthBar[i].draw();

     //score
     fill(0);
     textSize(20);
     text('Score: ' + points, 10, 560);

    if(kb.pressing('d'))
    {
        robby.updatePosition('forward');
        robby.drawAnimation('walk');
        if(robby.isColliding(gear[0],gear[1],gear[2]))
        {
            robby.drawAnimation('idle');
            robby.updatePosition('idle');           
        }
    }

    else if(kb.pressing('a'))
    {
        robby.updatePosition('reverse');
        robby.drawAnimation('walk');
        if(robby.isColliding(gear[0],gear[1],gear[2]))
        {
            robby.drawAnimation('idle');
            robby.updatePosition('idle');
        }
    }
    else if(kb.pressing('w'))
    {
        robby.updatePosition('up');
        robby.drawAnimation('walk');
        if(robby.isColliding(gear[0],gear[1],gear[2]))
        {
            robby.drawAnimation('idle');
            robby.updatePosition('idle');
        }
    }

    else if(kb.pressing('s'))
    {
        robby.updatePosition('down');
        robby.drawAnimation('walk');
        if(robby.isColliding(gear[0],gear[1],gear[2]))
        {
            robby.drawAnimation('idle');
            robby.updatePosition('idle');
        }
    }
    
    else
    {
        robby.drawAnimation('idle');
    }   

    gear.debug = mouseIsPressed;
    
    if(robby.isColliding(oil))
    {
        oil.pos = {x: random(50, 750), y: random(50, 550)};
        points += 2;
        healthBar[i].w += 10;       
    }

    if(robby.isColliding(wrench[0]))
    {
        points -= 2;
        fill(236,247,0);
        healthBar[i].w -= 20;
    }
    else if(robby.isColliding(wrench[1]))
    {
        points -= 2;
        fill(236,247,0);
        healthBar[i].w -= 20;
    }
    else if(robby.isColliding(wrench[2]))
    {
        points -= 2;
        fill(236,247,0);
        healthBar[i].w -= 20;
    }


    if(wrench[i].collided(ground))
    {
        wrench[i].vel.y = -12;
    }

    if(points == 10)
    {
        fill(255);
        rect(0,0,800,600);
        fill(0);
        textSize(32);
        text('You win!',350,250);
    }
    else if(healthBar[i].w <= 0)
    {
        fill(0);
        rect(0,0,800,600);
        fill(255);
        textSize(32);
        text('You died.',350,250);
    }
    
}

function createBoarder()
{
    //top
    fill(0);
    rect(0,0,width,10);
    //left
    rect(0,0,10,height);
    //right
    rect(790,0,10,height);
}