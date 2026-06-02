// For Loops
for (let i = 0; i <= 5; i++) {
    if (i === 3) {
        break; // This will skip the rest of the loop body when i is equal to 3, so the number 3 will not be printed to the console.
    }
    console.log(i); // This will output the numbers 0 to 4 to the console, one number per line.
}

// While Loops
// let passengers = 0;
// let maxPassengers = 32;
// while (passengers < maxPassengers) {
//     console.log("Passenger number: " + passengers + " Boarded"); // This will output the numbers 0 to 31 to the console, one number per line.
//     passengers++;
// }
// console.log("All passengers boarded!"); // This will output the string "All passengers boarded!" to the console after the while loop has completed.

// Do-While Loops
// let passengers = 0;
// let maxPassengers = 32;
// do {
//     console.log("Passenger number: " + passengers + " Boarded"); // This will output the numbers 0 to 31 to the console, one number per line.
//     passengers++;
// } while (passengers < maxPassengers);
// console.log("All passengers boarded!"); // This will output the string "All passengers boarded!" to the console after the do-while loop has completed.

// For-In Loops
// let car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2020
// };
// for (let key in car) {
//     console.log(key + ": " + car[key]);
// } // This will output the following to the console:
// make: Toyota
// model: Camry
// year: 2020