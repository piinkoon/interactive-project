
function setup() {
  createCanvas(windowWidth, windowHeight + 150);
}

function draw() {
  background(255);

  fill (86, 133, 186);
  noStroke();
  rect(100, 100, 500, 500);

  let scale = 1 / 10
  let scale2 = 2.5 / 10

  imageMode(CENTER);
  image(img, 350, 270, img.width * scale, img.height * scale);
  image(img2, 900, 470, img.width * scale2, img.height * scale2);

}

function preload() {
  img = loadImage('assets/seoul/NAMSAN.jpg');
  img2 = loadImage('assets/notepad.png');
}

function openWin() {
  window.open("http://www.nseoultower.co.kr/eng/");
}
function openWin2() {
  window.open("../index.html");
}
