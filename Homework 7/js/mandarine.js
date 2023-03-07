class mandarine
{

    constructor(mandX,mandY,mandW,mandH,redColor,greenColor,blueColor)
    {
        this.mandX = mandX;
        this.mandY = mandY;
        this.mandW = mandW;
        this.mandH = mandH;
        this.redColor = redColor;
        this.greenColor = greenColor;
        this.blueColor = blueColor;

    }


    draw()
    {
        fill(this.redColor,this.greenColor,this.blueColor);
        ellipse(this.mandX,this.mandY,this.mandW,this.mandH);

    }

    randomOrange()
    {
        this.mandX = random(90,this.mandX);
        this.mandY = random(260,this.mandY);

    }
}