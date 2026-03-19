// --- Navegación del libro ---
let currentPage = 0;
const pages = document.querySelectorAll('.page');

// Mostrar solo la primera página al inicio
pages.forEach((p, i) => p.style.display = i === 0 ? 'flex' : 'none');

// Botón siguiente página
document.getElementById('next').addEventListener('click', () => {
  pages[currentPage].style.display = 'none';
  currentPage = (currentPage + 1) % pages.length;
  pages[currentPage].style.display = 'flex';
});

// Botón página anterior
document.getElementById('prev').addEventListener('click', () => {
  pages[currentPage].style.display = 'none';
  currentPage = (currentPage - 1 + pages.length) % pages.length;
  pages[currentPage].style.display = 'flex';
});

// --- Música y sabicat ---
const sabicat = document.querySelector('.sabicat');
const audio = document.getElementById('bg-music');

// Lista de canciones
const playlist = [
  "canciones/Amapolas.mp3",
  "canciones/meteora.mp3",
  "canciones/Algo quiero.mp3",
  "canciones/El Fin del Mundo.mp3",
  "canciones/The First Time.mp3",
  "canciones/Zombie Lady.mp3",
  "canciones/amarrame.mp3"
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
