// Question 44: Sandwitches.
// Function to accept an array of items and print a summary of the sandwich
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
    console.log("\n");
}
// Calling the function three times with different numbers of arguments
make_sandwich("Chicken Sandwitch", "Cheese Sandwitch", "Sada Sandwitch", "Egg Sandwitch");
make_sandwich("Turkey", "Bacon", "Avocado");
make_sandwich("Peanut Butter", "Jelly");
