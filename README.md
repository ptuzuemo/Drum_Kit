# Drum_Kit

**SIMPLE WEB-BASED DRUM KIT**

**I. OVERVIEW**

This is a simple web-based drum kit made using JavaScript. The project allows you to play different drum sounds by either clicking buttons on the webpage or pressing keys on your keyboard.

**II. FEATURES**

  * Mouse Click Support: Click on the drum buttons in the web interface to play different drum sounds.
  * Keyboard Support: Play drum sounds by pressing specific keys on your keyboard.
  * Button Animation: Visual feedback with a simple animation when a drum button is pressed or clicked.

**III. HOW IT WORKS
**
  1. Button Click Event: The JavaScript code selects all the HTML elements with the class name .drum and adds a "click" event listener to each of them. The event listener triggers the makeSound and buttonAnimation functions.

  2. Keypress Event: A "keypress" event listener is added to the entire document. When any designated key is pressed, the makeSound and buttonAnimation functions are triggered.

  3. Playing Sounds: The makeSound function takes a key (a single character like 'w', 'a', 's', etc.) as an argument and plays the corresponding drum sound.

  4. Button Animation: The buttonAnimation function provides visual feedback by temporarily adding a "pressed" class to the active drum button, which is then removed after a short delay.

**IV. INSTALLATION AND USAGE**

To use this drum kit, follow these steps:

Clone this repository to your local machine.
Open index.html in your web browser.
Start playing by clicking on the drum buttons or by pressing the designated keys on your keyboard.
Contributing
