// Function to fetch Top 100 R&B songs from iTunes API
export async function fetchSongs() {
  const searchTerm = "R&B"; // Genre is set to R&B
  const url = `https://itunes.apple.com/search?term=${searchTerm}&limit=100&media=music&entity=song`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
      renderSongs(data.results); // Pass data to the renderSongs function
    } else {
      document.getElementById("songList").innerHTML = "<p>No songs found.</p>";
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    document.getElementById("songList").innerHTML =
      "<p>Error fetching song list.</p>";
  }
}
