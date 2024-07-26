// Function to create a t-shirt with default size and message
function make_shirt(size: string = 'Large', message: string = 'I love TypeScript'): void {
    console.log(`The t-shirt size is ${size} and it has the message: "${message}".`);
}

// Create a large shirt with the default message
make_shirt();

// Create a medium shirt with the default message
make_shirt('Medium');

// Create a shirt of any size with a different message
make_shirt('Small', 'TypeScript is awesome!');
