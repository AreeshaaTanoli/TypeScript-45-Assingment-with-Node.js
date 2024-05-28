// City Names: Write a function called city_country() that takes in
// the name of a city and its country. The function should return a string 
// formatted like this:"Lahore, Pakistan"

//  creating a function with parameters which return a value in string..
function city_country (
    city: string,
    country : string
) : string {
    return `${country} , ${city}`;
}

//  calling a function and print the return value...
 console.log (city_country("Karachi" , "Pakistan"));

 console.log (city_country("Tokyo" , "Japan"));

 console.log (city_country("Berlin" , "Germany"));


