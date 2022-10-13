var path,boy, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;

function preload(){
 path = loadImage("path.png");
boy_running = loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.PNG","Jake5.png");
 
}

function setup(){
  createCanvas(400,400);

  path = createSprite(200,180, 400, 50);
path.addImage(path);
path.scale=1.2;
path.velocityY = -3;

boy = createSprite(50,180, 400, 40);
boy.addAnimation("run",boy_running);
boy.scale=0.08;
  

createEdgeSprites();
leftBoundary=createSprite(0,0,100,800);
rightBoundary=createSprite(410,0,100,800);
}

function draw() {
  background(0);
  path.velocityY = 4;
  
  boy.velocityX = 
  
  edges= createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);

  if(path.y > 400 ){
    path.y = height/2;
  }
  
  drawSprites();
}
