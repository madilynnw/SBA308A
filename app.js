// app.js
import { fetchSongs, updateSong } from "./api.js";
import { renderSongs, closeEditModal } from "./display.js";

let songs = []; // Store songs in memory

async function initializeApp() {
  try {
    songs = await fetchSongs(); // Fetch the initial list of songs
    renderSongs(songs); // Render songs to the gallery
  } catch (error) {
    alert("Failed to load songs");
  }
}

function searchSongs(query) {
  const filteredSongs = songs.filter(
    (song) =>
      song.title.toLowerCase().includes(query.toLowerCase()) ||
      song.artist.toLowerCase().includes(query.toLowerCase())
  );
  renderSongs(filteredSongs);
}

// Search functionality
document.getElementById("search").addEventListener("input", (event) => {
  const query = event.target.value;
  searchSongs(query);
});

// Initialize the app when the page loads
window.onload = initializeApp;

// Close the edit modal when clicking the close button
document.getElementById("closeModal").addEventListener("click", closeEditModal);
