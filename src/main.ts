import valentineSong from "./assets/valentine-laufey.mp3";
import audioIcon from "./assets/audio-icon.svg";

function main() {
  const audio = document.querySelector("audio") as HTMLAudioElement;
  audio.src = valentineSong;

  const soundOnBtn = document.querySelector("button#sound-on");
  const btnIcon = soundOnBtn?.querySelector("img") as HTMLImageElement;
  btnIcon.src = audioIcon;

  soundOnBtn?.addEventListener("click", () => {
    audio.play();
  });
}

main();
