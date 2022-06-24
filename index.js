//Detection of sound through click
var numberOfDrums=document.querySelectorAll(".drum").length;
for (var i=0;i<numberOfDrums;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click",  function()
  {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonanimation(buttonInnerHTML);

});
}


//Detection of sound through keyboard
document.addEventListener("keypress",function(event){
  makeSound(event.key);
  buttonanimation(event.key);

});

function makeSound(key){
  switch (key) {
  case "u":
    var tom1=new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
  case "t":
    var tom2=new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
  case "k":
    var tom3=new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
  case "a":
    var tom4=new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
  case "r":
    var snare=new Audio("sounds/snare.mp3");
    snare.play();
    break;
  case "s":
    var crash=new Audio("sounds/crash.mp3");
    crash.play();
    break;
  case "h":
    var kick=new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
  default:console.log("buttonInnerHTML");

}

}
function buttonanimation(currentKey){
 var activeButton=document.querySelector("."+currentKey);
 activeButton.classList.add("pressed");
 setTimeout(function(){
   activeButton.classList.remove("pressed");
 },100);
}
