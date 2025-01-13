// api.js
export const API_URL = "https://api.example.com/rnb-songs";

// Function to fetch all songs
export async function fetchSongs() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error("Failed to fetch songs");
    }
    return await response.json(); // Return the list of songs
  } catch (error) {
    console.error("Error fetching songs:", error);
    throw error; // Rethrow error for handling in the main app
  }
}

// Function to update a song
export async function updateSong(songId, updatedSong) {
  try {
    const response = await fetch(`${API_URL}/${songId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedSong),
    });

    if (!response.ok) {
      throw new Error("Error updating song");
    }

    return await response.json(); // Return the updated song
  } catch (error) {
    console.error("Error updating song:", error);
    throw error; // Rethrow error for handling in the main app
  }
}
