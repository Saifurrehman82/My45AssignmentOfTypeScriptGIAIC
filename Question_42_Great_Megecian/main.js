// Question 42: Great Megicians.
// Function to print the names of magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Function to add "the Great" to each magician's name
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the Great';
    }
}
// Array of magician names
var magicians = ['Dawood', 'kamran', 'irfan', 'Qudus'];
// Call the function to modify the array
make_great(magicians);
// Call the function to print the modified array
show_magicians(magicians);
