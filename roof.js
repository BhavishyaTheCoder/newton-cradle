class Roof {
    constructor(x, y, width, height) {
  
      var options ={
        isStatic : true,
     
      }
  
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
  
      World.add(world,this.body);
    }
  
    display(){
      var position = this.body.position;
  
      rectMode(CENTER);
      fill("cyan");
      stroke("black");
      strokeWeight(3);
      rect(position.x,position.y,this.width,this.height);
    }
  }
  