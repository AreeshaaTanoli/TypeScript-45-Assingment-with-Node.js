"use strict";
// More Conditional Tests: You don’t have to limit the number of tests you 
// create to 10. If you want to try more comparisons, write more tests.
//  Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and
//  less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// define variables
let apple = "apple";
let upperCaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let five = 5;
let fifty = 50;
let fruits = ["Apple", "Grapes", "Banana", "Orange"];
//  test for equility and unequility
console.log("Is apple is equal  to apple?");
console.log(apple == "apple");
console.log("----------------");
console.log("Is apple is not equal  to apple?");
console.log(apple != "apple");
console.log("----------------");
//  tests for lowercase function
console.log(" Is APPLE is equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLocaleLowerCase() == "apple");
console.log("----------------");
console.log(" Is APPLE is not equal to apple after converting to lowercase?");
console.log(upperCaseApple.toLocaleLowerCase() != "apple");
console.log("----------------");
// numerical tests
//  test for equal to..
console.log("Is ten is equal to twenty?");
console.log(ten == twenty);
console.log("----------------");
//  test for not equal...
console.log("Is ten is not equal to twenty?");
console.log(ten != twenty);
console.log("----------------");
//  test for greter than..
console.log("Is ten is greater than zero?");
console.log(ten > 0);
console.log("----------------");
//  test for less than...
console.log("Is ten is less than  twenty?");
console.log(twenty < ten);
console.log("----------------");
// tests for greater than or equal to..
console.log("Is ten is greater than or equal to five?");
console.log(ten >= five);
console.log("----------------");
console.log("Is twenty is greater than or equal to ten?");
console.log(twenty <= ten);
console.log("----------------");
//  tests using and , or operators
console.log("Is twenty is not equal to ten and  twenty greater than ten?");
console.log(twenty != ten && twenty > ten);
console.log("----------------");
console.log("Is twenty is equal to ten and  twenty greater than ten?");
console.log(twenty == ten && twenty > ten);
console.log("----------------");
// using || (OR)
console.log("Is twenty is greater than fifty OR twenty is equal to twenty ?");
console.log(twenty > fifty || twenty == twenty);
console.log("----------------");
console.log("Is twenty is greater than fifty OR twenty is not equal to twenty ?");
console.log(twenty > fifty || twenty != twenty);
console.log("----------------");
//  test wether an item is include in Array..
console.log("Is Orange include in my Array");
console.log(fruits.includes("Orange"));
console.log("----------------");
console.log("Is Orange not  include in my Array");
console.log(!fruits.includes("Orange"));
console.log("----------------");
