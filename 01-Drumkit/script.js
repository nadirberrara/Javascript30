function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audio) return; // pas d'erreur si aucun audio associé
  audio.currentTime = 0; // permet d'enchainer les touches
  audio.play();
  key.classList.add("playing"); //add a class to the key downed
}

// function removeTransition(e) {
//   if (e.propertyName !== "transition") return;
//   this.classList.remove("playing");
// }

// const keys = document.querySelectorAll(".key");
// keys.forEach(key => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playSound);
