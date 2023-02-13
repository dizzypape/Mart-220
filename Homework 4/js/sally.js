class sally
{

    constructor(idleAnimation)
    {
        this.idleAnimation = idleAnimation;
        this.adventureGirl = [];
    }


    draw(i)
    {
        image(this.adventureGirl[i],sallyX,sallyY,80.125,67.75);
    }

    idle()
    {
        for(var s = 0; s < idleAnimation.length; s++)
        {
            character = loadImage(this.idleAnimation[s]);

            this.adventureGirl[s] = character;
        }
    }

    /*
    movingsally()
    {

    }

    runsallyrun()
    {
        if(keyIsDown (w))
        {
            sallyY -= 5;
        }
        if(keyIsDown (s))
        {
            sallyY += 5;
        }
        if(keyIsDown (a))
        {
            sallyX -=5;
        }
        if(keyIsDown (d))
        {
            sallyX += 5;
        }
    }
    */
}