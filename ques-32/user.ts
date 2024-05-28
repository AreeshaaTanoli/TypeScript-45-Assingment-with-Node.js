// Checking Usernames: Do the following to create a program
// that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make
// sure one or two of the new usernames are also in the current_users list.
// • Loop through the new_users list to see if each new username has already
// been used. If it has, print a message that the person will need to enter a new
// username. If a username has not been used, print a message saying that the
// username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used,
//  'JOHN' should not be accepted.

//  Array of current users
let current_users = ["Areesha", "sana", "Saba", "Samra", "Shanza"];

//  Array of new users
let new_users = ["Sana", "Malaika", "Ali", "saba", "Sobia"];

//  Loop through new_users to check for users avalibility..
new_users.forEach((new_one_user) => {

// making a condition for user name which is already exist  and save in our_condition variable 
    let our_condition= current_users.some(
        (current_one_user) =>
          current_one_user.toLocaleLowerCase() ===
          new_one_user.toLocaleLowerCase())

        //   print different messages using If_Else statement...
  if (our_condition){
console.log(`Sorry ${new_one_user} is alerady taken!`)
  }
  else{
    console.log(`This Username ${new_one_user} is available`)
  }

});
