// Question 41:
// Function to print the names of magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Array of magician names
var magicians = ['Amir Jadoi Kamal', 'Kamran Jadu Wala', 'Saleem khatarnak', 'Tehseen mirza'];
// Call the function with the array of magicians
show_magicians(magicians);