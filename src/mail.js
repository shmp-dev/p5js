function setup() {
  createCanvas(1280, 720);
  background(255);
  stroke(0);
  strokeWeight(0.7);

  const cx = width / 2; // 中心のx座標
  const cy = height / 2; // 中心のy座標

  // 1. 左下の青い四角形
  push();
  translate(cx, cy);
  rotate(radians(20));
  fill(90, 195, 245, 200);
  drawGradientRect(
    -200,
    0,
    400,
    270,
    color(90, 195, 245, 0),
    color(90, 195, 245, 255),
    "vertical",
    true
  );
  pop();

  // 2. 中央の水色の三角形
  push();
  translate(cx, cy);
  fill(90, 195, 245, 100);
  const p1 = { x: 0, y: -150 };
  const p2 = { x: -223, y: 30 };
  const p3 = { x: 190, y: 30 };
  triangle(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
  pop();

  // 3. 右上の白い四角形
  push();
  translate(cx, cy);
  rotate(radians(-20));
  fill(255, 130);
  rectMode(CENTER);
  rect(80, -60, 380, 380);
  pop();
}

/**
 * 指定した位置にグラデーションの矩形を描画する関数
 *
 * @param {*} x 矩形の左上隅のx座標
 * @param {*} y 矩形の左上隅のy座標
 * @param {*} w 矩形の幅
 * @param {*} h 矩形の高さ
 * @param {*} fromColor グラデーションの開始色
 * @param {*} toColor グラデーションの終了色
 * @param {*} direction グラデーションの方向（"horizontal" または "vertical"）
 * @param {*} outline アウトラインを描画するか（true/false）
 */
function drawGradientRect(
  x,
  y,
  w,
  h,
  fromColor,
  toColor,
  direction = "vertical",
  outline = false
) {
  push();
  rectMode(CORNER);

  if (direction !== "horizontal" && direction !== "vertical") {
    direction = "vertical";
  }

  if (!outline) noStroke();

  if (direction === "horizontal") {
    for (let i = 0; i < w; i++) {
      const amt = i / w;
      const c = lerpColor(fromColor, toColor, amt);
      stroke(c);
      line(x + i, y, x + i, y + h);
    }
  } else {
    for (let i = 0; i < h; i++) {
      const amt = i / h;
      const c = lerpColor(fromColor, toColor, amt);
      stroke(c);
      line(x, y + i, x + w, y + i);
    }
  }

  if (outline) {
    stroke(0);
    noFill();
    // -1でズレを吸収（strokeWeight対策）
    rect(x, y, w - 1, h - 1);
  }

  pop();
}
