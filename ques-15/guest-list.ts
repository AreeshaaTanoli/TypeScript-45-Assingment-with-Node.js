// Changing Guest List: You just heard that one of your guests
//  can’t make the dinner, so you need to send out a new set of invitations. 
//  You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. 
// Add a print statement at the end of your program stating
//  the name of the guest who can’t make it.
// • Modify your list, replacing the name of the
//  guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who 
// is still in your list.

        //       0          1          2         3
let guestlist=["areesha", "uroosa", "palwasha","naila"];

let doNotCome = guestlist [1];
console.log(doNotCome , "Out of city that's why not come");

guestlist.splice(0 , 1 , "Fahad");
guestlist.forEach(inviteforlunch =>
 console.log(`Assalam o Alikum ${inviteforlunch}
 Here a grand lunch I would like to invite you.`));

