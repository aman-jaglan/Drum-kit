var size=document.querySelectorAll(".drum").length;

for(var i=0;i<size;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    var buttonInnerHtml= this.innerHTML;
    makeSound(buttonInnerHtml);
    addAnimation(buttonInnerHtml);
    addBackGroundImage(buttonInnerHtml);


  });

}
document.addEventListener("keypress", function(event){

    makeSound(event.key);
    addAnimation(event.key);
    addBackGroundImage(event.key);
});

function makeSound(key){
  switch (key) {
    case "w":
    var crash1=new Audio("sounds/crash.mp3");
    crash1.play();
      break;

      case "e":
      var kick_bass1=new Audio("sounds/kick-bass.mp3");
      kick_bass1.play();
      break;

      case "s":
      var snare1=new Audio("sounds/snare.mp3");
      snare1.play();
      break;

      case "d":
      var tom1=new Audio("sounds/Tom1.mp3");
      tom1.play();
      break;

      case "j":
      var tom2=new Audio("sounds/Tom2.mp3");
      tom2.play();
      break;

      case "k":
      var tom3=new Audio("sounds/Tom3.mp3");
      tom3.play();
      break;

      case "l":
      var tom4=new Audio("sounds/Tom4.mp3");
      tom4.play();
      break;

    default:


  }
}

function addAnimation(current){
  var activeButton1=document.querySelector("."+current);
  activeButton1.classList.add("pressed");

  setTimeout(function(){
    activeButton1.classList.remove("pressed");
  },100);
}

function addBackGroundImage(currentEvent){
  var activebutton2=document.querySelector("."+currentEvent);
  activeButton2.classList.add("pressImage");
  setTimeout(function(){
    activeButton2.classList.remove("pressImage");
  },100);
}
