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
        texture(ball);
        sphere(this.radius);
        pop();
    }
}