class Sphere extends threeD
{
    constructor(x, y, speedX, speedY, speedZ, radius)
    {
        super(x, y, speedX, speedY, speedZ);
        this.radius = radius;
    }

    draw()
    {
        push();
        super.moveShape();
        noStroke();
        directionalLight(255, 255, 255, 0, 0, -40);
        pointLight(255, 255, 255, 0, 0);
        sphere(this.radius);
        pop();
    }
}