// Album: Write a function called make_album() that builds
// a Object describing a music album. The function should 
// take in an artist name and an album title, and it should
// return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums.
// Print each return value to show that Objects are storing the album information
// correctly. Add an optional parameter to make_album() that allows you to store
// the number of tracks on an album. If the calling line includes a value for the
// number of tracks, add that value to the album’s Object. Make at least one new function call
// that includes the number of tracks on an album.

// creating a the make_album function....
function make_album(
    Artists_name : string,
    Album_Title : string,
    tracks?  : number 
){
    let album : {atrist : string, title : string , tracks? :number} ={
            atrist : Artists_name,
            title : Album_Title,
    };
    if (tracks !== undefined){
        album.tracks = tracks;
    }
     return album;
}
// calling 3 functions  and creating 3 variables with different values.....
 let album1= make_album("Areesha","Album title 1");

 let album2= make_album("Palwasha","Album title 2");

//  calling a make_album function with 3 parameter...
 let album3= make_album("Hadia","Album title 3" , 9);

 
//  printing values of our object created by my function...
console.log(album1);

console.log(album2);

console.log(album3);


