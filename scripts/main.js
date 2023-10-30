let myImage = document.querySelector("img");  /* définition variable, querySelector() est une fonction */

myImage.addEventListener("click", function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/accueil.jpeg") {  // === égalité
    myImage.setAttribute("src", "images/ambrounette.jpeg");
  } else {
    myImage.setAttribute("src", "images/accueil.jpeg");
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Veuillez saisir votre nom.");
    localStorage.setItem("nom", myName);
    myHeading.textContent = "Tu es la plus belle, " + myName;
}

if (!localStorage.getItem("nom")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("nom");
    myHeading.textContent = "Tu es la plus belle, " + storedName;
}

myButton.addEventListener("click", function () {
    setUserName();
});
