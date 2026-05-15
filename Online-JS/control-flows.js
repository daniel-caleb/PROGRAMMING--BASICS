// Control Flow Statements
// 1. If-Else Statement
let age = 1; // This is a variable declaration and assignment. The variable 'age' is assigned the number value 18.
if (age >= 18) { // This is an if statement that checks if the condition 'age >= 18' is true. If it is true, the code block inside the if statement will be executed.
    console.log("You are an adult."); // This will output the string "You are an adult." to the console if the condition in the if statement is true.
} else { // This is an else statement that will be executed if the condition in the if statement is false.
    console.log("You are a minor."); // This will output the string "You are a minor." to the console if the condition in the if statement is false.
}

// 2. Switch Statement
let day = 15; // This is a variable declaration and assignment. The variable 'day' is assigned the number value 3.
switch (day) { // This is a switch statement that evaluates the expression 'day' and executes the corresponding case block based on its value.
    case 1: // This case will be executed if 'day' is equal to 1.
        console.log("Monday"); // This will output the string "Monday" to the console if 'day' is equal to 1.
        break; // This break statement prevents the execution of the next case blocks after a match is found.
    case 2: // This case will be executed if 'day' is equal to 2.
        console.log("Tuesday"); // This will output the string "Tuesday" to the console if 'day' is equal to 2.
        break; // This break statement prevents the execution of the next case blocks after a match is found.
    case 3: // This case will be executed if 'day' is equal to 3.
        console.log("Wednesday"); // This will output the string "Wednesday" to the console if 'day' is equal to 3.
        break; // This break statement prevents the execution of the next case blocks after a match is found.
    case 4: // This case will be executed if 'day' is equal to 4.
        console.log("Thursday"); // This will output the string "Thursday" to the console if 'day' is equal to 4.
        break; // This break statement prevents the execution of the next case blocks after a match is found.
    case 5: // This case will be executed if 'day' is equal to 5.
        console.log("Friday"); // This will output the string "Friday" to the console if 'day' is equal to 5.
        break; // This break statement prevents the execution of the next case blocks after a match is found.
    default: // This default case will be executed if 'day' does not match any of the specified cases.
        console.log("Invalid day."); // This will output the string "Invalid day." to the console if 'day' does not match any of the specified cases.
}

// if else if statement
let score = 995; // This is a variable declaration and assignment. The variable 'score' is assigned the number value 85.
if (score >= 90) { // This is an if statement that checks if the condition 'score >= 90' is true. If it is true, the code block inside this if statement will be executed.
    console.log("Grade: A"); // This will output the string "Grade: A" to the console if the condition in the if statement is true.
} else if (score >= 80) { // This is an else if statement that checks if the condition 'score >= 80' is true. If it is true, the code block inside this else if statement will be executed.
    console.log("Grade: B"); // This will output the string "Grade: B" to the console if the condition in this else if statement is true.
} else if (score >= 70) { // This is another else if statement that checks if the condition 'score >= 70' is true. If it is true, the code block inside this else if statement will be executed
    console.log("Grade: C"); // This will output the string "Grade: C" to the console if the condition in this else if statement is true.
} else if (score >= 60) { // This is another else if statement that checks if the condition 'score >= 60' is true. If it is true, the code block inside this else if statement will be executed.
    console.log("Grade: D"); // This will output the string "Grade: D" to the console if the condition in this else if statement is true.
} else { // This is an else statement that will be executed if all the previous conditions in the if and else if statements are false.
    console.log("Grade: F"); // This will output the string "Grade: F" to the console if all the previous conditions in the if and else if statements are false.
}