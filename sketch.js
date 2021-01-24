const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14;
var hero;
var ground;
var monster;
var throw1;

function preload() {
//preload the images here
    bg = loadImage("gamingBackground.png");
}

function setup() {
  createCanvas(900, 400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(430, 300, 600, 5);
  hero = new Hero(150, 280, 100, 100);
  //attach = new Throw(hero.body,{x:100,y:465});
  block1 = new Block(600,280,30,40);
  block2 = new Block(590,280,30,40);
  block3 = new Block(550,280,30,40);
  block4 = new Block(520,280,30,40);
  block5 = new Block(490,280,30,40);
  block6 = new Block(470,280,30,40);
  block7 = new Block(450,280,30,40);
  block8 = new Block(430,280,30,40);
  block9 = new Block(400,280,30,40);
  block10 = new Block(550,245,30,40);
  block11 = new Block(520,245,30,40);
  block12 = new Block(490,245,30,40);
  block13 = new Block(470,245,30,40);
  block14 = new Block(440,245,30,40);
  monster = new Monster(700,250,100,100);
  throw1 = new Throw(hero.body, {x : 150, y : 130});
  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(bg);

  hero.display();
  //hero.body.position.x = mouseX;
  ground.display();
  stroke(15);
  fill("red");
  throw1.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  monster.display();

}
function mouseDragged() {
  Matter.Body.setPosition(hero.body, {x:mouseX,y:mouseY});
}


