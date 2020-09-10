const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1 , backGround;
function preload(){
    backGround = loadImage("sprites/bg.png")

}
function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,500,70,70);
    box2 = new Box(920,500,70,70);
    box3 = new Box(700,400,70,70);
    box4 = new Box(920,400,70,70);
    box5 = new Box(810,300,70,70);

    Log1 = new log(810,460,300, PI/2 );
    Log2 = new log(810,360,300, PI/2 );
    Log3 = new log(750,250,160,PI/6);
    Log4 = new log(870,250,160,-PI/6);

    ground = new Ground(600,height,1200,20);
    Bird1 = new bird(100,100);
    Pig1 = new pig(810,500);
    Pig2 = new pig(810,400);
}

function draw(){
    background(backGround);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    ground.display();

    Log1.display();
    Log2.display();
    Log3.display();
    Log4.display();

    Bird1.display();

    Pig1.display();
    Pig2.display();
}