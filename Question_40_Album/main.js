// Function to create an album object with artist name, album title, and optional number of tracks
function make_album(artist, title, tracks) {
    // Create the album object
    var album = {
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
