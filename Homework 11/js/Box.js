class Box extends threeD
{
    constructor(x, y, speedX, speedY, speedZ, width, height)
    {
        super(x, y, speedX, speedY, speedZ);
        this.width = width;
        this.height = height;
    }

    draw()
    {
        push();
        super.moveShape();
        texture(tv);
        box(this.width,this.height);
        pop();
    }
}