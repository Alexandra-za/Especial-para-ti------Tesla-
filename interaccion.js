let currentPage = 0;
const pages = document.querySelectorAll('.page');

// Mostrar solo la primera página al inicio
pages.forEach((p, i) => p.style.display = i === 0 ? 'flex' : 'none');

document.getElementById('next').addEventListener('click', () => {
  console.log("Botón NEXT presionado");
  pages[currentPage].style.display = 'none';
  currentPage = (currentPage + 1) % pages.length;
  pages[currentPage].style.display = 'flex';
});

document.getElementById('prev').addEventListener('click', () => {
  console.log("Botón PREV presionado");
  pages[currentPage].style.display = 'none';
  currentPage = (currentPage - 1 + pages.length) % pages.length;
  pages[currentPage].style.display = 'flex';
});


const sabicat = document.querySelector('.sabicat');
const audio = document.getElementById('bg-music');

const playlist = [
  "canciones/Amapolas.mp3",
  "canciones/Sweet Child O' Mine.mp3"
];

let currentSong = 0;
audio.src = playlist[currentSong];

// Botón play/pause
document.getElementById('playPause').addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
});

// Botón canción anterior
document.getElementById('prevSong').addEventListener('click', () => {
  currentSong = (currentSong - 1 + playlist.length) % playlist.length;
  audio.src = playlist[currentSong];
  audio.play();
});

// Botón canción siguiente
document.getElementById('nextSong').addEventListener('click', () => {
  currentSong = (currentSong + 1) % playlist.length;
  audio.src = playlist[currentSong];
  audio.play();
});

// Glow en sabicat mientras suena
audio.addEventListener('play', () => {
  sabicat.classList.add('glow');
});
audio.addEventListener('pause', () => {
  sabicat.classList.remove('glow');
});
