var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

// to start window.webkitSpeechRecognition
function start() {
  document.getElementById("textbox").innerHTML = "";
  recognition.start();
}

// to get the converted text
recognition.onresult = function(event) {

  console.log(event);

  var content = event.results[0][0].transcript; // take my selfie will be stored in this code
  document.getElementById("textbox").innerHTML = content;
  console.log(content);

  if (content == "take my selfie") {
    console.log("taking selfie");
    speak();

  }

}

function speak() {

  var synth = window.speechSynthesis;
  speak_data = "taking your selfie in 5 seconds";
  var utterThis = new SpeechSynthesisUtterance(speak_data);// help to convert text in speach
  synth.speak(utterThis);

  Webcam.attach(camera);
  setTimeout(function () {
    take_snapshot();
    save();
  }, 5000);

}

camera = document.getElementById("camera");
Webcam.set({
  width: 360,
  height: 250,
  image_format: 'jpeg',
  jpeg_quality: 90
});

function take_snapshot() {

  Webcam.snap(function (data_uri) {
    document.getElementById("result").innerHTML = '<img id="selfie_img" src = " ' + data_uri + ' ">';

  });

}

function save() {
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src;
  link.href = image;
  link.click();
}