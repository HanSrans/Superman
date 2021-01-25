const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var superman;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10;
var rope;
var ground;
function setup() {
  createCanvas(3000, 800);

  engine = Engine.create();

  world = engine.world;

  ground = new Ground(600,600,1200,20);
  Box1 = new box(900,100,70,70);
  Box2 = new box(900,100,70,70);
  Box3 = new box(900,100,70,70);
  Box4 = new box(900,100,70,70);
  Box5 = new box(900,100,70,70);
  Box6 = new box(800,100,70,70);
  Box7 = new box(800,100,70,70);
  Box8 = new box(800,100,70,70);
  Box9 = new box(800,100,70,70);
  Box10 = new box(800,100,70,70);

  ball = new Ball(200,200,80,80);
  rope = new Rope(ball.body,{x:500,y:50});
}

function draw() {
  background("black");
 
  Engine.update(engine)

  ground.display();
  Box1.display();
  Box2.display();
  Box3.display();
  Box4.display();
  Box5.display();
  Box6.display();
  Box7.display();
  Box8.display();
  Box9.display();
  Box10.display();
 
  ball.display();
  rope.display();
  
}
function MouseDragged(){

  Matter.body.setuposition(superman.body,{x:MouseX,y:MouseY});
}
