class seeds
{
    constructor(seedX,seedY,seedD,redColor,greenColor,blueColor)
    {
        this.seedX = seedX;
        this.seedY = seedY;
        this.seedD = seedD;
        this.redColor = redColor;
        this.greenColor = greenColor;
        this.blueColor = blueColor;
    }

    getX1()
    {
        return this.seedX;
    }
    
    setX1(seedX)
    {
        this.seedX = seedX;
    }

    getY1()
    {
        return this.seedY;
    }

    setY1(seedY)
    {
        this.seedY = seedY;
    }

    getD1()
    {
        return this.seedD;
    }

    setD1(seedD)
    {
        this.seedD = seedD;
    }


    draw()
    {
        fill(this.redColor,this.greenColor,this.blueColor);
        circle(this.seedX, this.seedY, this.seedD);
    }

    randomSeed()
    {
        this.seedX = random(90,this.seedX);
        this.seedY = random(300,this.seedY);
    }
}
