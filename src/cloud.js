function setup() {
  createCanvas(600, 400);
  background(135, 206, 250); // 空の色
  noStroke();
  drawCloud(300, 200);
}

function drawCloud(x, y) {
  fill(255); // 半透明の白
  ellipse(x, y, 80, 60);
  ellipse(x - 40, y, 60, 50);
  ellipse(x + 40, y, 60, 50);
  ellipse(x - 20, y - 30, 60, 50);
  ellipse(x + 20, y - 30, 60, 50);
}
