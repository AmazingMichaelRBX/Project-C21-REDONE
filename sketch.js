function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  speed=random(55,90)
  weight=random(400,1500)
  car = createSprite(50,200,50,50)
  wall=createSprite(1500,200,60,height/2)
}
var thickness,wall;
var bullet, speed, weight;

function draw() {
  background(255,255,255);  
  drawSprites();

  if(wall-car.x < (car.width+wall.width)/2)
  {
    car.velocity=0;
    var deformation=0.5 * weight * speed* speed/22509
    if(deformation>180)
    {
       car.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
       car.shapeColor=color(230,230,0);
    }

    if(deformation<100)
    {
       car.shapeColor=color(0,255,0);
    }
  }
}

thickness=random(22,83)
wall=createSprite(1200,200, thickness, height/2);

speed=random(233,321)
weight=random(30,52)