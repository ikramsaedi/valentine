import valentineSong from "./assets/valentine-laufey.mp3";
import audioIcon from "./assets/audio-icon.svg";
import lottie from "lottie-web";

function main() {
  addSoundOnBtn();

  addYesButton();

  addFlipCards();
}

main();

function addSoundOnBtn() {
  const audio = document.querySelector("audio") as HTMLAudioElement;
  audio.src = valentineSong;

  const soundOnBtn = document.querySelector("button#sound-on");
  const btnIcon = soundOnBtn?.querySelector("img") as HTMLImageElement;
  btnIcon.src = audioIcon;

  soundOnBtn?.addEventListener("click", () => {
    audio.play();
  });
}

function addYesButton() {
  const yesButton = document.querySelector("button#yes") as HTMLButtonElement;
  const heartAnimation = document.querySelector(
    "#heart-animation"
  ) as HTMLElement;

  const heartLottie = lottie.loadAnimation({
    container: heartAnimation,
    renderer: "svg",
    path: "https://lottie.host/873d206c-fd49-4647-acd1-4d1a845e4def/I5Uv7LRnIz.json",
    loop: false,
    autoplay: false,
  });

  const yippee = document.getElementById("yippee") as HTMLDivElement;

  yesButton?.addEventListener("click", () => {
    heartLottie.goToAndPlay(0, true);

    setTimeout(() => {
      yippee.scrollIntoView({ behavior: "smooth" });
    }, 500);
  });
}

function addFlipCards() {
  const cards = document.querySelectorAll(".flip-card-inner");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      card.classList.toggle("is-flipped");
    });
  });
}
