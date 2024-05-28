// Dinner Guests: Working with one of the programs from Exercises 14 
// through 18, print a message indicating the number of people you are 
// inviting to dinner.
// Think of something you could store in a array. For example,
//  you could make a list of mountains, rivers, countries, cities,
//   languages, or anything else you’d like. Write a program that creates a
//    list containing these items.
// They think of something you could store in a TypeScript Object. Write a 
// program that creates Objects containing these items.
var myGuestList = ["Areeba", "Sidra", "Fahad", "Tehreen", "Shehzeen"];
//myGuestList.forEach(oneguest => console.log 
// (`Assalam o Alikum ${oneguest} , would ypu like to have a lunch with me? `));
var lengthGuests = myGuestList.length;
console.log("I'm inviting total ".concat(lengthGuests, " guest for lunch."));
