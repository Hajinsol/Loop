function setup() {
  createCanvas(640, 480);
  background(01, 122, 183);
  
  noFill();

    stroke(24, 234, 102);
    fill(217, 224, 33);
/*
    var x;

    x = 1;
    ellipse(x * 150, 100, 50, 50);

    x = 2;
    ellipse(x * 150, 100, 50, 50);

    x = 3;
    ellipse(x * 150, 100, 50, 50);
*/
//for (시작상태; 반복하는 조건; 증가값)
 for (var x = 1; x <=8; x++)
  {
    ellipse(x * 100, 100, 50, 50);
  }
}