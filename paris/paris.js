
let canvas2;

function preload() {

eiffel = loadImage ('eiffel/eiffel.jpg')
louvre = loadImage ('Louvre/louvre.jpg')
  
}

function setup() {
  createCanvas(1455, 995 );

  let scale = 0.9/ 1
  imageMode(CENTER)

  image (eiffel,450,350,eiffel.width/2 * scale ,eiffel.height/2 * scale)
  image (louvre, 1004,555, louvre.width/2.3 * scale, louvre.height/2.4 * scale)
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

