
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	hammer =new hammer(100,100)
    
	rubber=new rubber(x,y,r);

	Stone =new Stone(200,300,30,30);

	//Create the Bodies Here.
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  hammer.display();
  rubber.display();
  Stone.display();
  
  drawSprites();
 
}



