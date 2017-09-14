const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return; // pas d'erreur si aucun audio associé
  key.classList.add("playing"); //add a class to the key downed
  audio.currentTime = 0; // permet d'enchainer les touches
  audio.play();
}

function removeTransition(key) {
  if (key.propertyName !== "transform") return;
  key.classList.remove("playing");
}

window.addEventListener("keydown", playSound);
