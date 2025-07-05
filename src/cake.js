// p5.js code: three overlapping shapes with transparency (refactored)
function setup() {
  createCanvas(1280, 720);
  background(255);
  stroke(0);
  strokeWeight(2);

  // 定数定義
  const cx = width / 2; // 中心のx座標
  const cy = height / 2; // 中心のy座標
  const rectWidth = 600;
  const rectHeight = 700;
  const rectOffsetY = 280; // 中心からのオフセット
  const rectAngle = -20;
  const triOffsetY = -280; // 三角形の上端のYオフセット（相対）
  const triWidth = 520; // 三角形の幅
  const triHeight = 220; // 三角形の高さ
  const circleOffsetX = 300;
  const circleOffsetY = -180;
  const circleSize = 150;
  const alpha = 120; // 透明度

  // push-pop にまとめて描画
  push();
  translate(cx, cy); // 中心を移動
  rotate(radians(rectAngle)); // 回転させて傾ける

  // 1. 黄色の長方形
  fill(255, 223, 100, alpha);
  rectMode(CENTER);
  rect(0, rectOffsetY, rectWidth, rectHeight);

  // 2. 白の三角形
  fill(255, 255, 255, alpha);
  const p1 = { x: 0, y: triOffsetY }; // 上端（中央）
  const p2 = { x: -triWidth / 2, y: triOffsetY + triHeight }; // 左下
  const p3 = { x: triWidth / 2, y: triOffsetY + triHeight }; // 右下
  triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);

  // 3. 赤い円（中心座標は矩形中心に対する相対位置）
  fill(255, 100, 100, alpha);
  ellipse(circleOffsetX, circleOffsetY, circleSize);

  pop();
}
