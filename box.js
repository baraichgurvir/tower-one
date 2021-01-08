class Box {
    constructor(x, y, width, height, angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        var red = Math.floor(random(0, 255))
        var green = Math.floor(random(0, 255))
        var blue = Math.floor(random(0, 255))
        var angle = this.body.angle;
        push();
        strokeWeight(0.75)
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(red, green, blue)
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}