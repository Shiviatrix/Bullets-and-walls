var wall,bullet;
var thickness,speed,weight;

thickness = Math.random(100,130);
function setup() {
  createCanvas(1600,400);
  
  thickness = Math.round(random(100,200));
  speed = Math.round(random(20,56));
  weight = Math.round(random(30,52));

 
  bullet = createSprite(50,200,70,20);
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,200);
}

function draw() {
  background(50,10,100);  
  bullet.velocityX = speed;
    wall.shapeColor= color(80,80,80);
     
       if(hasCollided(bullet,wall)){
         bulletRightEdge.velocityX = 0;
         var damage = weight * speed/(thickness);
         
         if(damage<10){
           wall.shapeColor = color(0,255,0);
         }else
         if(damage>10){
           wall.shapeColor = color(255,0,0);
         }
       }


  drawSprites();
}
function hasCollided(lbullet,lwall) {
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  
  if(bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false;
  
}