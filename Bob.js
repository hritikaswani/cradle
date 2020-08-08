class Bob {
    constructor(x, y,radius) {
      var options= {
         'restitution':1.1,
         'friction':0.5,
         'density':1.3
        }
      this.body = Bodies.circle(x, y,radius,options);
      this.radius = radius;
      
      World.add(world, this.body);

    }
    display(){
      var pos = this.body.position;
      ellipseMode(RADIUS);
      fill("blue");
      strokeWeight(2);
      stroke("black");
      ellipse(pos.x, pos.y,this.radius);
    }
  };
   