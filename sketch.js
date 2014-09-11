function setup() {
  createCanvas(640, 480);
  background(01, 122, 183);
  
  noFill();

    stroke(24, 234, 102);
    fill(217, 224, 33);
}
/*
    var x;

    x = 1;
    ellipse(x * 150, 100, 50, 50);

    x = 2;
    ellipse(x * 150, 100, 50, 50);

    x = 3;
    ellipse(x * 150, 100, 50, 50);
*/
function draw(){
//for (시작상태; 반복하는 조건; 증가값)

  background(128, 0, 64);

  ellipse(320, 240, mouseX, mouseY);

 
}
