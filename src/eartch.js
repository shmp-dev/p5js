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
  background(30, 30, 60, 255); // 夜空をイメージした背景
  noStroke();

  // 地球の中心座標と半径（画面外左下に大きく配置）
  const earthR = 1100;
  const earthX = -earthR * 0.4;
  const earthY = height + earthR * 0.4;

  // 月の中心座標と半径（右上に小さく配置）
  const moonR = 60;
  const moonX = width - 180;
  const moonY = 100;

  // 地球（青い円）右上45度のみ映る
  fill(60, 140, 230, 180);
  ellipse(earthX, earthY, earthR * 2, earthR * 2);

  // 月（黄色の円）
  fill(240, 220, 80, 180);
  ellipse(moonX, moonY, moonR * 2, moonR * 2);

  // 三日月を作るための夜空色の円（透明感あり）
  fill(30, 30, 60, 120);
  ellipse(moonX + 18, moonY, moonR * 2, moonR * 2);
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
