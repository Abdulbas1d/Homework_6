const playBtn = document.getElementById("play");
const audioEl = document.getElementById("audio");
const coverEl = document.getElementById("cover");

const tracks = [
    'Konsta-Insonlar',
    'Konsta-Timur-Alixonov-Odamlar-nima-deydi'
];

let currentTrack = 0;

const changeTrack = (index) => {
    audioEl.src = `./music/${tracks[index]}.mp3`
    coverEl.src = `./images/${tracks[index]}.jpg`
};

changeTrack(currentTrack);

playBtn.addEventListener("click", () => {
    audioEl.play()
});