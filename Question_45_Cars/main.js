// Question 45: Cars
// Function to store information about a car
function createCar(manufacturer, model, options) {
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add any additional options to the car object
    for (var key in options) {
        if (options.hasOwnProperty(key)) {
            car[key] = options[key];
        }
    }
    return car;
}
// Calling the function with the required information and two other name-value pairs
var car1 = createCar("Toyota", "Camry", { color: "blue", feature: "sunroof" });
var car2 = createCar("Tesla", "Model S", { color: "red", autopilot: true });
// Printing the objects to make sure all the information was stored correctly
console.log(car1);
console.log(car2);
