class Paper {

constructor (x, y, r) {
var options= {
isStatic:false,
restitution:0,
friction:0,
density:1.2

} 

this.body = Bodies.circle(x, y, r, options);
this.r = r;
this.x = x;
this.y = y;
World.add(world, this.body);
}    

display()  {
var pos = this.body.position;
ellipseMode(CENTER);
      fill("brown");
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('red')
      //rectMode(CENTER)
      //rect(0, 0, this.width, this.height);
      ellipse(pos.x, pos.y, this.r, this.r);
      pop();
    
}

}