// Magicians: Make a array of magician’s names. Pass the array to afunction
//  called show_magicians(), which prints the name of each magician in the array.


// define a function to print each magician name from an Array..
 function show_magicians(
    Magicians : string []
){
    Magicians.forEach(name =>  console.log (name));
}

// define an Array containing magiciansnames...
let magiciansNames=["Hafsa","Malaika","sidra"];

// call the function to print each magicians name...\
show_magicians(magiciansNames);