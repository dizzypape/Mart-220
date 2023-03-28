class oilbarrel
{
    constructor()
    {
        this.oil = oil;
    }

    draw()
    {
        this.oil = createSprite(random(50, 790),random(50, 590), 100, 100);
        this.oil.img = "./images/oilbarrel.jpg";
        this.oil.scale = 0.10;
        this.oil.diameter = 75;
    }
}