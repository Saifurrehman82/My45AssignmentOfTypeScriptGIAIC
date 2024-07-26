// Question 19: Guest List Invitation. 
// Data of Question 14: Guest List.
var GuestList = ['Imran Tota', 'Qasim Mirza', 'Fazal Choudhry', 'Aslam Kundi', 'Kamran Pathan',];
GuestList.forEach(function (Guest) { return console.log("Assalam u Alaikum ".concat(Guest, ",Would you like to dinner with me ?")); });
var lengthGuestList = GuestList.length;
console.log("We are inviting Total ".concat(lengthGuestList, " Guest."));
