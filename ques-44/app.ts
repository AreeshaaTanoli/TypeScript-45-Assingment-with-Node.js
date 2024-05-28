// Sandwiches: Write a function that accepts a array of 
// items a person wants on a sandwich. The function should 
// have one parameter that collects as many items as the function 
// call provides, and it should print a summary of the sandwich that 
// is being ordered. Call the function three times, using a different
// number of arguments each time.


//  define an Array with a rest of parameter that excepts item arguments representing the sanwich...
function makingSandwich (...items : string[]) {
console.log("\n Making a sandwich with following items: \n")
items.forEach(oneItem => console.log(oneItem));
console.log("\n Hey! enjoy your sandwich \n");


}
//  call the function with 3 different number of arguments with 3 times...
makingSandwich("egg","bread","Mayo","Cheese","chicken");
makingSandwich("bread","butter","mayo");
makingSandwich("lattuce","tomato","onion","cheese","egg","chicken","bread");