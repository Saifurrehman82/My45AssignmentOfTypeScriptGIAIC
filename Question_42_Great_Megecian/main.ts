// Question 42: Great Megicians.

// Function to print the names of magicians
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Function to add "the Great" to each magician's name
function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the Great';
    }
}

// Array of magician names
let magicians: string[] = ['Dawood', 'kamran', 'irfan', 'Qudus'];

// Call the function to modify the array
make_great(magicians);

// Call the function to print the modified array
show_magicians(magicians);
