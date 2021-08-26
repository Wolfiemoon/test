//var diologue=0
var intro=1
var begining =2
var battlemode=3
var serveyProgram=0
var world=4
var gameState=4

function preload()
down=loadAnimation("Down1.png", "Down2.png", "Down3.png", "Down4.png")
//left=loadAnimation("Left1.png", "Left2.png")


{
//Animation

//Sounds

//PNG FILES
//
}

function setup() {
	createCanvas(windowWidth, windowHeight);
    
    //water=createSprite(400,500,100,150)
    //water.shapeColor="blue"
    player=createSprite(500,500,50,50)
    player.shapeColor="white"
    //enemy=createSprite(500, 500, 50,50)
    //enemy.shapeColor="red"
    //enemytracker=createSprite(enemy.x, enemy.y,150,150)
    //battle=new Battle();
    //appform=new Form();
}


function draw() {  
    background(0);
    player.setVelocity(0,0)

    if(keyDown("UP_ARROW")){
        player.velocityY=-9
    }
    if(keyDown("RIGHT_ARROW")){
        player.velocityX=9
    }
    if(keyDown("DOWN_ARROW")){
        player.velocityY=9
    }
    if(keyDown("LEFT_ARROW")){
        player.velocityX=-9
    }

    drawSprites();
    
}
