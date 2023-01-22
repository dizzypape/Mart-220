function setup() 
{
    createCanvas(400, 400);
}
  
  function draw() 
{
    background(225);

//plate
    stroke(0);
    fill(255);
    ellipse(200, 300, 250, 100);
    ellipse(200, 300, 200, 70);

//grapes
    fill(139, 0, 139);
    ellipse(170, 300, 30, 20);
    ellipse(150, 320, 30, 20);
    ellipse(130, 310, 30, 20);
    fill(96, 227, 84);
    ellipse(170, 320, 30, 20);
    ellipse(150, 300, 30, 20);
    ellipse(190, 310, 30, 20);

//pineapple
    fill(249, 254, 106);
    triangle(170, 275, 210, 250, 225, 275);
    triangle(155, 285, 155, 255, 195, 280);
    triangle(103, 285, 148, 253, 153, 290);

//watermelon
    fill(220, 12, 116);
    triangle(200, 290, 260, 240, 290, 300);
    fill(0);
    //seeds
    ellipse(255, 265, 7.5, 5);
    ellipse(270, 285, 7.5, 5);
    ellipse(235, 280, 7.5, 5);

//mandarine orange
    fill(255, 169, 20);
    ellipse(240, 315, 55, 43);
}