const songs = [
  {
    name: "song1",
    title: "Song One",
    artist: "Artist A",
    cover: "cover1.jpg",
  },
  {
    name: "song2",
    title: "Song Two",
    artist: "Artist B",
    cover: "cover2.jpg",
  },
  {
    name: "song2",
    title: "Song Three",
    artist: "Artist C",
    cover: "cover2.jpg",
  },
  {
    name: "song2",
    title: "Song Four",
    artist: "Artist D",
    cover: "cover2.jpg",
  },
  {
    name: "song2",
    title: "Song Five",
    artist: "Artist E",
    cover: "cover2.jpg",
  },
  {
    name: "song2",
    title: "Song Six",
    artist: "Artist F",
    cover: "cover2.jpg",
  },
  {
    name: "song2",
    title: "Song Seven",
    artist: "Artist G",
    cover: "cover2.jpg",
  },
  {
    name: "song2",
    title: "Song Eight",
    artist: "Artist H",
    cover: "cover2.jpg",
  },
  {
    name: "song2",
    title: "Song Nine",
    artist: "Artist I",
    cover: "cover2.jpg",
  },
  {
    name: "song2",
    title: "Song Ten",
    artist: "Artist J",
    cover: "cover2.jpg",
  },
  {
    name: "song2",
    title: "Song Eleven",
    artist: "Artist K",
    cover: "cover2.jpg",
  },
  {
    name: "song2",
    title: "Song Twelve",
    artist: "Artist L",
    cover: "cover2.jpg",
  },
  {
    name: "song2",
    title: "Song Thirteen",
    artist: "Artist M",
    cover: "cover2.jpg",
  },
  {
    name: "song2",
    title: "Song Fourteen",
    artist: "Artist N",
    cover: "cover2.jpg",
  },
];

let index = 0;
let isPlaying = false;

const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const title = document.getElementById("title");
const artist = document.getElementById("artist");
const cover = document.getElementById("cover");
const progress = document.getElementById("progress");

function loadSong(song) {
  title.textContent = song.title;
  artist.textContent = song.artist;
  audio.src = `music/${song.name}.mp3`;
  cover.src = `images/${song.cover}`;
}

function playSong() {
  isPlaying = true;
  audio.play();
  playBtn.textContent = "⏸️";
}

function pauseSong() {
  isPlaying = false;
  audio.pause();
  playBtn.textContent = "▶️";
}

playBtn.addEventListener("click", () => {
  isPlaying ? pauseSong() : playSong();
});

nextBtn.addEventListener("click", () => {
  index = (index + 1) % songs.length;
  loadSong(songs[index]);
  playSong();
});

prevBtn.addEventListener("click", () => {
  index = (index - 1 + songs.length) % songs.length;
  loadSong(songs[index]);
  playSong();
});

audio.addEventListener("timeupdate", () => {
  progress.value = (audio.currentTime / audio.duration) * 100;
});

progress.addEventListener("input", () => {
  audio.currentTime = (progress.value / 100) * audio.duration;
});

// Load first song
loadSong(songs[index]);
