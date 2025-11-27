// Detectando clique do mouse nos botões da bateria.

// Laço que percorre todos os botões da bateria.

// Adicionar um evento a cada botão para o evento de "click".

// Detectar o pressionamento de teclas no teclado.

// Função que toca o som correspondente a uma tecla (pesquisar sobre o case).

// Função que anima o botão que foi pressionado ou clicado.

// Get all elements with the class 'drum'
const drumButtons = document.querySelectorAll(".drum");

// 1. Detectando clique do mouse nos botões da bateria.
// 2. Laço que percorre todos os botões da bateria.
for (let i = 0; i < drumButtons.length; i++) {
  // 3. Adicionar um evento a cada botão para o evento de "click".
  drumButtons[i].addEventListener("click", function () {
    // 'this' refers to the button that was clicked
    const buttonInnerHTML = this.innerHTML;

    // Play the sound and animate the button
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// 4. Detectar o pressionamento de teclas no teclado.
document.addEventListener("keydown", function (event) {
  // 'event.key' is the key that was pressed
  const keyPressed = event.key;

  // Play the sound and animate the button
  makeSound(keyPressed);
  buttonAnimation(keyPressed);
});

// 5. Função que toca o som correspondente a uma tecla (pesquisar sobre o case).
function makeSound(key) {
  switch (key) {
    case "A":
    case "a":
      // Assuming "./sounds/crash.mp3" is the correct path
      const crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "S":
    case "s":
      // Assuming "./sounds/tom1.mp3" is the correct path
      const tom1 = new Audio("./sounds/tom1.mp3");
      tom1.play();
      break;

    case "D":
    case "d":
      // Assuming "./sounds/snare.mp3" is the correct path
      const snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "G":
    case "g":
      // Assuming "./sounds/kickbass.mp3" is the correct path
      const kick = new Audio("./sounds/kickbass.mp3");
      kick.play();
      break;

    case "J":
    case "j":
      // Assuming "./sounds/tom3.mp3" is the correct path
      const tom3 = new Audio("./sounds/tom3.mp3");
      tom3.play();
      break;

    case "K":
    case "k":
      // Assuming "./sounds/tom2.mp3" is the correct path
      const tom2 = new Audio("./sounds/tom2.mp3");
      tom2.play();
      break;

    case "L":
    case "l":
      // Re-using the crash sound for the last button 'L' as per the CSS
      const crash2 = new Audio("./sounds/crash.mp3");
      crash2.play();
      break;

    default:
      // Optional: Log an unknown key press to the console
      console.log(key);
  }
}

// 6. Função que anima o botão que foi pressionado ou clicado.
function buttonAnimation(currentKey) {
  // Select the button element corresponding to the key/click
  const activeButton = document.querySelector("." + currentKey.toLowerCase());

  // Check if an element was found before trying to add classes
  if (activeButton) {
    // Add the 'pressed' class (defined in styles.css)
    activeButton.classList.add("pressed");

    // Set a timeout to remove the 'pressed' class after 100ms
    setTimeout(function () {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
