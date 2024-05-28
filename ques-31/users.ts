// No Users: Add an if test to Exercise 28 to make sure the list 
// of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct
//  message is printed.

// creating an Array 
let userNames =["Areesha","Uroosa","Fatima","Admin","Khushi"]
 userNames=[]

if (userNames.length === 0 ){
console.log("We need to find some users ")
} else{
    // using For-Each Loop an Array
userNames.forEach(oneUser => {
    if (oneUser === "Admin"){
console.log(`Hello ${oneUser}, would you like to see a status report? `);
    }
    else {
        console.log(`Hello ${oneUser}, thank you for logging in again.`);
    }
})}
