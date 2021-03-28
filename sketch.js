
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var paperBall;
var dustbin1;
var ground;

function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;

	
	paperBall = new Paper(200,450, 70);
	dustbin1 = new Dustbin(1000, 650);
	ground = new Ground(600,height - 30,1600,20);
	launcher = new Launcher(paperBall.body,{x:500, y:450});

	Engine.run(engine);
}


function draw() {
  Engine.update(engine);
  background(255);
  paperBall.display();
  dustbin1.display();
  ground.display();
  launcher.display();
  drawSprites();
}

function mouseDragged(){
	Matter.Body.setPosition(paperBall.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
	launcher.fly();
}