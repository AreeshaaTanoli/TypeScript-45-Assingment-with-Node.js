// Cars: Write a function that stores information about a car in a 
// Object. The function should always receive a manufacturer and a 
// model name. It should then accept an arbitrary number of keyword
// arguments. Call the function with the required information and
// two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was 
// stored correctly.

//  define  a function to create a car object with optional options.....
function creates_myCar ( manufacture : string,model : string, ...options){
//  initilized a car object with manufacture and model...
let car ={
manufacture :manufacture,
model : model, 
};
// add additional options to the car object...
options.forEach(option => {
    let [key , value ] =  option.split(":");
    car[key.trim()] = value.trim();
});
return car;
}

//  call the function to create a car object...
let  my_car= creates_myCar("Toyotta","Corolla","Color:black", "Sunroof:false");

//  print the variables to ensure all the information is stored correctly in the car object...
console.log(my_car);