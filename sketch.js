let cor
let posicaoHorizontal;
let posicaoVertical;


function setup() {
  createCanvas(400, 400);
   background(220);
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal=200;
  posicaoVertical=200;
  
}

function draw() {
 
  
  stroke("rgb(1,1,36)")
  fill(cor);
  circle(posicaoHorizontal,posicaoVertical, 20);
  
  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 3;
  } 
  
  if(mouseX > posicaoHorizontal) {
    posiicaoHorizontal = posicaoHorizontal + 3; 
  }
  
  if(mouseY < posicaoVertical) {
    posicaoVertical--;
  }
  
  if(mouseY > posicaoVertical) {
    posicaoVertical++;
  }

}