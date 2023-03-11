//text vars
var nametxt = 15;
var titletxt = 32;
var myFont;

//image vars
var cloudimg;
var rainimg;
var rainy = 170;
var movement = 2;

//key vars
var w = 87;
var s = 83;
var a = 65;
var d = 68;

var up = 38;
var down = 40;
var left = 37;
var right = 39;
//number pad
var eight = 104;
var five = 101;
var four = 100;
var six = 102;

//seeds vars
var watSeeds;
var watSeeds2;
var watSeeds3;

// green grape movements
var greenx1 = 170;
var greeny1 = 320;
var greenx2 = 150;
var greeny2 = 300;
var greenx3 = 190;
var greeny3 = 310;
var grapeMovement1 = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 1);
var grapeMovement2 = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
var grapeMovement3 = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);

//purple grape movements
var purplex1 = 170;
var purpley1 = 300;
var purplex2 = 150;
var purpley2 = 320;
var purplex3 = 130;
var purpley3 = 310;
var grapeMovement4 = Math.floor(Math.random() * (Math.floor(Math.random() * 4)) + 1);
var grapeMovement5 = Math.floor(Math.random() * (Math.floor(Math.random() * 8)) + 1);
var grapeMovement6 = Math.floor(Math.random() * (Math.floor(Math.random() * 6)) + 1);

//mandarine orange
var mandarineOrange = 1;

//pineapple
var pineApple;

//timer var
var timer = 0;

//point text
var points = 0;

//character var
var character;
var sallyGirl = [];
var objectSally;
var i = 0;
var idleAnimation = [];
var runAnimation;
var runAnimation;
var idleSally;
var runSally;

//sound var
var ateGood;
var ateBad;
var chomp;
var backgroundFruit;

function preload()
{
    cloudimg = loadImage("./images/cloud-rain.png");

    rainimg = loadImage("./images/raindrops.png");

    myFont = loadFont("./fonts/adelia.otf");

    idleAnimation = loadStrings("./images/idle/idle.txt");
    
    runAnimation = loadStrings("./images/run/run.txt");

    backgroundFruit = loadSound("./music/backgroundfruit.mp3")

    ateGood = loadSound("./music/ategood.mp3");

    ateBad = loadSound("./music/atebad.wav");

    chomp = loadSound("./music/chomp.wav");
}

function setup() 
{
    createCanvas(400, 400);

    setInterval(timerDisplay, 50);

//adventurer sally
    idleSally = new sally(idleAnimation, 10, 315, 69.333, 75.667);
    idleSally.animate();

    runSally = new sally(runAnimation, 10,315, 69.333, 75.667);
    runSally.animate();

  //mandarine orange
    mandarineOrange = new mandarine(315,325,55,221,187,130);
    mandarineOrange.randomOrange();

  //seeds
    watSeeds = new seeds(255,265,6,245,245,220);
    watSeeds2 = new seeds(275,285,6,44,43,43);
    watSeeds3 = new seeds(280,270,6,44,43,43)
    watSeeds.randomSeed();
    watSeeds2.randomSeed();
    watSeeds3.randomSeed();
}

  function draw() 
{
    background(172, 202, 234);

//raindrops

    image(rainimg, 20, rainy);
    image(rainimg, 170, rainy);
    image(rainimg, 320, rainy);
//movement
    if(rainy <= 140 || rainy >= 225)
    {
        movement *= -1;
    }
    rainy += movement;
//clouds
    image(cloudimg, 0, 85);
    image(cloudimg, 150, 85);
    image(cloudimg, 300, 85);

//name
    fill(63, 46, 46);
    textSize(12);
    text('(Try not to hit the white seed. Press "wasd" to move.)', 10,25);
    textFont(myFont);
    textSize(nametxt);
    text('Isabelle Pape', 275, 375);
    textSize(titletxt);
    text('Mourning Fruit', 50, 75);
    


//plate
    stroke(44, 43, 43);
    fill(234, 231, 231);
    ellipse(200, 300, 250, 100);
    ellipse(200, 300, 200, 70);

//grapes
    fill(108, 63, 108);
    ellipse(purplex1, purpley1, 30, 20);
    ellipse(purplex2, purpley2, 30, 20);
    ellipse(purplex3, purpley3, 30, 20);
    fill(123, 161, 120);
    ellipse(greenx1, greeny1, 30, 20);
    ellipse(greenx2, greeny2, 30, 20);
    ellipse(greenx3, greeny3, 30, 20);

//pineapple
    fill(209, 211, 160);
    triangle(170, 275, 210, 250, 225, 275);
    triangle(155, 285, 155, 255, 195, 280);
    triangle(103, 285, 148, 253, 153, 290);

//timer
//    drawTimer();

//grape movement
    grapeMovement();

//watermelon
    fill(195, 127, 161);
    triangle(200, 290, 260, 240, 290, 300);

//mandarine
    mandarineOrange.draw();

//seeds
    watSeeds.draw();
    watSeeds2.draw();
    watSeeds3.draw();

//Adventure Girl Sally

    moveSallymove();

    if(runSally.checkCollision(mandarineOrange))
    {
        goodFood();
    }
    
    if(runSally.chkCollision2(watSeeds))
    {
        badFood();
    }
    
    if(runSally.chkCollision3(watSeeds2))
    {
        doublePoints();
    }
    
    if(runSally.chkCollision4(watSeeds3))
    {
        doublePointsv2();
    }

    if(keyIsPressed)
    {
        backgroundMusic();

    }
    
//point txt
    textSize(24);
    text('Score:' + points, 125, 380);
    setCenter(200,200);
    endGame();
    lost();
}

