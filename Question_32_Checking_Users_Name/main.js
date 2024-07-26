// List of current usernames
var current_users = ['Amir', 'Aslam', 'Abid', 'Anees', 'Abdullah'];
// List of new usernames
var new_users = ['Hashmat', 'Samndar Khan', 'Bhooka Bhai', 'Wali khan', 'Gul Muhammad'];
// Convert all current usernames to lowercase for case insensitive comparison
var current_users_lowercase = current_users.map(function (user) { return user.toLowerCase(); });
// Loop through the new_users list and check if the username is already in use
for (var _i = 0, new_users_1 = new_users; _i < new_users_1.length; _i++) {
    var new_user = new_users_1[_i];
    // Convert the new username to lowercase for comparison
    var new_user_lowercase = new_user.toLowerCase();
    if (current_users_lowercase.includes(new_user_lowercase)) {
        console.log("The username \"".concat(new_user, "\" is already taken. Please enter a new username."));
    }
    else {
        console.log("The username \"".concat(new_user, "\" is available."));
    }
}
