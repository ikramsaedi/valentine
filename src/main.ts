import valentineSong from "../assets/valentine-laufey.mp3";

function main() {
  const audio = document.querySelector("audio") as HTMLAudioElement;
  audio.src = valentineSong;
}

main();
