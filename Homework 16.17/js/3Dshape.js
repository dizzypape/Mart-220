class threeD
{
    constructor(x, y, speedX, speedY, speedZ)
    {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.speedZ = speedZ;
    }

    moveShape()
    {
        translate(this.x,this.y);
        rotateX(frameCount * this.speedX);
        rotateY(frameCount * this.speedY);
        rotateZ(frameCount * this.speedZ);

    }
}