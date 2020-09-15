const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var gameState;

function preload(){
  
}

function setup() {
  createCanvas(1200,400);

  engine = Engine.create();
  world = engine.world;

  brick1= new Brick (700,270,50,50);
  brick2= new Brick (620,270,50,50);
  brick3= new Brick (660,220,50,50);
  ball1= new Ball(220,200);
 

  ground_bottom= new Ground (650,300,200,10);
  //ground_top=new Ground()

  chain1=new Chain(ball1.body,{x:200,y:200});
  
  gameState=1;

}

function draw() {
  background("black");  

  Engine.update(engine);

  ground_bottom.display();
  brick1.display();
  brick2.display();
  brick3.display();
  chain1.display();
  ball1.display();


  console.log(gameState);
  
  drawSprites();
  textSize(25);
  fill("cyan");
  //stroke(0);
  text("tower seige - by AMEYA : ",400,50);
  text("Press space to have another chance",400,350);

}
function mouseDragged(){
  if(gameState===1){
  Matter.Body.setPosition(ball1.body,{x:mouseX+50,y:mouseY});
}
}
function mouseReleased(){
  if(gameState===1){
  chain1.fly();
  }
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(ball1.body,{x:220,y:200})
    chain1.attach(ball1.body);
  }
}