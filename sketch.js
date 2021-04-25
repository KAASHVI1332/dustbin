
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper,paperimg;

function preload(){
	paperimg=loadImage("paper.png");
}
function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

paper=createSprite(300,600,30,30);
paper.addImage("paper.png",paperimg);
paper.scale=0.5;



	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
drawSprites();
}

