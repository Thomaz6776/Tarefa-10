//criando as variaveis.
var sea,ship;
var seaImg,shipImg;

//fazendo o preload das imagens.
function preload(){
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  seaImg = loadImage("sea.png");
}


//criando a função setup.
function setup(){
  //criando das paredes.
  createCanvas(400,400);
  //criando e adicionando a cor do background.
  background("blue");
  //criando o sprite do sea.
  sea=createSprite(400,200);
  //adicionando a imagem do sea.
  sea.addImage(seaImg);
  //adicionando o movimento do sea.
  sea.velocityX = -5;
  //adicionando a escala do sea.
  sea.scale=0.3;
  //criando o sprite da variavel ship.
  ship = createSprite(130,200,30,30);
  //adicionando a animação do ship.
  ship.addAnimation("movingShip",shipImg1);
  //adicionando a escala do ship.
  ship.scale =0.25;
}

//criando a function draw junto com outros comandos.
function draw() {
  background(0);
  sea.velocityX = -3;

  if(sea.x < 0){
   sea.x = 400;
  }

 
  drawSprites();
}