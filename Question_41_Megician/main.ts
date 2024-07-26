// Question 41:
// Function to print the names of magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician names
let magicians: string[] = ['Amir Jadoi Kamal', 'Kamran Jadu Wala', 'Saleem khatarnak', 'Tehseen mirza'];

// Call the function with the array of magicians
show_magicians(magicians);
