// Name Cases: Store a person’s name in a variable,
//  and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Areesha Tanoli";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.replace(/ \b\w/g, function (name) { return name.toUpperCase(); }));
