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
  createCanvas(1280, 720);
  background(255); // 夜空をイメージした背景
  noStroke();

  // 描画用定数
  const cx = width / 2; // 中心x座標
  const cy = height / 2; // 中心y座標
  const r = 200; // 半径

  // 青い円
  fill(60, 140, 230, 180);
  ellipse(cx, cy, r);
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
