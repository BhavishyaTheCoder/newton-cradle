class Bob {
    constructor(x,y){
        var options ={
            //isStatic:false
            restitution:1,
            friction:0,
            frictionAir:0
        }
        this.body = Bodies.circle(x,y,35,options)

        this.radius = 25;

        World.add(world,this.body);
    }
    display(){

     var pos = this.body.position;
     
        fill("red")
        ellipseMode(RADIUS)
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}
