// define a function to print each magician name from an Array..
function show_magicians(Magicians) {
    Magicians.forEach(function (name) { return console.log(name); });
}
// function  to make magicians great trough.map() it will modify an Array.. 
function make_great(Magicians) {
    return Magicians.map(function (name) { return "The great ".concat(name); });
}
// defien an Array of magicians name....
var magiciansNames = ["Hafsa", "Malaika", "sidra"];
// call show_magicains that show modified list of magicians name.....
// show_magicians(magiciansNames);
// call make-great function to modify magicians names..
var great_Magicians = make_great(magiciansNames);
console.log(great_Magicians);
