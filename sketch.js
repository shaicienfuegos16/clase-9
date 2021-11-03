var cuadrado;
function setup() {
  createCanvas(400,400);
  cuadrado = createSprite(200,200,30,30);
}

function draw() 
{
  background("red");

if (keyIsDown(LEFT_ARROW)) {
cuadrado.position.x=cuadrado.position.x-5;

}
if (keyIsDown(RIGHT_ARROW)) {
  cuadrado.position.x=cuadrado.position.x+5;
  
  }
  drawSprites();
}




