var status = "";
var input = "";

function setup(){
    
    canvas = createCanvas(380, 380);
  canvas.center();
  video = createCapture(VIDEO);
  video.size(380,380);
  video.hide();
}


function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
  document.getElementById("status").innerHTML = "Status : Detecting Objects";

  var input = document.getElementById("text-input").value;
}

function modelLoaded() {
    console.log("Model Loaded!")
    status = true;
  }



  