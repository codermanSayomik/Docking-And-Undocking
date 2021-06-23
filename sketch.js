var iss_img
var spacebg_img
var spacecraft1_img
var spacecraft2_img
var spacecraft3_img
var spacecraft4_img
var iss
var spacecraft
var hasDocked = false


function preload(){

  iss_img = loadImage("images/iss.png")
  spacebg_img = loadImage("images/spacebg.jpg");
  
  spacecraft1_img = loadImage("images/spacecraft1.png")
  spacecraft2_img = loadImage("images/spacecraft2.png")
  spacecraft3_img = loadImage("images/spacecraft3.png")
  spacecraft4_img = loadImage("images/spacecraft4.png")

}

function setup() {
  createCanvas(1350,635);
  

  iss = createSprite(700,300,50,50)
  iss.addImage(iss_img);


  spacecraft = createSprite(900,500,50,50)
  spacecraft.fill="red";
  spacecraft.addImage(spacecraft1_img);
  spacecraft.scale = 0.2

  
}
var hasDocked= true;
function draw() {

  movement();
  background(spacebg_img);


  if((spacecraft.x > 605 && spacecraft.x < 655) && (spacecraft.y > 320 && spacecraft.y < 370)){
    stroke("white");
    fill("white");
    textSize(30);
    console.log("x: "+spacecraft.x+' y:'+spacecraft.y)
    text("Docking Successful",200,300)
      hasDocked= false;
      spacecraft.velocityX = 0
    
    
    //if(keyDown("right")){
      spacecraft.velocityX = 0
    
    
    //i/f(keyDown("up")){
      spacecraft.velocityY = 0
    //}
    
    //if(keyDown("down")){
      spacecraft.velocityY = 0
    //}
  }


  drawSprites();
}

function movement(){

if(keyDown("left") & hasDocked){
  spacecraft.x = spacecraft.x-10
}

if(keyDown("right") && hasDocked){
  spacecraft.x = spacecraft.x+10
}

if(keyDown("up") && hasDocked){
  spacecraft.y = spacecraft.y-10
}

if(keyDown("down") && hasDocked){
  spacecraft.y = spacecraft.y+10
}
}