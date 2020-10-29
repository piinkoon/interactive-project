function setup() {
  createCanvas(1280, 770);
}

function draw() {
  background(255);

  fill (112, 145, 13);
  noStroke();
  rect(700, 100, 500, 500);

  let scale = 6 / 10
  let scale2 = 1.6

  imageMode(CENTER);
  image(img, 950, 270, img.width * scale, img.height * scale);
  image(img2, 380, 490, img.width * scale2, img.height * scale2);

}

function preload() {
  img = loadImage('../assets/seoul/HONGDAE.jpg');
  img2 = loadImage('assets/notepad.png');
}

function openWin() {
  window.open("https://english.visitkorea.or.kr/enu/ATR/SI_EN_3_1_1_1.jsp?cid=1326972");
}
function openWin2() {
  window.open("../index.html");
}