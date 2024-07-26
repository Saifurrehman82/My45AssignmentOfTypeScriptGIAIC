// List of current usernames
let current_users: string[] = ['Amir', 'Aslam', 'Abid', 'Anees', 'Abdullah'];

// List of new usernames
let new_users: string[] = ['Hashmat', 'Samndar Khan', 'Bhooka Bhai', 'Wali khan', 'Gul Muhammad'];

// Convert all current usernames to lowercase for case insensitive comparison
let current_users_lowercase = current_users.map(user => user.toLowerCase());

// Loop through the new_users list and check if the username is already in use
for (let new_user of new_users) {
    // Convert the new username to lowercase for comparison
    let new_user_lowercase = new_user.toLowerCase();

    if (current_users_lowercase.includes(new_user_lowercase)) {
        console.log(`The username "${new_user}" is already taken. Please enter a new username.`);
    } else {
        console.log(`The username "${new_user}" is available.`);
    }
}
