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