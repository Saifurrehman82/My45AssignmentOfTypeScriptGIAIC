// Question 17: Shrinking Guest List (Only Two People).

//Creating a Guest List Array
let GuestList = ['Imran Tota','Qasim Mirza','Fazal Choudhry','Aslam Kundi','Kamran Pathan'];

// we are making Variable for removing the guest who is not able to come
let Dont_Come = GuestList [0];

console.log(Dont_Come, "Can not come for Dinner");
// We are Switching a guest against not coming
GuestList.splice(0, 1, "Salman Tota");

console.log("Good News! We Have Found A Bigger Table For Dinner");

// we are adding more guest at the starting of Array for our dinner
GuestList.unshift('Ali');

// Adding a new value at the ending indexing Array
GuestList.push('Sara');

//  Get a middle index of an Array
let middleIndex: number = Math.floor(GuestList.length / 2);

// Adding a new guest in the Middle Index Of an Array
GuestList.splice(middleIndex, 0, "Osama");

// Printing Our Guest List
console.log("Updated List Of Our Guests");

// Throwing a message to every guest in an Array
GuestList.forEach(oneguest => console.log(`Assalam u Alaikum ${oneguest}, Would you like to take Dinner with me?`));

// Informed the guest that only two Guest can dinner with me
console.log("Unfortunately, The new dinner table wont arrive on time, So i can only invite only two Guest on dinner with me");

// Using WhileLoop for Removing Guest from Array till Two Guest remaining.
while(GuestList.length > 2){
    let removeList = GuestList.pop();
    console.log(`Sorry, ${removeList} I am not able to invite you for Dinner due to Lack of Dinner Table.`)
}
// Invitation to the last two guest.
console.log("Invitation to the Last Two Guest")

//
GuestList.forEach(lasttwo => console.log(`Luckly ${lasttwo}, You are Still Invited for Dinner with me.`));

GuestList.pop();
GuestList.pop();

console.log("Empty List:", GuestList);
