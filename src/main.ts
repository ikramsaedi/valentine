import valentineSong from "./assets/valentine-laufey.mp3";
import audioIcon from "./assets/audio-icon.svg";

function main() {
  const audio = document.querySelector("audio") as HTMLAudioElement;
  audio.src = valentineSong;

  const img = document.querySelector("button > img") as HTMLImageElement;
  img.src = audioIcon;
}

main();
