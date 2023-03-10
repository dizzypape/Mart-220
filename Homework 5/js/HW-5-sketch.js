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
var seedx1 = 255;
var seedy1 = 265;
var seedx2 = 270;
var seedy2 = 285;
var seedx3 = 235;
var seedy3 = 280;

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
var mandarineOrange;

//timer var
var timer = 0;

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

function preload()
{
    cloudimg = loadImage("./images/cloud-rain.png");

    rainimg = loadImage("./images/raindrops.png");

    myFont = loadFont("./fonts/adelia.otf");

    idleAnimation = loadStrings("./images/idle/idle.txt");
    
    runAnimation = loadStrings("./images/run/run.txt");
}

function setup() 
{
    createCanvas(400, 400);

    setInterval(timerDisplay, 100);

//adventurer sally
    idleSally = new sally(idleAnimation, 10, 315, 69.333, 75.667);
    idleSally.animate();

    runSally = new sally(runAnimation, 10,315, 69.333, 75.667);
    runSally.animate();


  //mandarine orange
    mandarineOrange = new mandarine(315,325,55,43,221,187,130);

    mandarineOrange.randomOrange();
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

//timer
//    drawTimer();

//grape movement
    grapeMovement();


//pineapple
    fill(209, 211, 160);
    triangle(170, 275, 210, 250, 225, 275);
    triangle(155, 285, 155, 255, 195, 280);
    triangle(103, 285, 148, 253, 153, 290);

//watermelon
    fill(195, 127, 161);
    triangle(200, 290, 260, 240, 290, 300);
        //moving seeds
            //right seed
        if(keyIsDown (up))
        {
            seedy3 -= 5;
        }
        if(keyIsDown (down))
        {
            seedy3 += 5;
        }
        if(keyIsDown (left))
        {
            seedx3 -=5;
        }
        if(keyIsDown (right))
        {
            seedx3 += 5;
        }

            //left seed
        if(keyIsDown (eight))
        {
            seedy2 -= 5;
        }
        if(keyIsDown (five))
        {
            seedy2 += 5;
        }
        if(keyIsDown (four))
        {
            seedx2 -=5;
        }
        if(keyIsDown (six))
        {
            seedx2 += 5;
        }


    //seeds
    fill(44, 43, 43);
    ellipse(seedx1, seedy1, 7.5, 5);
    ellipse(seedx2, seedy2, 7.5, 5);
    ellipse(seedx3, seedy3, 7.5, 5);

//mandarine
    mandarineOrange.draw();
    

//Adventure Girl Sally

    moveSallymove();


    //objectSally.draw(i);
    
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
