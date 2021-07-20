
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var side1,side2,side3;

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,680,800,20);
	side1 = new Dustbin(550,620,20,100);
  side2 = new Dustbin(610,660,100,20);
  side3 = new Dustbin(670,620,20,100);
  ball = new Ball(100,600,10);
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  Engine.update(engine);
  drawSprites();

  ground.display();
  side1.display();
  side2.display();
  side3.display();
  ball.display();

  //keyPressed();
}

function keyPressed() {
  if(keyCode===UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x:15,y: -15});
  }
}





