
// define a function to print each magician name from an Array..
function show_magicians(
    Magicians : string []
){
    Magicians.forEach(name =>  console.log(name));
}
// function  to make magicians great trough.map() it will modify an Array.. 
function make_great(Magicians : string []){
   return  Magicians.map(name => `The great ${name}`);
}
// defien an Array of magicians name....
let magiciansNames=["Hafsa","Malaika","sidra"];

// call show_magicains that show modified list of magicians name.....
// show_magicians(magiciansNames);

// call make-great function to modify magicians names..
 let great_Magicians =make_great(magiciansNames);
 console.log(great_Magicians);