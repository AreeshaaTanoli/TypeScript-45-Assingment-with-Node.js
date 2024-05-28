// Shrinking Guest List: You just found out that your new dinner table
//  won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints 
// a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain 
// in your list. Each time you pop a name from your list, print a message to
// that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list,
// letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. 
// Print your list to make sure you actually have an empty list at the end of 
// your program.
// creating an Array
var guestList = ["ayesha", "sobia", "sidra", "komal"];
//  variables for those who willn't come
var dontCome = guestList[1];
console.log(dontCome, "Sana will not come");
guestList.splice(1, 1, "azeem");
console.log(" Good News! Hey, everyone Saba is paying everyone's bill.");
// adding person for starting Array
guestList.unshift("Aiman");
// adding person for ending index Array 
guestList.push("zabish");
// add one new person in middle index
var middleIndex = Math.floor(guestList.length / 2);
//  adding a new person in middle index Array
guestList.splice(middleIndex, 0, "sabra");
console.log("updated list of our guests");
guestList.forEach(function (oneGuest) { return console.log("Assalam o Alikum ".concat(oneGuest, ",\nwould you like have a lunch with us\n")); });
// inform only teo guests for invited for lunch
console.log("Ops, The new table is not arrive on time so,I invite only two person for lunch ");
// using while-loop for removing guests untill two guest are remaining
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    console.log("Sorry, ".concat(removeGuest, " I cant invite you for lunch"));
}
// sending a invitation to the last two guests
console.log("Invitation to the last two guests");
guestList.forEach(function (lastTwo) {
    return console.log(" You are the lucky ".concat(lastTwo, ", who are the still invited for dinner"));
});
// removing the last two guests from the list
guestList.pop();
guestList.pop();
console.log("Empty list", guestList);
