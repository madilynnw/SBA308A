// Top 20 R&B songs data
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

// DOM elements
const gallery = document.getElementById("gallery");
const searchInput = document.getElementById("search");
const editModal = document.getElementById("editModal");
const closeModal = document.getElementById("closeModal");
const editForm = document.getElementById("editForm");
const editTitle = document.getElementById("editTitle");
const editArtist = document.getElementById("editArtist");

// Fetch and display songs
function displaySongs() {
  gallery.innerHTML = ""; // Clear current gallery
  topRnbSongs.forEach((song) => {
    const songElement = document.createElement("div");
    songElement.classList.add("gallery-item");
    songElement.innerHTML = `
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
      `;
    songElement.addEventListener("click", () => openEditModal(song.id));
    gallery.appendChild(songElement);
  });
}

// Open the edit modal and populate the fields with the song's details
function openEditModal(songId) {
  const song = topRnbSongs.find((s) => s.id === songId);
  editTitle.value = song.title;
  editArtist.value = song.artist;
  editForm.onsubmit = (event) => handleEditSubmit(event, songId);
  editModal.style.display = "block";
}

// Handle form submission to edit the song
function handleEditSubmit(event, songId) {
  event.preventDefault();

  const updatedTitle = editTitle.value;
  const updatedArtist = editArtist.value;

  // Find the song and update its details
  const song = topRnbSongs.find((s) => s.id === songId);
  song.title = updatedTitle;
  song.artist = updatedArtist;

  // Close the modal and re-render the song list
  editModal.style.display = "none";
  displaySongs();
}

// Close the modal
closeModal.onclick = () => {
  editModal.style.display = "none";
};

// Initially display songs
displaySongs();
