// Array of usernames
var usernames = ['admin', 'Sara', 'Qaseem', 'Abdullah', 'Hamid'];
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
