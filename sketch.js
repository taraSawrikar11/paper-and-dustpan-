
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bottumBox
var left;
var right;
var ball;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	ground = createSprite(500,700,1000,50);
	ground.shapeColor = ("white");

	ball=createSprite(100,665,25,[25],[25]);
	ball.shapeColor = ("blue");

	bottumBox=createSprite(600,665,200,20);
	bottumBox.shapeColor = (rgb(139,69,19));

	left=createSprite(510,625,20,100);
	left.shapeColor = (rgb(139,69,19));

	right=createSprite(690,625,20,100);
	right.shapeColor = (rgb(139,69,19));

	world=right.world;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball.velocityY = ball.velocityY +0.8;
  ball.collide(ground);
  ball.collide(right);
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === 32) {
		ball.velocityY = -13;
		ball.velocityX = 20;	
//Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});

	}

}


