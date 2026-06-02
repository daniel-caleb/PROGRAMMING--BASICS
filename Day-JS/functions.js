// Function Declaration

// function greetStudent(){
//     console.log("This will be executed before the return statement.");
//     return "Hello, student!";
//     console.log("This will never be executed because it is after the return statement.");
// }

// greetStudent(); // This will call the function 'greetStudent' and return the string "Hello, student!" to the console.


// function greet(name) {
//     console.log("This will be executed before the return statement.");
//     return "Hello, " + name + "!";
//     console.log("This will never be executed because it is after the return statement.");
// }

// Area of a Rectangle Function
function calculateArea(length, width) {
    let area = length * width; // This will calculate the area of a rectangle by multiplying the length and width parameters and store the result in the variable 'area'.
    return area; // This will return the area of a rectangle by multiplying the length and width parameters.
}    

var area = calculateArea(20, 5); // This will call the function 'calculateArea' with the arguments 20 and 5, and return the number 100 to the console, which is the area of a rectangle with length 20 and width 5.
console.log(area); // This will output the value of the variable 'area', which is 100, to the console.

// console.log(greet("Alice")); // This will call the function 'greet' with the argument "Alice" and return the string "Hello, Alice!" to the console.

// // Function Expression
// const sayHello = function(name) {
//     return "Hello, " + name + "!";
// };

// console.log(sayHello("Alice"))      ; // This will call the function expression 'sayHello' with the argument "Alice" and return the string "Hello, Alice!" to the console.

// // Arrow Function
// const greetArrow = (name) => {
//     return "Hello, " + name + "!";
// };

// console.log(greetArrow("Alice")); // This will call the arrow function 'greetArrow' with the argument "Alice" and return the string "Hello, Alice!" to the console.
