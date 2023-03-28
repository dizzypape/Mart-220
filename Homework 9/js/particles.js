// Daniel Shiffman
// http://codingtra.in

// Simple Particle System
// https://youtu.be/UcdigVaIYAk

class Particle
{
    constructor(x,y)
    {
        this.x = x;
        this.y = y;
        this.vx = random(-1, 1);
        this.vy = random(-5, -1);
        this.alpha = 255;
    }

    finished()
    {
        return this.alpha < 0;
    }

    update()
    {
        this.x += this.vx;
        this.y += this.vy;
        this.alpha -= 5;
    }

    show()
    {
        noStroke();
        //stroke(255);
        fill(88, 24, 69, this.alpha);
        ellipse(this.x, this.y, 5);
    }

}