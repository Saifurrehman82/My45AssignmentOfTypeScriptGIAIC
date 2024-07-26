// Question 16: Inviting More Guest List Due To Bigger Table.
//Creating a Guest List Array
var GuestList = ['Imran Tota', 'Qasim Mirza', 'Fazal Choudhry', 'Aslam Kundi', 'Kamran Pathan'];
// we are making Variable for removing the guest who is not able to come
var Dont_Come = GuestList[0];
console.log(Dont_Come, "Can not come for Dinner");
// We are Switching a guest against not coming
GuestList.splice(0, 1, "Salman Tota");
console.log("Good News! We Have Found A Bigger Table For Dinner");
// we are adding more guest at the starting of Array for our dinner
GuestList.unshift('Ali');
// Adding a new value at the ending indexing Array
GuestList.push('Sara');
//  Get a middle index of an Array
var middleIndex = Math.floor(GuestList.length / 2);
// Adding a new guest in the Middle Index Of an Array
GuestList.splice(middleIndex, 0, "Osama");
// Printing Our Guest List
console.log("Updated List Of Our Guests");
// Throwing a message to every guest in an Array
GuestList.forEach(function (oneguest) { return console.log("Assalam u Alaikum ".concat(oneguest, ", Would you like to take Dinner with me?")); });
