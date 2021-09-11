var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"



function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav");
  doorsGroup = new Group();
  climbersGroup = new Group();
 invisibleBlockGroup = new Group();
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage(towerImg);
  tower.velocityY = 1;
 
  ghost = createSprite(300,300);
  ghost.addImage(ghostImg);
  ghost.scale = 0.4


  
}

function draw() {
  background(200);

  
  if(tower.y > 400){
      tower.y = 300
    }
    if(keyDown("LEFT_ARROW") ) {
      ghost.x = ghost.x-3
    }
    if(keyDown("RIGHT_ARROW") ) {
      ghost.x = ghost.x+3
    }
    if(keyDown("space")) {
      ghost.velocityY = -5
    }
    ghost.velocityY =  ghost.velocityY+0.3 
    if(climbersGroup.isTouching(ghost)) {
      ghost.velocityY = 0
    
    }
    if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600  ) {
      ghost.destroy()

    
    }






    drawSprites()
    spawnStuff()
}

function spawnStuff() {
  if(frameCount % 240 === 0) {
    var door = createSprite(200,-50);
    door.addImage(doorImg);
    door.x = Math.round(random(120,400));
    door.velocityY = 1
    door.lifeTime = 602;
    doorsGroup.add(door)
    var climber = createSprite(200,10); 
      climber.addImage(climberImg);
      climber.x = door.x
      climber.velocityY = 1
      climber.lifeTime = 602;
      climbersGroup.add(climber)
var invisibleBlock = createSprite(200,15);
invisibleBlock.width = climber.width
invisibleBlock.height = 2
invisibleBlock.x = door.x
invisibleBlock.velocityY = 1
invisibleBlockGroup.add(invisibleBlock)
invisibleBlock.visible = false


  }
}

