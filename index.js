// Original way
// document.querySelector(".set .drum").addEventListener("click", handleClick);
//
// function handleClick(){
//   alert("I got clicked!");
// }

// Shorter - proper way

// Detecting button press
var numberOfDrumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function (){
    var buttonInnerHTML = this.innerHTML; // if a button is pressed, the inner html is checked, and it is sent to the makeSound function
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
// switch (buttonInnerHTML) {
//   case "w":
//       var tom1 = new Audio('sounds/tom-1.mp3');
//       tom1.play();
//       break;
//   case "a":
//       var tom2 = new Audio('sounds/tom-2.mp3');
//       tom2.play();
//       break;
//   case "s":
//       var tom3 = new Audio('sounds/tom-3.mp3');
//       tom3.play();
//       break;
//   case "d":
//       var tom4 = new Audio('sounds/tom-4.mp3');
//       tom4.play();
//       break;
//   case "j":
//       var snare = new Audio('sounds/snare.mp3');
//       snare.play();
//       break;
//   case "k":
//       var crash = new Audio('sounds/crash.mp3');
//       crash.play();
//       break;
//   case "l":
//       var kick = new Audio('sounds/kick-bass.mp3');
//       kick.play();
//       break;
//   default: console.log(buttonInnerHTML);
//
// }
  });

}

// Detecting keyboard press

document.addEventListener("keypress", function(event) { // if a keypress was checked, it is sent to event.key, to verify which key was pressed. If it is one of the switch keys, a sound is made
  makeSound(event.key);
  buttonAnimation(event.key);
});
// by adding the paramenter event in the function, and by logging the event, we can see which key was pressed

function makeSound(key) {

  switch (key) {
    case "w":
        var tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
    case "a":
        var tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
    case "s":
        var tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
    case "d":
        var tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
    case "j":
        var snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
    case "k":
        var crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
    case "l":
        var kick = new Audio('sounds/kick-bass.mp3');
        kick.play();
        break;
    default: console.log(buttonInnerHTML);

  }

}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);

}

// var audio = new Audio('sounds/tom-1.mp3');
// audio.play();



// Longer way - the way I knew how to do it
// document.querySelector(".w").addEventListener("click", function (){
//   alert("I got clicked!");
// });
//
// document.querySelector(".a").addEventListener("click", function (){
//   alert("I got clicked!");
// });
//
// document.querySelector(".s").addEventListener("click", function (){
//   alert("I got clicked!");
// });
//
// document.querySelector(".d").addEventListener("click", function (){
//   alert("I got clicked!");
// });
// document.querySelector(".j").addEventListener("click", function (){
//   alert("I got clicked!");
// });
//
// document.querySelector(".k").addEventListener("click", function (){
//   alert("I got clicked!");
// });
// document.querySelector(".l").addEventListener("click", function (){
//   alert("I got clicked!");
// });

// Tesing 1
// function handleClick() {
//   let allButtons = document.querySelectorAll
//   allButtons = alert("I got clicked!");
// }

// function testing() {
// var container = document.querySelector(".set");
// var allButtons = container.querySelectorAll(".drum");
// return (allButtons);
// }

// Testing 2
// document.querySelectorAll(".drum").addEventListener("click", testing);
// function testing() {
// var container = document.querySelector(".set");
// var allButtons = container.querySelectorAll(".drum");
// return (allButtons);
// alert(allButtons);
// }

//  Proper way
