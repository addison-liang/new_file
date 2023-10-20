function changedog() {
  document.getElementById("chi").src = "https://media.tenor.com/NKfb5sAbD3YAAAAC/chihuahua-angry.gif";
}
function normaldog() {
  document.getElementById("chi").src = "https://media.giphy.com/media/RQSuZfuylVNAY/giphy.gif";
}

var date;
var myInterval
function myTimer() {
  const date = new Date();
  document.getElementById("clock").innerHTML = date.toLocaleTimeString();
}
const myInterval = setInterval(myTimer, 1000);


var id;
function move_wow() {
  var elem = document.getElementById("ChangeMe");   
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
      id;
      pos++; 
      elem.style.top = pos + 'px'; 
    }
  }
var animation = setInterval(frame(), 20);

var pic = document.getElementById("zombie")
function pic_swap() {
  
}