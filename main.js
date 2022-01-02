Status = "";
objects = "";
object = "";
function setup(){
    canvas = createCanvas(600, 470);
    canvas.position(600, 450);
    video = createCapture(VIDEO);
    video.hide();
}
function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object = document.getElementById("input").value;
    console.log(object);
}
function modelLoaded(){
    console.log("model loaded");
    Status = true;
    objectDetector.detect(video);
}
function draw(){
    image(video, 0, 0, 600, 470);
}
