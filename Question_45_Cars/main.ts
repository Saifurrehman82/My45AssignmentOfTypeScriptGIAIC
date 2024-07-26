// Question 45: Cars

// Function to store information about a car
function createCar(manufacturer: string, model: string, options: any): any {
    let car = {
        manufacturer: manufacturer,
        model: model
    };

    // Add any additional options to the car object
    for (let key in options) {
        if (options.hasOwnProperty(key)) {
            [key] = options[key];
        }
    }

    return car;
}

// Calling the function with the required information and two other name-value pairs
let car1 = createCar("Toyota", "Camry", { color: "blue", feature: "sunroof" });
let car2 = createCar("Tesla", "Model S", { color: "red", autopilot: true });

// Printing the objects to make sure all the information was stored correctly
console.log(car1);
console.log(car2);
