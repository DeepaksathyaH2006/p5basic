var box 
function setup(){
  createCanvas(500,500)
  box=createSprite(250,250,20,20)
  box.shapeColor="green"
}

function draw(){
  background("black")
  if(keyIsDown(RIGHT_ARROW)){
    box.position.x = box.position.x+5
    
  }
  if(keyIsDown(LEFT_ARROW)){
    box.position.x = box.position.x-5
    
  }
  if(keyIsDown(UP_ARROW)){
    box.position.y = box.position.y-5
    
  }
  if(keyIsDown(DOWN_ARROW)){
    box.position.y = box.position.y+5
    
  }
  drawSprites()
}

