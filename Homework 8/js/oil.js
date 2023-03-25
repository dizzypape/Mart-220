class oilbarrel
{
    constructor()
    {
        this.oil = oil;
    }

    loadImage()
    {
        this.oil = createSprite(random(650, width),random(50, 245), 100,100);
        this.oil.img = "./images/oilbarrel.jpg";
        this.oil.scale = 0.10;
        this.oil.diameter = 75;
    }
}