const keys = Array.from(document.querySelectorAll(".key"));
const wave = document.querySelector(".wave2")

keys.forEach(key => key.addEventListener("transitionend", removeTransition));

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if (!audio) return; // pas d'erreur si aucun audio associé
  key.classList.add("playing"); //add a class to the key downed
  wave.classList.remove("wave-visible");

  setTimeout(function () {
    wave.classList.add("wave-visible")
  }, 2000);

  audio.currentTime = 0; // permet d'enchainer les touches
  audio.play();
}


function removeTransition(key) {
  if (key.propertyName !== "transform") return;
  key.classList.remove("playing");
}

window.addEventListener("keydown", playSound);