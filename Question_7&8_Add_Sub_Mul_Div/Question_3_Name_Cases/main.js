// Question # 3: Name Cases.
var NameOfPerson = "Saif ur rehman";
// Lowercase:
console.log(NameOfPerson.toLowerCase());
// Uppercase:
console.log(NameOfPerson.toUpperCase());
// Titlecase:
var words = NameOfPerson.split(" ");
var TitlecaseName = " ";
for (var i = 0; i < words.length; i++) {
    TitlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(TitlecaseName);
//Split :
var sentence1 = "this is a split";
var words1 = sentence1.split(" ");
console.log(words1);
