// Function Declaration
function greet(name) {
    console.log("Hello, " + name + "!");
}

// Function Call
greet("Daniel"); // This will output the string "Hello, Daniel!" to the console.
greet("Edwin");   // This will output the string "Hello, Edwin!" to the console.
greet("Angeline");    // This will output the string "Hello, Angeline!" to the console.

function ongeza(a, b) {
    return a + b;
}
// Function Call
ongeza(5, 3); // This will return the value 8, but it won't be displayed in the console since we are not logging it.
let sum = ongeza(5, 3);
console.log("Sum: " + sum); // This will output the string "Sum: 8" to the console.

function calculateFare(distance, rate) {
    return distance * rate;
}
// Function Call
let fare = calculateFare(10, 2.5);
console.log("Total Fare: Kshs." + fare); // This will output the string "Total Fare: Kshs.25" to the console.

let var1 = 'This is a string';

function test() {
    let var2 = 'This is another string';
    console.log(var1); // This will output the string "This is a string" to the console, demonstrating that var1 is accessible within the function.
    console.log(var2); // This will output the string "This is another string" to the console, demonstrating that var2 is accessible within the function.
}
test(); // This will execute the 'test' function and display the values of var1 and var2 in the console.