// Seeing the World: Think of at least five places in the world you’d 
// like to visit.
// • Store the locations in a array. Make sure the array is not in
//  alphabetical order.
// • Print your array in its original order.
// • Print your array in alphabetical order without modifying the actual list.
// • Show that your array is still in its original order by printing it.
// • Print your array in reverse alphabetical order without changing the order 
// of the original list.
// • Show that your array is still in its original order by printing it again.
// • Reverse the order of your list. Print the array to show that its order has
// changed.
// • Reverse the order of your list again. Print the list to show it’s back to
// its original order.
// • Sort your array so it’s stored in alphabetical order. Print the array 
// to show that its order has been changed.
// • Sort to change your array so it’s stored in reverse alphabetical order.
//  Print the list to show that its order has changed.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// making a Array of countries of its original order
var myFavCountries = ["Malta", "Japan", "Indonesia", "Australia", "China"];
console.log("Naturl Beauty:", myFavCountries);
//  print the Array in Alphabitical order without modifying the actual Array list
console.log("Alphabitical Order:", __spreadArray([], myFavCountries, true).sort());
//   show the array that still in its original order
console.log("still in original order:", myFavCountries);
//  print the Array in reverse order without modfifying the actual list
console.log("Reverse order:", __spreadArray([], myFavCountries, true).reverse());
//   show the array that still in its original order
console.log("still in original order:", myFavCountries);
//  we have changed the original Array order...
console.log("Original Array reversed:", myFavCountries.reverse());
// print the Array to show that it's back to original order..
console.log("Back to original order:", myFavCountries.reverse());
// print thr array to show that it's ordered has been changed in Alphabatical order...
console.log("Sorted in it Alphabatical Order:", myFavCountries.sort());
// we have changed again  the original Array order reverse order again...
console.log("Original Array reversed:", myFavCountries.reverse());
