// Submit name & comment text; send to a file
const submitMsg = document.getElementById('submitMsg');
submitMsg.onclick = () => {
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', '/submit');
  xhttp.setRequestHeader('content-type', 'application/json');
  xhttp.send(JSON.stringify({
    name,
    message
  }));
}

// Get chat file every second & display at the box below
const getMessages = () => {
  const xhttp = new XMLHttpRequest();
  xhttp.open('GET', './submit.txt');
  xhttp.onreadystatechange = () => {
    if(xhttp.responseText){
      const content = document.getElementById('messages');
      content.innerHTML = xhttp.responseText;
    }
  }
  xhttp.send();
}

window.setInterval(getMessages, 1000);

/*
// Camera
const video = document.getElementById('v1');
navigator.mediaDevices.getUserMedia({
  video: true,
  audio: false
}).then((mediaStream) => {
  console.log('hi');
  video.srcObject = mediaStream;
  video.play();
}).catch((err) => {
  console.log(err);
});;

// Take a picture
const addSelfie = document.getElementById('addSelfie');
addSelfie.onclick = () => {
  const name = document.getElementById('a1').value;
  const comment = document.getElementById('a2').value;
  const canvas = document.getElementById('c1');
  const context = canvas.getContext('2d');
  context.drawImage(video, 0, 0);
  const dataURL = canvas.toDataURL('image/png');
  const xhttp = new XMLHttpRequest();
  xhttp.open('POST', '/pics');
  xhttp.setRequestHeader('content-type', 'application/json');
  xhttp.send(JSON.stringify({
    canvas: dataURL,
    name,
    comment
  }));
}
*/
