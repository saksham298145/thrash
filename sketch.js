const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine
let world
var ball
var groundObj
var right
var left
function setup() {
	createCanvas(1500,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	
	restitution:0.3,
	friction:0,
	density:1.2
}
ball=Bodies.circle(20,699,30,ball_options)
groundObj =new Ground(width/2,700,width,20);
right = new Ground(1400,650,20,120);
left = new Ground(1200,650,20,120);
World.add(world,ball)	
	
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine)
ellipse(ball.position.x,ball.position.y,30)
  groundObj.display()
  right.display()
  left.display()
}


function keyPressed(){
if (keyCode===UP_ARROW){
Matter.Body.applyForce(ball,{x:0,y:0},{x:85,y:-85})
}
}