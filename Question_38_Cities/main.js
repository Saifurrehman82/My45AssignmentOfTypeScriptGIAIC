// Question 38:Cities.
// Function to describe a city with a default country
function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city('Karachi');
describe_city('New York', 'USA');
describe_city('Tokyo', 'Japan');
