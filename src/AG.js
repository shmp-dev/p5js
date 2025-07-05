/**
 * スケッチ開始前に画像やフォントなどのアセットを読み込むためのメソッド
 * この関数はsetup()関数の実行前に一度だけ呼ばれます
 */
function preload() {}

/**
 * スケッチの初期設定を行うメソッド
 * この関数はスケッチ開始時に一度だけ呼ばれます
 */
function setup() {
  createCanvas(600, 600);
  background(255);
  noStroke();

  // 描画用定数
  const cx = width / 2; // center x（中心のx座標）
  const cy = height / 2; // center y（中心のy座標）
  const r = 250; // 半径（radius）の略

  drawRedTriangle(cx, cy, r);
  drawBlueCircle(cx, cy, r);
  drawYellowArc(cx, cy, r);
}

/**
 * 赤い三角形を描画
 */
function drawRedTriangle(cx, cy, r) {
  fill(220, 40, 60, 180);
  triangle(
    cx,
    cy - r, // 上端
    cx - r,
    cy + r, // 左下
    cx + r,
    cy + r // 右下
  );
}

/**
 * 青い円を描画
 */
function drawBlueCircle(cx, cy, r) {
  fill(50, 120, 220, 180);
  ellipse(cx, cy, r * 2, r * 2);
}

/**
 * 黄色の扇形を描画
 */
function drawYellowArc(cx, cy, r) {
  fill(240, 200, 40, 180);
  const start = -PI / 2 + PI / 4;
  const end = start + PI / 4;
  arc(cx, cy, r * 2, r * 2, start, end, PIE);
}

/**
 * 毎フレーム自動的に呼ばれるメソッド（毎秒60回）
 * アニメーションや継続的な描画処理をここに記述します
 */
function draw() {}

/**
 * マウスが押されたときに呼ばれるメソッド
 */
function mousePressed() {}

/**
 * キーが押されたときに呼ばれるメソッド
 */
function keyPressed() {}

/**
 * ウィンドウサイズが変更されたときに呼ばれるメソッド
 */
function windowResized() {}
