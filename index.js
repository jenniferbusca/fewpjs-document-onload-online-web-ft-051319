document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
  let myText = document.getElementById("text");
  myText.innerHTML = "This is really cool!";
});

console.log(
  "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
);
