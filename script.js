let button = document.getElementById("update-button");
let learningStatus = document.getElementById("learning-status");

let counter = 0;

function updateLearningStatus() {
  counter++;
  if (counter % 2 === 0) {
    learningStatus.innerHTML = "I am currently learning HTML and CSS.";
    button.innerHTML = "Update Me";
  } else {
    learningStatus.innerHTML = "I am currently learning JavaScript.";
    button.innerHTML = "Update Again";
  }
  
  console.log("Button clicked"); // Add this line to test if the function is being called
}