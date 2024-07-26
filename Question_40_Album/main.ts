// Question 40: Album Creation.
// Function to create an album object with artist name, album title, and optional number of tracks
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    // Create the album object
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
    
    // Add the number of tracks if provided
    if (tracks) {
        album.tracks = tracks;
    }
    
    return album;
}

// Create and print album objects
console.log(make_album('Adeel', '30'));
console.log(make_album('Tanveer Sheikh', 'Fahim', 16));
console.log(make_album('Sheeren Khan', 'Dawood', 12));
