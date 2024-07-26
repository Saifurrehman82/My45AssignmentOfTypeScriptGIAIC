// Array of usernames
let usernames: string[] = ['admin', 'Sara', 'Qaseem', 'Abdullah', 'Hamid'];

// Loop through the array and print a greeting to each user
for (let username of usernames) {
    if (username === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}
