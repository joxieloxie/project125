function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(700, 150);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(4);
    text('Noor Aisha', 50, 50);
}

function modelLoaded() {
    console.log('PoseNet Is Initialised');
}

function draw() {
    background('#969A97')

    document.getElementById("text_side").innerHTML = "Width And Height of a Text will be = " + difference +"px"
    fill('#F90093');
    stroke('#F90093')
}

difference = 0;
rightWristX = 0;
leftWristX = 0;

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = leftWristX - rightWristX;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWristX = " + leftWristX + " rightWristX = " + rightWristX + " difference = " + difference);
    }
}