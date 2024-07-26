// 


let GuestList = ['Imran Tota','Qasim Mirza','Fazal Choudhry','Aslam Kundi','Kamran Pathan',];

let Dont_Come = GuestList [0];

console.log(Dont_Come, "Can not come for Dinner");

GuestList.splice(0, 1, "Salman Tota");

GuestList.forEach(Guest => console.log(`Assalam u Alaikum ${Guest}, Would you like to dinner with me ?`));
