// Alien Colors #3 - Version 1: Alien color is green
var alien_color = "green";
// If-else chain to test the alien's color
if (alien_color === 'green') {
    console.log("The player just earned 5 points."); // This should print
}
else if (alien_color === 'yellow') {
    console.log("The player just earned 10 points."); // This should not print
}
else if (alien_color === 'red') {
    console.log("The player just earned 15 points."); // This should not print
}
// Alien Colors #3 - Version 2: Alien color is yellow
var alien_color1 = 'yellow';
// If-else chain to test the alien's color
if (alien_color1 === 'green') {
    console.log("The player just earned 5 points."); // This should not print
}
else if (alien_color1 === 'yellow') {
    console.log("The player just earned 10 points."); // This should print
}
else if (alien_color1 === 'red') {
    console.log("The player just earned 15 points."); // This should not print
}
// Alien Colors #3 - Version 3: Alien color is red
var alien_color2 = 'red';
// If-else chain to test the alien's color
if (alien_color2 === 'green') {
    console.log("The player just earned 5 points."); // This should not print
}
else if (alien_color2 === 'yellow') {
    console.log("The player just earned 10 points."); // This should not print
}
else if (alien_color2 === 'red') {
    console.log("The player just earned 15 points."); // This should print
}
