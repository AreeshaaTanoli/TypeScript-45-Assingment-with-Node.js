// More Guests: You just found a bigger dinner table, so now more space is 
// available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print 
// statement to the end of your program informing people that you found 
// a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array
//  •Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.


// creating an Array
let guestList=["ayesha","sobia","sidra","komal"];
//  variables for those who willn't come
let dontCome =guestList[1];

console.log(dontCome, "Sana will not come");

guestList.splice(1,1, "azeem");

console.log(" Good News! Hey, everyone Saba is paying everyone's bill.");
// adding person for starting Array
guestList.unshift("Aiman");

// adding person for ending index Array 
guestList.push("zabish");

// add one new person in middle index
let middleIndex:number = Math.floor(guestList.length / 2);
//  adding a new person in middle index Array

guestList.splice(middleIndex , 0 , "sabra");
console.log("updated list of our guests");

guestList.forEach(oneGuest => console.log(`Assalam o Alikum ${oneGuest},
would you like have a lunch with us
`))


