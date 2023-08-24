// Looping through every button with the class ".drum" while adding an event listener to them

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        //    this.innerHTML is supposed to access the current button/eventListener being pressed
        // In the context of the code you provided, this.innerHTML refers to the HTML content inside the element that was clicked.



        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);


    })
}
// Adding kepress event listener. This type of event listener is added to the whole page instead of to a specific element
// ...like other event listener

addEventListener("keypress", function (event) {
    makeSound(event.key);
    buttonAnimation(event.key);
})

// callback function 

function makeSound(key) {
    switch (key) {
        case "w":

            // new Audio is created from an object. It's a built-in way how to play sound in JS

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
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default: console.log(buttonInnerHTML);
    }
}

// Adding animation when button got clicked

function buttonAnimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}