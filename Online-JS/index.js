// let name = "Daniel"; // This is a variable declaration and assignment. The variable 'name' is assigned the string value "Daniel".
// console.log(name)
// // There are three ways to declare a variable in JavaScript: var, let, and const.
// // 'var' is function-scoped and can be redeclared and updated.
// // 'let' is block-scoped and can be updated but not redeclared.
// // 'const' is block-scoped and cannot be updated or redeclared. It must be initialized at the time of declaration.

// let fareAmount = 150; // This is a variable declaration and assignment. The variable 'fareAmount' is assigned the number value 100.
// fareAmount = 200; // This is an update to the variable 'fareAmount'. It is now assigned the new number value 200.
// console.log(fareAmount)

// const pi = 3.14; // This is a constant declaration and assignment. The constant 'pi' is assigned the number value 3.14.
// // pi = 3.14159; // This will cause an error because 'pi' is a constant and cannot be reassigned.
// console.log(pi)

// //Data Types in JavaScript
// let age = 30; // This is a variable declaration and assignment. The variable 'age' is assigned the number value 30.
// let isStudent = true;   // This is a variable declaration and assignment. The variable 'isStudent' is assigned the boolean value true.
// let firstName = "John"; // This is a variable declaration and assignment. The variable 'firstName' is assigned the string value "John".
// let lastName = undefined   // This is a variable declaration and assignment. The variable 'lastName' is assigned the string value 'Doe'.
// let fullName = firstName + " " + lastName; // This is a variable declaration and assignment. The variable 'fullName' is assigned the result of concatenating 'firstName', a space, and 'lastName'.
// console.log(fullName)


//Strings in JavaScript
let greeting = "Hello, World!"; // This is a variable declaration and assignment. The variable 'greeting' is assigned the string value "Hello, World!".
console.log(greeting) // This will output the value of the variable 'greeting' to the console, which is "Hello, World!".
console.log(typeof greeting) // This will output the type of the variable 'greeting' to the console, which is "string".

//Numbers in JavaScript
let num1 = 10; // This is a variable declaration and assignment. The variable 'num1' is assigned the number value 10.
console.log(num1) // This will output the value of the variable 'num1' to the console, which is 10.
console.log(typeof num1) // This will output the type of the variable 'num1' to the console, which is "number".

//Booleans in JavaScript
let isRaining = false; // This is a variable declaration and assignment. The variable 'isRaining' is assigned the boolean value false.
console.log(isRaining) // This will output the value of the variable 'isRaining' to the console, which is false.
console.log(typeof isRaining) // This will output the type of the variable 'isRaining' to the console, which is "boolean".

//Undefined in JavaScript
let undefinedVariable; // This is a variable declaration without assignment. The variable 'undefinedVariable' is declared but not assigned a value, so it is undefined.
console.log(undefinedVariable) // This will output the value of the variable 'undefinedVariable' to the console, which is undefined.
console.log(typeof undefinedVariable) // This will output the type of the variable 'undefinedVariable' to the console, which is "undefined".

//Null in JavaScript
let nullVariable = null; // This is a variable declaration and assignment. The variable 'nullVariable' is assigned the value null, which represents the intentional absence of any object value.
console.log(nullVariable) // This will output the value of the variable 'nullVariable' to the console, which is null.
console.log(typeof nullVariable) // This will output the type of the variable 'nullVariable' to the console, which is "object". Note that this is a quirk in JavaScript, as null is not actually an object, but it is classified as such by the typeof operator.

// Operators in JavaScript
let a = 5; // This is a variable declaration and assignment. The variable 'a' is assigned the number value 5.
let b = 3; // This is a variable declaration and assignment. The variable 'b' is assigned the number value 3.
let c = a + b; // This is a variable declaration and assignment. The variable 'c' is assigned the result of adding 'a' and 'b'.
console.log(c) // This will output the value of the variable 'c' to the console, which is 8.
let d = a - b; // This is a variable declaration and assignment. The variable 'd' is assigned the result of subtracting 'b' from 'a'.
console.log(d) // This will output the value of the variable 'd' to the console, which is 2.
let e = a * b; // This is a variable declaration and assignment. The variable 'e' is assigned the result of multiplying 'a' and 'b'.
console.log(e) // This will output the value of the variable 'e' to the console, which is 15.
let f = a / b; // This is a variable declaration and assignment. The variable 'f' is assigned the result of dividing 'a' by 'b'.
console.log(f) // This will output the value of the variable 'f' to the console, which is approximately 1.6666666666666667.
let g = a % b; // This is a variable declaration and assignment. The variable 'g' is assigned the result of the modulus operation, which gives the remainder of dividing 'a' by 'b'.
console.log(g) // This will output the value of the variable 'g' to the console, which is 2.

// Comparison Operators in JavaScript
// let x = 10; // This is a variable declaration and assignment. The variable 'x' is assigned the number value 10.
// let y = 20; // This is a variable declaration and assignment. The variable 'y' is assigned the number value 20.
// console.log(x == y) // This will output the result of the equality comparison between 'x' and 'y' to the console, which is false.
// console.log(x < y) // This will output the result of the less than comparison between 'x' and 'y' to the console, which is true.
// console.log(x > y) // This will output the result of the greater than comparison between 'x' and 'y' to the console, which is false.
// console.log(x <= y) // This will output the result of the less than or equal to comparison between 'x' and 'y' to the console, which is true.
// console.log(x >= y) // This will output the result of the greater than or equal to comparison between 'x' and 'y' to the console, which is false.

// Logical Operators in JavaScript
let isSunny = true; // This is a variable declaration and assignment. The variable 'isSunny' is assigned the boolean value true.
let isWarm = false; // This is a variable declaration and assignment. The variable 'isWarm' is assigned the boolean value false.
console.log(isSunny && isWarm) // This will output the result of the logical AND operation between 'isSunny' and 'isWarm' to the console, which is false.
console.log(isSunny || isWarm) // This will output the result of the logical OR operation between 'isSunny' and 'isWarm' to the console, which is true.
console.log(!isSunny) // This will output the result of the logical NOT operation on 'isSunny' to the console, which is false.

//String Concatenation in JavaScript
let firstName = "Jane"; // This is a variable declaration and assignment. The variable 'firstName' is assigned the string value "Jane".
let lastName = "Doe"; // This is a variable declaration and assignment. The variable 'lastName' is assigned the string value "Doe".
let fullName = firstName + " " + lastName; // This is a variable declaration and assignment. The variable 'fullName' is assigned the result of concatenating 'firstName', a space, and 'lastName'.
console.log(firstName)
console.log(lastName)
console.log(fullName) // This will output the value of the variable 'fullName' to the console, which is "Jane Doe".

//