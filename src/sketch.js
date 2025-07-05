function setup() {
  createCanvas(400, 200);
  noStroke();

  let from = color(255, 100, 100); // 赤
  let to = color(100, 100, 255); // 青

  // 使用例：横グラデーション
  drawGradientRect(50, 30, 300, 60, from, to, "horizontal");

  // 使用例：縦グラデーション
  drawGradientRect(50, 110, 300, 60, from, to, "vertical");
}

function drawGradientRect(x, y, w, h, fromColor, toColor, direction) {
  if (direction === "horizontal") {
    for (let i = 0; i < w; i++) {
      let inter = map(i, 0, w, 0, 1);
      let c = lerpColor(fromColor, toColor, inter);
      stroke(c);
      line(x + i, y, x + i, y + h);
    }
  } else if (direction === "vertical") {
    for (let i = 0; i < h; i++) {
      let inter = map(i, 0, h, 0, 1);
      let c = lerpColor(fromColor, toColor, inter);
      stroke(c);
      line(x, y + i, x + w, y + i);
    }
  }
}
