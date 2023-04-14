class Pac extends threeD
{
    constructor(x, y, speedX, speedY, speedZ)
    {
        super(x, y, speedX, speedY, speedZ);
    }

    draw()
    {
        push();
        super.moveShape();
        texture(wak);
        directionalLight(252, 248, 3, 400, 300, -100);
        pointLight(255, 255, 255);
        model(pac);
        pop();
    }
}