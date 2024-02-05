let noCount = 0;
let yesPressed = false;

const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const app = document.getElementById("app");
const loveBear = document.getElementById("loveBear");
const question = document.getElementById("question");

noButton.addEventListener("click", function () {
  noCount++;
  yesButton.style.fontSize = `${noCount * 20 + 16}px`;
  const phrases = [
    "no",
    "estás segura?",
    "realmente segura?",
    "piensa de nuevo",
    "última oportunidad!",
    "segura que no?",
    "podrías arrepentirte!",
    "dale otra oportunidad!",
    "absolutamente segura?",
    "podría ser un error!",
    "ten piedad!",
    "no seas tan fría!",
    "cambia de idea?",
    "no puedes reconsiderarlo?",
    "respuesta final?",
    "me rompes el corazón :(",
  ];
  noButton.innerText = phrases[Math.min(noCount, phrases.length - 1)];
});

yesButton.addEventListener("click", function () {
  yesPressed = true;
  if (yesPressed) {
    app.innerHTML = `<img src="https://media.tenor.com/h5gwCwJ1Sq8AAAAi/test.gif" alt="daniel and kitty kissing"/><div class="text-4xl font-bold my-4">ok yo también 🎀😽</div>`;
  }
});

