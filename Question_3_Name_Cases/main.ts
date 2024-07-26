// Question # 3: Name Cases.

let NameOfPerson:string = "Saif ur rehman";
// Lowercase:
console.log(NameOfPerson.toLowerCase());
// Uppercase:
console.log(NameOfPerson.toUpperCase());
// Titlecase:
let words:string [] = NameOfPerson.split(" ");
let TitlecaseName:string = " ";
for (let i = 0; i < words.length; i ++){
    TitlecaseName += words [i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase()+ " "
}
console.log(TitlecaseName)

