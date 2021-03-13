
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world;


function setup() {
	createCanvas(800, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper = new Paper(100,300,10);


ground = new Ground (400,380,800,20);

leftside = new Dustbin (550,320,20,100);
bottom = new Dustbin ( 610,360,100,20);
rightside = new Dustbin(670,320,20,100)

	
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);


  paper.display();
  leftside.display();
  bottom.display();
  rightside.display();
  drawSprites()
 
}
function keyPressed(){
  if(keyCode === UP_ARROW);
  Matter.Body.applyFroce(paper.body,paper.body.position,{x:85,y:-85})
}


