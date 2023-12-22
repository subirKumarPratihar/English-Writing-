console.log('Hello World!');
let div = document.querySelector("#letter_count");
let play = document.querySelector("#play");

play.oninput = function () {
  div.innerText= play.value.length;
}

document.querySelector("#copy").onclick= function () {
  this.style.backgroundColor="red";
  play.select();
  play.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(play.value);
}

document.querySelector("#cut").onclick = function() {
  this.style.backgroundColor = "red";
  document.querySelector("#ai_play").value = "";
}