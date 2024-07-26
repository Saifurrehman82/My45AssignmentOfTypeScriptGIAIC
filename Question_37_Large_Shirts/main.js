// Function to create a t-shirt with default size and message
function make_shirt(size, message) {
    if (size === void 0) { size = 'Large'; }
    if (message === void 0) { message = 'I love TypeScript'; }
    console.log("The t-shirt size is ".concat(size, " and it has the message: \"").concat(message, "\"."));
}
// Create a large shirt with the default message
make_shirt();
// Create a medium shirt with the default message
make_shirt('Medium');
// Create a shirt of any size with a different message
make_shirt('Small', 'TypeScript is awesome!');
