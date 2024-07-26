// 
var GuestList = ['Imran Tota', 'Qasim Mirza', 'Fazal Choudhry', 'Aslam Kundi', 'Kamran Pathan',];
var Dont_Come = GuestList[0];
console.log(Dont_Come, "Can not come for Dinner");
GuestList.splice(0, 1, "Salman Tota");
GuestList.forEach(function (Guest) { return console.log("Assalam u Alaikum ".concat(Guest, ", Would you like to dinner with me ?")); });
