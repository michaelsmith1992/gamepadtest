
var gamepads = {};
var gamepadInfo = document.getElementById("gamepad-info");
var ball = document.getElementById("ball");
var start;
var a = 0;
var b = 0;
var interval;

window.addEventListener("gamepadconnected", function(e) {
  console.log("Gamepad connected at index %d: %s. %d buttons, %d axes.",
    e.gamepad.index, e.gamepad.id,
    e.gamepad.buttons.length, e.gamepad.axes.length);
    document.querySelector("#gamepadtyp").innerHTML = [
    e.gamepad.id];
    document.querySelector("#gamepadcon").innerHTML = "YES";
    var gp = navigator.getGamepads()[e.gamepad.index];
    gp.index, gp.id,
      gp.buttons.length, gp.axes.length;
    gameLoop();  
  


});
window.addEventListener("gamepaddisconnected", function(e) {
    console.log("Gamepad disconnected from index %d: %s",
      e.gamepad.index, e.gamepad.id);
      document.querySelector("#gamepadcon").innerHTML = "NO";
      document.querySelector("#gamepadtyp").innerHTML = "N/A";
      cancelRequestAnimationFrame(start);

  });


  

  function buttonPressed(b) {
    if (typeof(b) == "object") {
      return b.pressed;
    }
    return b == 1.0;
  }
  
  function gameLoop() {
    var gamepads = navigator.getGamepads ? navigator.getGamepads() : (navigator.webkitGetGamepads ? navigator.webkitGetGamepads : []);
    if (!gamepads) {
      return;
    }
    // var timeid = setInterval(5)
    var button1style =  document.querySelector("#button1");
    var button2style =  document.querySelector("#button2");
    var button3style =  document.querySelector("#button3");
    var button4style =  document.querySelector("#button4");
    var gp = gamepads[0];
    if (buttonPressed(gp.buttons[0])) {
      button1style.style.background = "Red"
      setTimeout(function() { 
    ;button1style.style.background = "White";}, 200)
    } else if (buttonPressed(gp.buttons[2])) {
      button3style.style.background = "Red"
      setTimeout(function() { 
    ;button3style.style.background = "White";}, 200)
    }
    if (buttonPressed(gp.buttons[1])) {
      button2style.style.background = "Red"
      setTimeout(function() { 
    ;button2style.style.background = "White";}, 200)
    } else if (buttonPressed(gp.buttons[3])) {
      button4style.style.background = "Red"
      setTimeout(function() { 
    ;button4style.style.background = "White";}, 200)
    }
    
    start = requestAnimationFrame(gameLoop);
  }
  
