class Torus extends threeD
{
    constructor(x, y, speedX, speedY, speedZ, radius, tubeRadius)
    {
        super(x, y, speedX, speedY, speedZ);
        this.radius = radius;
        this.tubeRadius = tubeRadius;
    }

    draw()
    {
        push();
        super.moveShape();
        texture(tube);
        torus(this.radius, this.tubeRadius);
        pop();
    }
}