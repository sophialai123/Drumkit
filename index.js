

//The addEventListener(type,listener(usually is Jsfunction)) method
//for loop though all the buttons
//play Audio: HTMLAudioElement
//https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement
//this.style.color="white"; // this can have the identity.

//how to play sound Js https://stackoverflow.com/questions/9419263/how-to-play-audio
var numOfDrums = document.querySelectorAll(".drum").length;

//use buttons to detect the soud, for loop to loop all the drum classes.
for (var i=0; i< numOfDrums; i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    // use switch statement to match each sounds :
    //create a variable to
    var buttonInnerHTML = this.innerHTML;

     makeSound(buttonInnerHTML);
     buttonAimation(buttonInnerHTML);

  });
}



// Using keyboard EventListener to check for key presses.
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    buttonAimation(event.key);

});



//make a funtion
function makeSound(key){

  switch (key) {
    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "o":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "p":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "h":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "i":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "a":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    default:
       console.log(buttonInnerHTML);}
}

function buttonAimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);

  // add a class to button
  activeButton.classList.add("pressed"); 

  // use timeout function 
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100); // remove the class name after 0.01 second.
}