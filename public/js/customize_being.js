// Body functions
function bodyChange(radioObject) {
  var model = radioObject.value;

  document.getElementById("body_preview").src = `/img/body${model}.png`;
};

function bodyColorChange(rangeObject) {
  var angle = Math.round(rangeObject.value * 3.6);
  var bright = document.getElementById("body_brightness").value / 2 + 50;

  document.getElementById("body_preview").style.filter = 
    `brightness(${bright}%) hue-rotate(${angle}deg)`;
};

function bodyBrightnessChange(rangeObject) {
  var angle = Math.round(document.getElementById("body_color").value * 3.6)
  var bright = rangeObject.value / 2 + 50;

  document.getElementById("body_preview").style.filter = 
    `brightness(${bright}%) hue-rotate(${angle}deg)`;
};

// Head functions
function headChange(radioObject) {
  var model = radioObject.value;

  document.getElementById("head_preview").src = `/img/head${model}.png`;
};

function headColorChange(rangeObject) {
  var angle = Math.round(rangeObject.value * 3.6);
  var bright = document.getElementById("head_brightness").value / 2 + 50;

  document.getElementById("head_preview").style.filter = 
    `brightness(${bright}%) hue-rotate(${angle}deg)`;
};

function headBrightnessChange(rangeObject) {
  var angle = Math.round(document.getElementById("head_color").value * 3.6)
  var bright = rangeObject.value / 2 + 50;

  document.getElementById("head_preview").style.filter = 
    `brightness(${bright}%) hue-rotate(${angle}deg)`;
};

// Eye functions
function eyesChange(radioObject) {
  var model = radioObject.value;

  document.getElementById("eyes_preview").src = `/img/eyes${model}.png`;
};

function eyesColorChange(rangeObject) {
  var angle = Math.round(rangeObject.value * 3.6);
  var bright = document.getElementById("eyes_brightness").value / 2 + 50;

  document.getElementById("eyes_preview").style.filter = 
    `brightness(${bright}%) hue-rotate(${angle}deg)`;
};

function eyesBrightnessChange(rangeObject) {
  var angle = Math.round(document.getElementById("eyes_color").value * 3.6)
  var bright = rangeObject.value / 2 + 50;

  document.getElementById("eyes_preview").style.filter = 
    `brightness(${bright}%) hue-rotate(${angle}deg)`;
};