function moveSallymove()
{
    if (keyIsPressed)
    {
        if(key == 'd')
        {
            runSally.draw(i);
            runSally.setX(runSally.getX()+5);
            idleSally.setX(idleSally.getX()+5);
        } 
        else if(key == 'a')
        {
            runSally.draw(i);
            runSally.setX(runSally.getX()-5);
            idleSally.setX(idleSally.getX()-5);
        }

        else if(key == 'w')
        {
            runSally.draw(i);
            runSally.setY(runSally.getY()-5);
            idleSally.setY(idleSally.getY()-5);
        }

        else if(key == 's')
        {
            runSally.draw(i);
            runSally.setY(runSally.getY()+5);
            idleSally.setY(idleSally.getY()+5);
        }

        else
        {
            idleSally.draw(i);

        }
    }
else
{
    idleSally.draw(i);
}

}


function timerDisplay()
{
    timer++;

    i++
    if(i > 9)
    {
        i = 0;
    }
}


function grapeMovement()
{
//green 
    if(greenx1 >= 315 || greenx1 <= 85)
    {
        grapeMovement1 *= -1;
    }
    else if(greenx2 >= 325 || greenx2 <= 75)
    {
        grapeMovement2 *= -1;
    }
    else if (greenx3 >= 325 || greenx3 <=80)
    {
        grapeMovement3 *= -1;
    }
    greenx1 += grapeMovement1;
    
    greenx2 += grapeMovement2;

    greenx3 += grapeMovement3;

//purple
    if(purplex1 >= 325 || purplex1 <= 75)
    {
        grapeMovement4 *= -1;
    }
    else if(purplex2 >= 315 || purplex2 <= 85)
    {
        grapeMovement5 *= -1;
    }
    else if (purplex3 >= 325 || purplex3 <=80)
    {
        grapeMovement6 *= -1;
    }
    purplex1 += grapeMovement4;
    
    purplex2 += grapeMovement5;

    purplex3 += grapeMovement6;
}


function backgroundMusic()
{
    if(!backgroundFruit.isPlaying())
    {
        //backgroundFruit.play();
        backgroundFruit.loop();
        backgroundFruit.setVolume(0.6);
    }
}

function goodFood()
{
    chomp.play();
    chomp.setLoop(false);
    ateGood.play();
    ateGood.setLoop(false);
    mandarineOrange = new mandarine(620,325,55,221,187,130);
    points += 1;
}

function doublePoints()
{
    chomp.play();
    chomp.setLoop(false);
    ateGood.play();
    ateGood.setLoop(false);
    watSeeds2 = new seeds(620,285,6,44,43,43);
    points += 1;
}

function doublePointsv2()
{
    chomp.play();
    chomp.setLoop(false);
    ateGood.play();
    ateGood.setLoop(false);
    watSeeds3 = new seeds(620,270,6,44,43,43);
    points += 1;
}

function badFood()
{
    ateBad.play();
    ateBad.setLoop(false);
    chomp.play();
    chomp.setLoop(false);
    watSeeds = new seeds(620,265,6,245,245,220);
    points -= 5;
}

function endGame()
{
    if(points >= 3)
    {
    stroke(105,105,105,250);
    tint(255, 128);
    fill(240,255,255,250);
    polarPolygons(8,5,80,80);
    fill(255,255,240,250);
    polarTriangles(6,44,24);
    fill(240,255,240,250);
    polarEllipses(12,4,5,12);
    fill(0);
    textSize(36);
    text('You Win!',-100,15);
    }
}

function lost()
{
    if(points < 0)
    {
    stroke(169,169,169,250);
    tint(255, 128);
    fill(240,248,255,250);
    polarEllipses(12,50,50,100);
    fill(176,196,222,250);
    polarPentagons(10,40,55);
    fill(112,128,144,250);
    polarTriangles(8,24,20);
    fill(245,255,250,250);
    polarEllipses(6,6,6,8);
    fill(0);
    textSize(32);
    text('You Lose :(',-100,15);
    }
}

