let isPlaying = false;

const PpButton = document.getElementById("pause-play");

const HBT = new Audio("./audio-assets/HBT.mp3");

const CoverArt = document.getElementById("sample");
const HBT_ART = "./assets/hitori-bocchi-tokyo.png";
const BaseArt = "./assets/bocchi-the-rock.jpg";

const PlaySvg = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
  <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/>
  <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/>
</svg>`;

const PauseSvg = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
  <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
</svg>`;

PpButton.addEventListener("click", function () {
  isPlaying = !isPlaying;

  if (isPlaying) {
    PpButton.innerHTML = PlaySvg;
    CoverArt.src = HBT_ART;
    HBT.play();
  } else {
    PpButton.innerHTML = PauseSvg;
    CoverArt.src = BaseArt;
    HBT.currentTime = 0;
    HBT.pause();
  }
});
