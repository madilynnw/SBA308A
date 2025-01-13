// Hardcoded top 20 R&B songs of 2024 data
let topRnbSongs = [
  { id: 1, title: "Faded Love", artist: "Alicia Keys" },
  { id: 2, title: "Lovers' Lane", artist: "Tory Lanez" },
  { id: 3, title: "Can You Feel It", artist: "Chris Brown" },
  { id: 4, title: "No Turning Back", artist: "SZA" },
  { id: 5, title: "Back to You", artist: "Summer Walker" },
  { id: 6, title: "On Fire", artist: "Jhené Aiko" },
  { id: 7, title: "Unstoppable", artist: "Khalid" },
  { id: 8, title: "Love Again", artist: "Giveon" },
  { id: 9, title: "Slow Motion", artist: "Brent Faiyaz" },
  { id: 10, title: "Feel the Rhythm", artist: "HER" },
  { id: 11, title: "Just Like You", artist: "Ella Mai" },
  { id: 12, title: "Night Moves", artist: "Lana Del Rey (R&B Remix)" },
  { id: 13, title: "Late Night Vibes", artist: "Usher" },
  { id: 14, title: "Let Me Love You", artist: "John Legend" },
  { id: 15, title: "Only One", artist: "Tinashe" },
  { id: 16, title: "On My Own", artist: "Jorja Smith" },
  { id: 17, title: "By My Side", artist: "Trey Songz" },
  { id: 18, title: "Take Care", artist: "Bruno Mars & Anderson .Paak" },
  { id: 19, title: "Dreaming", artist: "Miguel" },
  { id: 20, title: "Falling for You", artist: "Jasmine Sullivan" },
];

let currentPage = 1;
let totalPages = 4; // Since we have 20 songs and we're displaying 5 per page
let searchQuery = "";

// DOM elements
const gallery = document.getElementById("gallery");
const pagination = document.getElementById("pagination");
const searchInput = document.getElementById("search");
const addSongButton = document.getElementById("addSongButton");
const editModal = document.getElementById("editModal");
const closeModal = document.getElementById("closeModal");
const editForm = document.getElementById("editForm");
const editTitle = document.getElementById("editTitle");
const editArtist = document.getElementById("editArtist");

// Fetch the songs based on query and pagination
function fetchSongs(query = "", page = 1) {
  // Filter by search query
  const filteredSongs = topRnbSongs.filter((song) =>
    song.title.toLowerCase().includes(query.toLowerCase())
  );

  // Paginate the filtered songs
  const paginatedSongs = filteredSongs.slice((page - 1) * 5, page * 5);

  totalPages = Math.ceil(filteredSongs.length / 5); // Update total pages based on the filtered data
  displaySongs(paginatedSongs);
  setupPagination();
}

// Display songs in the gallery
function displaySongs(songs) {
  gallery.innerHTML = ""; // Clear current gallery
  songs.forEach((song) => {
    const songElement = document.createElement("div");
    songElement.classList.add("gallery-item");
    songElement.innerHTML = `
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
        <button onclick="openEditModal(${song.id})">Edit Song</button>
      `;
    gallery.appendChild(songElement);
  });
}

// Setup pagination controls
function setupPagination() {
  pagination.innerHTML = ""; // Clear current pagination
}
