"use strict";
// T-Shirt: Write a function called make_shirt() 
// that accepts a size and the text of a message that 
// should be printed on the shirt. The function should 
// print a sentence summarizing the size of the shirt and 
// the message printed on it. Call the function.
// making a function
function make_shirt(size = "Large", printMessage = " I love TypeScript ") {
    console.log(`Creating a ${size} shirt with the ${printMessage}prints on shirt.`);
}
//  calling a function with by_default values...
make_shirt();
// calling a function now with Medium size and default message..
make_shirt("Medium");
// calling a function now with small size and also different message..
make_shirt("Small", "I love Python");
