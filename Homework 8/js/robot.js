class robot

{
    // constructor
    constructor(x, y, w, h)
    {
        // properties  
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.myRobby = [];
        this.currentAnimation;
        this.createAnimation();
        this.i = 0;
        this.currentFrameCount = 0;
        this.direction  = "";
    }

    // functions
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

setCurrentFrameCount(currentFrameCount)
{
    this.currentFrameCount = currentFrameCount;
}
    
createAnimation()
{
    this.currentAnimation = createSprite(300, 250);
}

loadAnimation(animationType, fileNames)
{
    this.currentAnimation.addAnimation(animationType, fileNames[0], fileNames[fileNames.length - 1]);
}

drawAnimation(animationType)
{
    this.currentAnimation.frameDelay = 200;
    this.currentAnimation.scale = .25
    this.currentAnimation.changeAnimation(animationType);
    if(animationType == 'walk' && this.direction == 'forward')
    {
        this.currentAnimation.direction = 0;
        this.currentAnimation.mirror.x = false;
        this.currentAnimation.speed = 5;
    }
    else if(animationType == 'walk' && this.direction == 'reverse')
    {
        this.currentAnimation.mirror.x = true;
        this.currentAnimation.direction = 180;
        this.currentAnimation.speed = 5;
    }
    else if(animationType == 'walk' && this.direction == 'up')
    {
        this.currentAnimation.mirror.x = false;
        this.currentAnimation.direction = 270;
        this.currentAnimation.speed = 5;
    }
    else if(animationType == 'walk' && this.direction == 'down')
    {
        this.currentAnimation.mirror.x = false;
        this.currentAnimation.direction = 90;
        this.currentAnimation.speed = 5;
    }
    else
    {
        this.currentAnimation.velocity.x = 0;
        this.currentAnimation.velocity.y = 0;
    }
}

incrementIndex()
{
    if(this.currentFrameCount % 200 == 0)
    {
        this.i++;
    }

    if(this.i >= this.fileNames.length)
    {
        this.i = 0;
    }
}

updatePosition(direction)
{
    this.direction = direction;
}

isColliding(myImage) 
{
    return this.currentAnimation.collide(myImage);
}

}