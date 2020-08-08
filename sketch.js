const Engine = Matter.Engine; 

const World = Matter.World;

const Bodies = Matter.Bodies;

const Body = Matter.Body;

const Constraint = Matter.Constraint;

var roof;

var rope1,rope2,rope3,rope4,rope5;

var bobOject1,bobOject2,bobOject3,bobOject4,bobOject5;

function setup() {
	createCanvas(1366,653);

  bobDiameter = 40;

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(650,180,225,22);
	bobOject1 = new Bob(650,380,20);
	bobOject2 = new Bob(569,380,20);
	bobOject3 = new Bob(609,380,20);
	bobOject4 = new Bob(691,380,20);
  bobOject5 = new Bob(732,380,20);
  rope1 = new Rope(bobOject2.body,roof.body,-bobDiameter*2,0);
  rope2 = new Rope(bobOject1.body,roof.body,bobDiameter*0,0);
  rope3 = new Rope(bobOject3.body,roof.body,-bobDiameter*1,0);
  rope4 = new Rope(bobOject4.body,roof.body,bobDiameter*1,0);
  rope5 = new Rope(bobOject5.body,roof.body,bobDiameter*2,0);
  
}


function draw() {
  rectMode(CENTER);

  Engine.update(engine);  

  background(233,231,233);
  
  textSize(50);
  textFont("Times New Roman");
  fill("black");
  text("NEWTON’S CRADLE",430,90);
  textSize(30);
  text("Press 1 To Move 1 Bob",530,480);
  text("Press 1 & 2 To Move 2 Bobs",500,520);
  text("Press 3 To Move 1 Bob At Opposite Sides",410,560);
  text("Press 4 To Move 2 Bobs At Opposite Sides",405,600);
  text("MADE BY HRITIK ASWANI",950,600)
  text("Press CTRL + R To Reset Newton's Cradle",410,640);
  textSize(20);
  text("Note : Make Sure You Are Resetting Newton's Cradle",800,300);
  text("Before Pressing Any Key",800,325);

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  bobOject1.display();
  bobOject2.display();
  bobOject3.display();
  bobOject4.display();
  bobOject5.display();

}

function keyPressed(){
  if(keyCode === 49){
    Matter.Body.applyForce(bobOject2.body,bobOject2.body.position,{x:-100,y:100});
}
if(keyCode === 50 && 49){
  Matter.Body.applyForce(bobOject3.body,bobOject3.body.position,{x:-80,y:100});
}
if(keyCode === 51){
  Matter.Body.applyForce(bobOject2.body,bobOject2.body.position,{x:-50,y:100});
  Matter.Body.applyForce(bobOject5.body,bobOject5.body.position,{x:50,y:100});
}
if(keyCode === 52){
  Matter.Body.applyForce(bobOject2.body,bobOject2.body.position,{x:-50,y:100});
  Matter.Body.applyForce(bobOject5.body,bobOject5.body.position,{x:50,y:100});
  Matter.Body.applyForce(bobOject3.body,bobOject2.body.position,{x:-80,y:100});
  Matter.Body.applyForce(bobOject4.body,bobOject5.body.position,{x:85,y:100});
}
}


