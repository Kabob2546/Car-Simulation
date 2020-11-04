var car, wall;
var speed,weight,deformation;

function setup() {
  createCanvas(1600,400);
  car = createSprite(300, 200, 60, 30);
  car.shapeColor = "blue";
  wall = createSprite(1500,200,60,200);
  wall.shapeColor = color(80,80,80);

  speed = random(55,90);
  weight = random(400,1500);
  deformation = 0;
}

function draw() {
  background(10,10,10);  

  car.velocityX = speed;

  if(wall.x - car.x < (wall.width + car.width) / 2){
    deformation = (weight * speed * speed) / 45000; 
    if(deformation >= 180){
      car.shapeColor = "red";
    }
    if(deformation < 180 && deformation > 100){
      car.shapeColor = "yellow"
    }
    if(deformation < 100){
      car.shapeColor = "green";
    }
    car.velocityX = 0;
  }

  drawSprites();

  //Deformation = (weight * speed^2) / 45000
}