var paragraph = document.getElementById("ChangeMe");
paragraph.innerHTML = "text";
paragraph.style.color = "red";
paragraph.style.background = "blue"

function makeParagraphGreen() {
  this.style.background = "green";
}

paragraph.onclick = makeParagraphGreen;

var currentMargin = 0;

function changeMargin() {
  currentMargin++;
  paragraph.style.margin = currentMargin + "px";
}

var animation = setInterval(changeMargin, 20);
document.getElementById("stop").onclick = reset;

function reset() {
  currentMargin = 0;
  paragraph.style.margin = "0px";
  clearInterval(animation);
  changeMargin();
}

