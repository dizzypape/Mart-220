class Planets extends threeD
{
    constructor(x, y, speedX, speedY, speedZ)
    {
        super(x, y, speedX, speedY, speedZ);
    }

    draw()
    {
        push();
        super.moveShape();
        texture(aqua);
        noStroke();
        directionalLight(255, 255, 255, 70, 0, -40);
        pointLight(255, 255, 255, 100, 300,);
        model(planet);
        texture(red);
        translate(150,-100);
        rotateX(frameCount * 0.01);
        noStroke();
        sphere(25);
        pop();
    }
}