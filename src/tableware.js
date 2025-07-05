// p5.js code: stacked pot, bowl, and glass with transparency
function setup() {
  createCanvas(600, 400);
  background(255);
  noStroke();

  // 図形の中心座標
  const cx = width / 2;
  const baseY = height * 0.7;

  // 1. 鍋（緑の四角形）
  fill(0, 200, 100, 120); // 透明度をやや下げて重なりを明確に
  rectMode(CENTER);
  rect(cx, baseY, 200, 100);

  // 2. ボウル（青い半円・傾けて鍋に放り込まれているように）
  fill(0, 100, 255, 120);
  push();
  translate(cx - 20, baseY - 50);
  rotate(radians(45));
  arc(0, 0, 220, 110, 0, PI, CHORD);
  pop();

  // 3. グラス（黄色の台形・傾けて鍋の中に放り込まれているように）
  fill(255, 200, 0, 120);
  push();
  translate(cx + 10, baseY - 40);
  rotate(radians(60));
  beginShape();
  vertex(-30, -40);
  vertex(30, -40);
  vertex(20, 40);
  vertex(-20, 40);
  endShape(CLOSE);
  pop();
}
