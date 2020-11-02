function setup() {
  createCanvas(1280, 770);
}

function draw() {
  background(255);

  fill (86, 52, 158);
  noStroke();
  rect(700, 100, 500, 500);

  let scale = 2 / 10
  let scale2 = 5/ 10

  imageMode(CENTER);
  image(img, 950, 270, img.width * scale, img.height * scale);
  image(img2, 380, 490, img.width * scale2, img.height * scale2);

}

function preload() {
  img = loadImage('../assets/nyc/CHINATOWN.jpg');
  img2 = loadImage('assets/notepad.png');
}

function openWin() {
  window.open("https://www.nycgo.com/boroughs-neighborhoods/manhattan/chinatown/");
}
function openWin2() {
  window.open("../index.html");
}