status="";
video="";
object=[];
function draw(){
    image(video,0,0,480,380);
    if(status !=""){
        objectDetector.detect(video,gotResult);
        objectname=document.getElementById("objname").value;
        for(i=0;i<object.length;i++){
            document.getElementById("status").innerHTML="Status: Object has been detected";
            
            percent=floor(object[i].confidence*100);
            text(object[i].label+" "+percent+" %",object[i].x+15,object[i].y+15);
            noFill();
            stroke("#FF0000");
            rect(object[i].x,object[i].y,object[i].width,object[i].height,);
         if (object[i].label==objectname)
         {
             document.getElementById("objectfound").innerHTML="Object Found";
             video.stop();
         }
         else
         {
             document.getElementById("objectfound").innerHTML="Object Not Found"
         }
       }
    }
    }
function setup(){
canvas=createCanvas(480,380);
canvas.center();
video=createCapture(VIDEO);
video.hide();
video.size(480,380);
}
function begin(){
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
document.getElementById("objname").value;
}
function modelLoaded(){
console.log("The model has been loaded thank you for your patience (:");
status=true;
}
function gotResult(error,results){
    if (error){
        console.error(error);
    }
    else{
        console.log(results);
        object=results;
    }
}