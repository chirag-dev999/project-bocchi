let isPlaying = false;
let queue = 0;

const Songs = [
  {
    song: "./audio-assets/HBT.mp3",
    title: "Hitori Bocchi Tokyo",
    cover: "./audio-assets/audio-cover-art/hitori-bocchi-tokyo.png",
  },

  {
    song: "./audio-assets/If I could be a constellation.mp3",
    title: "If I Could Be a Constellation",
    cover: "./audio-assets/audio-cover-art/IcouldBC.webp",
  },

  {
    song: "./audio-assets/Rockn' Roll, Morning Light Falls on You.mp3",
    title: "Rockn' Roll, Morning Light Falls on You",
    cover: "./audio-assets/audio-cover-art/IcouldBC.webp",
  },
];

let CurrentSong = new Audio(Songs[queue].song);

const PpButton = document.getElementById("pause-play");
const ForwardButton = document.getElementById("forward");
const BackwardButton = document.getElementById("backward");

const CoverArt = document.getElementById("sample");
const SongTitle = document.getElementById("SongName");
const VolumeSlider = document.getElementById("volume-slider");

const PlaySvg = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
  <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor"/>
  <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor"/>
</svg>`;

const PauseSvg = `<svg width="40" height="40" viewBox="0 0 24 24" fill="none">
  <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
</svg>`;

const UpdateUI = () => {
  CoverArt.src = Songs[queue].cover;

  SongTitle.textContent = Songs[queue].title;
};

const ChangeSong = () => {
  CurrentSong.pause();

  CurrentSong = new Audio(Songs[queue].song);

  CurrentSong.volume = VolumeSlider.value / 100;
  UpdateUI();

  if (isPlaying) {
    CurrentSong.play();
  }
};

UpdateUI();

PpButton.addEventListener("click", () => {
  isPlaying = !isPlaying;

  if (isPlaying) {
    PpButton.innerHTML = PlaySvg;

    CurrentSong.play();
  } else {
    PpButton.innerHTML = PauseSvg;

    CurrentSong.pause();
  }
});

ForwardButton.addEventListener("click", () => {
  queue++;

  if (queue >= Songs.length) {
    queue = 0;
  }

  ChangeSong();
});

BackwardButton.addEventListener("click", () => {
  queue--;

  if (queue < 0) {
    queue = Songs.length - 1;
  }

  ChangeSong();
});

CurrentSong.addEventListener("ended", () => {
  queue++;

  if (queue >= Songs.length) {
    queue = 0;
  }

  ChangeSong();
});

VolumeSlider.addEventListener("input", () => {
  CurrentSong.volume = VolumeSlider.value / 100;
});
