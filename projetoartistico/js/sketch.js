
//


let cor;
let circuloX;
let circuloY;

function setup() {
  createCanvas(400 , 400);
    background(2, 0, 0 );
    cor = color(random(100,255),random(0,0), random(0,0));
    circuloX = [0,0,0];
    circuloY = [random(height), random(height), random(height)];

  }
  //circulo x 0,0
  //circulo y 300, 150
function draw() {

  fill(cor);

  console.log(circuloX.length);
  for(let contador in circuloX){
  console.log(contador)
    circle(circuloX[contador], circuloY[contador], 15);
    circuloX[contador] += random(4, 5)
    circuloY[contador] += random(-50,50)

    if(circuloX[contador] >= width) {
      circuloX[contador] = 0;
      circuloY[contador] = random(height);
  }



    if(mouseIsPressed) {
    cor = color(random(10,255),random(0,0), random(0,0));
    }

      }
    }

  //circle(circuloX[0], circuloY[0], 50);
  //circle(circuloX[1], circuloY[1], 50);
  //circle(circuloX[2], circuloY[2], 50);

  //circuloX[0] += random(0,3);
  //circuloY[0] += random(-3,3);
  //circuloX[1] += random(0,3);
  //circuloY[1] += random(-3,3);
  //circuloX[2] += random(0,3);
  //circuloY[2] += random(-3,3);


//if(mouseIsPressed) {
    //cor = color(random(10,255),random(0,0), random(0,0));
  //}
