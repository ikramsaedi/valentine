import valentineSong from "./assets/valentine-laufey.mp3";
import audioIcon from "./assets/audio-icon.svg";
import lottie from "lottie-web";

function main() {
  const audio = document.querySelector("audio") as HTMLAudioElement;
  audio.src = valentineSong;

  const soundOnBtn = document.querySelector("button#sound-on");
  const btnIcon = soundOnBtn?.querySelector("img") as HTMLImageElement;
  btnIcon.src = audioIcon;

  soundOnBtn?.addEventListener("click", () => {
    audio.play();
  });

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

  yesButton?.addEventListener("click", () => {
    heartLottie.goToAndPlay(0, true);
  });

  const flipCardInner = document.querySelector(".flip-card-inner");

  flipCardInner?.addEventListener("click", () => {
    flipCardInner.classList.toggle("is-flipped");
  });
}

main();
