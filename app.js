import { fetchSongs } from "./api.js";
import { renderSongs } from "./display.js";

document.addEventListener("DOMContentLoaded", () => {
  // Fetch and display top 100 R&B songs
  fetchSongs();

  // Search functionality
  const searchButton = document.getElementById("searchButton");
  const searchBar = document.getElementById("searchBar");

  searchButton.addEventListener("click", () => {
    const searchTerm = searchBar.value.toLowerCase();
    filterSongs(searchTerm);
  });
});

// Filter songs by search term
function filterSongs(searchTerm) {
  const songItems = document.querySelectorAll(".song-item");
  songItems.forEach((item) => {
    const title = item.querySelector(".song-title").textContent.toLowerCase();
    const artist = item.querySelector(".song-artist").textContent.toLowerCase();

    if (title.includes(searchTerm) || artist.includes(searchTerm)) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
