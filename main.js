Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
})

camera=document.getElementById("camera")
Webcam.attach(camera)
function take_snapshot() {
    Webcam.snap(function(data_uri){
   document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/>'
    })
    
}
console.log("ml5.version: ",ml5.version)
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/Ieu9hY3mB/model.json',modelloaded);
function modelloaded(){
    console.log('model loaded!')
}

function check(){
    img=document.getElementById('capture_image');
    classifier.clasify(img,got_result)
}

function got_result(error,result){
    if (error) {
        console.log(error);
    }

    else{
        console.log(result);
        document.getElementById("result_person_name").innerHTML=result[0].label;
        document.getElementById("result_person_accuracy").innerHTML=result[0].confidence.toFixed(3);
    }
}