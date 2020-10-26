
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600);
 

  
ground  =createSprite(300,400,600,10);
ground.velocityX=1;
  
monkey=createSprite(30,250)
monkey.addAnimation("sprite12",monkey_running);
monkey.scale=0.1;
  foodGroup = new Group();
  obstaclesGroup =new Group();
  survivalTime= 0;
  score=0;
}


function draw() {
  background("white") ;
  
  if(ground.x>300){
    ground.x = 300;
    
  }
 monkey.collide(ground)
  
if(keyDown("space")){
 monkey.velocityY=-10;
  }
    monkey.velocityY= monkey.velocityY+1;
bananas();

drawSprites();
    stroke("white");
  textSize(20);
  fill("green");
  text("Score: "+ score, 500,50);
   stroke("whit");
  textSize(20);
  fill("red");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime: "+survivalTime, 10,50);
  
}
function bananas(){
  if(frameCount%80===0){
      var banana = createSprite(600,250,40,10);
    banana.y = random(120,200);    
    banana.addImage(bananaImage);
    banana.scale = 0.05;
    banana.velocityX = -5;
     banana.lifetime = 300;
    monkey.depth = banana.depth + 1;
   foodGroup.add(banana);
  }
  Obstacles();
 function Obstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(600,370,10,40);
    obstacle.velocityX = -6;
    obstacle.addImage(obstaceImage);
    
    //assign scale and lifetime to the obstacle     
    obstacle.scale = 0.2;
    obstacle.lifetime = 300;
    
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
  }
}

  
  


}



