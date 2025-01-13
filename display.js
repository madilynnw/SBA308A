// Function to render songs in the song list container
export function renderSongs(songs) {
  const songListContainer = document.getElementById("songList");
  songListContainer.innerHTML = ""; // Clear any existing songs

  songs.forEach((song) => {
    const songElement = document.createElement("div");
    songElement.classList.add("song-item");

    const songTitle = song.trackName || "No Title";
    const artistName = song.artistName || "Unknown Artist";
    const albumName = song.collectionName || "Unknown Album";
    const artworkUrl = song.artworkUrl100 || ""; // Album artwork

    songElement.innerHTML = `
        <img src="${artworkUrl}" alt="${songTitle}" style="width: 100px; height: 100px; border-radius: 8px;">
        <div class="song-title">${songTitle}</div>
        <div class="song-artist">${artistName}</div>
        <div class="song-album">${albumName}</div>
      `;

    songListContainer.appendChild(songElement);
  });
}
