// Unchanged Magicians: Start with your work from Exercise 40.
// Call the function make_great() with a copy of the array of magicians’
// names. Because the original array will be unchanged, return the new array
// and store it in a separate array. Call show_magicians() with each array to
// show that you have one array of the original names and one array with the 
// Great added to each magician’s name.
function show_magicians(Magicians) {
    Magicians.forEach(function (name) { return console.log(name); });
}
// function  to make magicians great trough.map() it will modify an Array.. 
function make_great(Magicians) {
    return Magicians.map(function (name) { return "The great ".concat(name); });
}
// defien an Array of magicians name....
var magiciansNames = ["Hafsa", "Malaika", "sidra"];
// making a copy of original through .slice ();
var copy_magicians_name = magiciansNames.slice();
//  modify the coppied Array to include "The great" with their names....
var copy_great_names = make_great(copy_magicians_name);
// show both Array original and copied...
// original
console.log("\n Original Array \n");
show_magicians(magiciansNames);
// copied 
console.log("\n Copied Array \n");
show_magicians(copy_great_names);
