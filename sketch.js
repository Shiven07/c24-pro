var paper, ground, leftsidebox, rightsidebox, basebox;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

	engine = Engine.create();
	world = engine.world;

	//ellipse(56, 46, 55, 55);
  //Matter.Bodies.circle(200, 200, 30)
	//Create the Bodies Here.
  ground = new Ground(500,height,1000,20)

  //leftsidebox=createSprite(500, 610, 20, 100);
	//leftsidebox.shapeColor=color(255, 0, 0);

	//basebox=createSprite(610, 650, 170, 20);
	//basebox.shapeColor=color(255, 0, 0);

	//rightsidebox=createSprite(675, 610, 20, 100);
  //rightsidebox.shapeColor=color(255, 0, 0);
  
  paperObject = new Paper(100, 300, 30);

  dustbinobject = new Dustbin(600, 600);
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paperObject.display();
  dustbinobject.display();
  drawSprites();
 
}


function keypressed()  {
if (keyCode === UP_ARROW) {

Matter.Body.applyForce(paperObject.body,paperObject.body.position, {x:85,y:-85});

}

}
