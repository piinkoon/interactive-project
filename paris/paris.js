let img;
let canvas2;

function preload() {
img = loadImage('PARIS.jpg');
eiffel = loadImage ('eiffel/eiffel.jpg')
louvre = loadImage ('Louvre/louvre.jpg')
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // image(img, 0, 0, img.width *1.3, img.height *1.3);
  imageMode(CENTER)

  image (eiffel,480,250,eiffel.width/2,eiffel.height/2)
  image (louvre, 1004,555, louvre.width/2.3, louvre.height/2.4)
  imageMode(CENTER)


}

function openWin3() {
  window.open("../index.html", "_self")
}

function openWin() {
  window.open("Louvre/louvre-index.html", "_self");
}

function openWin2() {
  window.open("eiffel/eiffel-index.html", "_self"); 


  
  

}

// function mousePressed(){
//   console.info (mouseX, mouseY)
// }

