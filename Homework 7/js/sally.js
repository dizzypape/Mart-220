class sally
{

    constructor(idleAnimation, x, y, w, h)
    {
        this.idleAnimation = idleAnimation;
        this.sallyGirl = [];
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
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
    
    draw(i)
    {
        image(this.sallyGirl[i], this.x, this.y, this.w, this.h);
    }

    animate()
    {
        for(var s = 0; s < idleAnimation.length; s++)
        {
            character = loadImage(this.idleAnimation[s]);

            this.sallyGirl[s] = character;
        }
    }

    checkCollision(mandarineOrange)
        {
            return collideRectCircle(this.x, this.y, this.w, this.h, 
            mandarineOrange.getX(), mandarineOrange.getY(), mandarineOrange.getD());
        }

    chkCollision2(watSeeds)
        {
            return collideRectCircle(this.x, this.y, this.w, this.h,
            watSeeds.getX1(), watSeeds.getY1(), watSeeds.getD1());
        }

    chkCollision3(watSeeds2)
        {
            return collideRectCircle(this.x, this.y, this.w, this.h,
            watSeeds2.getX1(), watSeeds2.getY1(), watSeeds2.getD1());
        }

    chkCollision4(watSeeds3)
        {
            return collideRectCircle(this.x, this.y, this.w, this.h,
            watSeeds3.getX1(), watSeeds3.getY1(), watSeeds3.getD1());
        }
}

