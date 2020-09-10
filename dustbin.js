class Dustbin {

    constructor (x,y) {
        var options= {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
        
        } 

    this.x = x;
    this.y = y;
    this.leftwallbody = Bodies.rectangle(this.x, this.y, 20, 100);
    this.basewallbody = Bodies.rectangle(this.x + 75, this.y + 40, 170, 20);
    this.rightwallbody = Bodies.rectangle(this.x + 170, this.y, 20, 200);

        }    

        display()  {
        var posleft = this.leftwallbody.position;
        var posbottom = this.basewallbody.position;
        var posright = this.rightwallbody.position;

        stroke("green"); 
        fill("yellow");

        rect(this.x, this.y, 20, 100);
        rect(this.x + 75, this.y + 40, 170, 20);
        rect(this.x + 170, this.y, 20, 100);
        
        }

    
}