
var Trex;
var TrexAnimation;
var edges;
function preload(){
   
  TrexAnimation = loadAnimation("trex1.png","trex3.png","trex4.png")
  

}

function setup(){
  createCanvas(600,200)

  //Creating sprite
  Trex = createSprite(100,150,50,50)
  Trex.addAnimation("mytrex",TrexAnimation)

  //to change the 
  Trex.scale =0.5
  edges = createEdgeSprites();

 
}

function draw(){
  background("grey")

  if(keyDown("SPACE"))
  {

    Trex.velocityY= -10;
  }
  Trex.velocityY =Trex.velocityY +1
 Trex.collide(edges[3])
  drawSprites();
  

}
