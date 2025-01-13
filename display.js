// display.js
export function renderSongs(songs) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = ""; // Clear the current gallery

  songs.forEach((song) => {
    const songElement = document.createElement("div");
    songElement.classList.add("gallery-item");
    songElement.innerHTML = `
        <div class="song-title">${song.title}</div>
        <div class="song-artist">${song.artist}</div>
      `;
    songElement.addEventListener("click", () => openEditModal(song));
    gallery.appendChild(songElement);
  });
}

export function openEditModal(song) {
  const editModal = document.getElementById("editModal");
  const editTitle = document.getElementById("editTitle");
  const editArtist = document.getElementById("editArtist");
  const editForm = document.getElementById("editForm");

  editTitle.value = song.title;
  editArtist.value = song.artist;

  editForm.onsubmit = (event) => handleEditSubmit(event, song);
  editModal.style.display = "block";
}

export function closeEditModal() {
  const editModal = document.getElementById("editModal");
  editModal.style.display = "none";
}

async function handleEditSubmit(event, song) {
  event.preventDefault();

  const updatedTitle = document.getElementById("editTitle").value;
  const updatedArtist = document.getElementById("editArtist").value;

  const updatedSong = {
    title: updatedTitle,
    artist: updatedArtist,
  };

  try {
    const updatedData = await updateSong(song.id, updatedSong);
    renderSongs(updatedData);
    closeEditModal();
  } catch (error) {
    console.error("Error during song edit:", error);
  }
}
