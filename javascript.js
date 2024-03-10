// script.js

// Function to greet the user
function greetUser(name) {
    console.log("Hello, " + name + "! Welcome to our website.");
}

// Function to calculate the area of a rectangle
function calculateArea(length, width) {
    return length * width;
}

// Function to check if a number is even
function isEven(number) {
    return number % 2 === 0;
}

// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

// Example usage of the functions
greetUser("John");
var area = calculateArea(5, 3);
console.log("The area of the rectangle is: " + area);

var number = 10;
if (isEven(number)) {
    console.log(number + " is even.");
} else {
    console.log(number + " is odd.");
}

var randomNumber = generateRandomNumber(1, 100);
console.log("Random number generated: " + randomNumber);

var text = "hello world";
var capitalizedText = capitalizeFirstLetter(text);
console.log("Capitalized text: " + capitalizedText);
