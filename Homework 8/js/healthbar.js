class healthbar 
{
    constructor(x,y,w,h,redColor,greenColor,blueColor)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.redColor = redColor;
        this.greenColor = greenColor;
        this.blueColor = blueColor;
    }


    draw()
    {
        fill(this.redColor,this.greenColor,this.blueColor);
        rect(this.x,this.y,this.w,this.h);
    }
}
