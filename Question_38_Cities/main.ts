// Question 38:Cities.
// Function to describe a city with a default country
function describe_city(city: string, country: string = 'Pakistan'): void {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('Karachi');           
describe_city('New York', 'USA');   
describe_city('Tokyo', 'Japan');    
