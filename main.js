lipX=0;
lipY=0;
function preload(){
    moustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
    }
    function draw(){
    image(video,0,0,300,300);
    image(moustache,lipX,lipY,30,30);
    }
    function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    
    posenet=ml5.poseNet(video, modelLoaded);
    posenet.on("pose",gotposes);
    }
    function takesnapshot(){
        save("MyFilterImage.png");
    }
    function modelLoaded(){
        console.log("posenet is initialized");
    }
    function gotposes(results){
        if(results.length>0){
            console.log(results);
            noseX=results[0].pose.nose.x-15;
            noseY=results[0].pose.nose.y-10;
            console.log("nosex= " + noseX);
            console.log("nosey= " + noseY);
        }
        
    }