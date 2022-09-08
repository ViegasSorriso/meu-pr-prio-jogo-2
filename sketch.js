var fundo;
var chao;
var score = 0;
var astro, astroCorrendo;
var planeta1, planeta2, planeta3, planeta4, planeta5, planeta6;






function preload(){
  astro = loadImage("./imagens/astroparado.png");
  astroCorrendo = loadAnimation("./imagens/astrocorrendo1.png", "./imagens/astrocorrendo2.png", "./imagens/astrocorrendo3.png", "./imagens/astrocorrendo4.png");
  planeta1 = loadImage ("planeta1.png");
  planeta2 = loadImage ("planeta2.png");
  planeta3 = loadImage ("planeta3.png");
  planeta4 = loadImage ("planeta4.png");
  planeta5 = loadImage ("planeta5.png");
  planeta6 = loadImage("planeta6.png");



}
    
  function setup() {
    createCanvas(windowWidth, windowHeight);
     
    chao = createSprite(width/2,height-10,width,10);
    chao.shapeColor = "darkred";

    astro = createSprite(50, height - 40, 20, 50);
    astro.addAnimation("correndo",astroCorrendo);
    astro.scale = 0.5;


    planetaG = new Group();

    

  }

  

  

 function draw(){
    background("black");


    text("score: " + score, width-100,50);
    
    chao.velocityX = -3;
    if(chao.x < width/2){
    chao.x = chao.width/2;

    
  }







    drawSprites();
 }


 function criarplanetas() {
  if (frameCount % 60 == 0) {
    //colocar no lugar correto
    var planeta = createSprite(width + 10, height - 35, 10, 40);
    planeta.velocityX = -(5 + Score / 100);

    //gerar obstáculos aleatórios
    var rand = Math.round(random(1, 6));

    switch (rand) {
      case 1: planeta.addImage(planeta1);
        break;

      case 2: planeta.addImage(planeta2);
        break;

      case 3: planeta.addImage(planeta3);
        break;

      case 4: planeta.addImage(planeta4);
        break;

      case 5: planeta.addImage(planeta5);
        break;

      case 6: planeta.addImage(planeta6);
        break;

      default: break;
    
    }

 