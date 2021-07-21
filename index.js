// alert("test mate");

// document.querySelector("button").addEventListener("click", () =>{
//   alert("i am clicked");
// });

// document.querySelectorAll("button")[1].addEventListener("click", () =>{
//   alert("i am clicked");
// });


// she
// var numOfButtons = document.querySelectorAll(".drum").length;
//
// for(var i=0; i<numOfButtons; i++){
// document.querySelectorAll(".drum")[i].addEventListener("click", () => {
//   // alert("i am clicked again");
//   console.log(this.innerHTML);
// });
// }

let btns = document.querySelectorAll('.drum');
// console.log(btns);
// In an event, (this) refers to the element that received the event.
for (i of btns) {
  i.addEventListener('click', function(){
    // console.log(this);
    // console.log(this.style.color= "green");
    // console.log(this.innerHTML);
    var theLetterButton = this.innerHTML;

    playBoth(theLetterButton);
    addingAnimation (theLetterButton);
  });
}
    // alert("i am clicked");
    // var audio = new Audio('sounds/tom-1.mp3');
    // audio.play();

document.addEventListener("keypress", function(event){
  console.log(event);
  var pressedKey = event.key;
  playBoth(pressedKey);
  addingAnimation (pressedKey);
})


// LOVEEEEEE to see use of function, especially function without return
function playBoth(anyparameter){
switch(anyparameter){
  case "w":
  var tom1 = new Audio("sounds/tom-1.mp3");
  tom1.play();
  break;

  case "a":
  var tom2 = new Audio("sounds/tom-2.mp3");
  tom2.play();
  break;

  case "s":
  var tom3 = new Audio("sounds/tom-3.mp3");
  tom3.play();
  break;

  case "d":
  var tom4 = new Audio("sounds/tom-4.mp3");
  tom4.play();
  break;

  case "j":
  var snare = new Audio("sounds/snare.mp3");
  snare.play();
  break;

  case "k":
  var crash = new Audio("sounds/crash.mp3");
  crash.play();
  break;

  case "l":
  var cick = new Audio("sounds/kick-bass.mp3");
  cick.play();
  break;

  default:
  console.log(anyparameter);
}
}

function addingAnimation (thepressedKey){
document.querySelector("." + thepressedKey).classList.add("pressed");

setTimeout(function(){
  document.querySelector("." + thepressedKey).classList.remove("pressed");
},100);
}


//
