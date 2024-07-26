// Array of usernames
var usernames = ['Amir', 'Saif', 'Kamran', 'Batool', 'Shoaib'];
// Check if the list of users is empty
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    // Loop through the array and print a greeting to each user
    for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
        var username = usernames_1[_i];
        if (username === 'admin') {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
// Remove all usernames
usernames = [];
// Check again if the list of users is empty after removing all usernames
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
