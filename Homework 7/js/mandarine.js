class mandarine
{

    constructor(mandX,mandY,mandD,redColor,greenColor,blueColor)
    {
        this.mandX = mandX;
        this.mandY = mandY;
        this.mandD = mandD;
        this.redColor = redColor;
        this.greenColor = greenColor;
        this.blueColor = blueColor;

    }

    getX()
    {
        return this.mandX;
    }
    
    setX(mandX)
    {
        this.mandX = mandX;
    }

    getY()
    {
        return this.mandY;
    }

    setY(mandY)
    {
        this.mandY = mandY;
    }

    getD()
    {
        return this.mandD;
    }

    setD(mandD)
    {
        this.mandD = mandD;
    }

    draw()
    {
        fill(this.redColor,this.greenColor,this.blueColor);
        circle(this.mandX,this.mandY,this.mandD);

    }

    randomOrange()
    {
        this.mandX = random(90,this.mandX);
        this.mandY = random(310,this.mandY);
    }
}