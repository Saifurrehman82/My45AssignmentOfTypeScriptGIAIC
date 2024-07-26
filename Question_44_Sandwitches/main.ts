// Question 44: Sandwitches.

// Function to accept an array of items and print a summary of the sandwich
function make_sandwich(...items: string[]): void {
    console.log("Sandwich with the following items:");
    for (let item of items) {
        console.log(`- ${item}`);
    }
    console.log("\n");
}

// Calling the function three times with different numbers of arguments
make_sandwich("Chicken Sandwitch", "Cheese Sandwitch", "Sada Sandwitch", "Egg Sandwitch");
make_sandwich("Turkey", "Bacon", "Avocado");
make_sandwich("Peanut Butter", "Jelly");
