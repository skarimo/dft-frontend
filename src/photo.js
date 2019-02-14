
function loadCamera() {
  if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
      video.srcObject = stream
      localstream = stream
    });
  }
}


function TakePhoto() {
    context.drawImage(video, 0, 0, 640, 480);
    userPhotoContext.drawImage(video, 0, 0, 200, 200);
    video.pause();
    video.src = "";
    localstream.getTracks()[0].stop();
    
    return new Promise((res, rej)=>{
      canvas.toBlob(res, 'image/jpeg');
      return getBase64(res)
    })
}
