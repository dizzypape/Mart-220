class Box extends threeD
{
    constructor(x, y, speedX, speedY, speedZ, width, height)
    {
        super(x, y, speedX, speedY, speedZ);
        this.width = width;
        this.height = height;
    }

    getX()
    {
        return this.x;
    
    }

    setX(x)
    {
        this.x = x;
    }

    getY()
    {
        return this.y;
    }

    setY(y)
    {
        this.y = y;
    }

    draw()
    {
        push();
        super.moveShape();
        texture(ghost);
        directionalLight(3, 144, 252, 400, 300, -200);
        pointLight(255,255,255);
        box(this.width,this.height);
        pop();
    }
}