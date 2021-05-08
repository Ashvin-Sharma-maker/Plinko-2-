class Yellowline{
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      World.add(world, this.body);
    }
    display(){
      rectMode(CENTER);
      fill("yellow");
    rect(500,500,1000,10);
    }
  };