class Blocks {

    constructor(x,y,width,height) {

        var options = {

            'restitution' :0.8,
            'friction' :1.0,
            'density' :20,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body); 
    }
    Display(){

        var pos = this.body.position;
        var angle = this.body.angle;
        Push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }

}