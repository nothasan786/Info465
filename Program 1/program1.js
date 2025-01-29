// This program reads integers from the user, calculates the mean and median,
// and displays the results on the console.

// Function to calculate the mean of an array
var readLineSync = require('readline-sync')
function calculateMean(numbers) {
    const sum = numbers.reduce((acc, num) => acc + num, 0); // Sum all the numbers in the array
    return sum / numbers.length; // Divide by the count of numbers
}

// Function to calculate the median of an array
function calculateMedian(numbers) {
    numbers.sort((a, b) => a - b); // Sort the array in ascending order
    const middle = Math.floor(numbers.length / 2);

    if (numbers.length % 2 === 0) {
        // If even number of elements, average the two middle values
        return (numbers[middle - 1] + numbers[middle]) / 2;
    } else {
        // If odd number of elements, return the middle value
        return numbers[middle];
    }
}

// Main program
function main() {
    const numbers = []; // Array to store user input
    let input;

    console.log("Enter integers to add to the list. Type 'q' to quit:");

    while (true) {
        input = prompt("Enter a number (or 'q' to quit):"); // Prompt user for input

        if (input.toLowerCase() === 'q') {
            break; // Exit loop if user enters 'q'
        }

        const parsedNumber = parseInt(input, 10); // Parse input as an integer

        if (isNaN(parsedNumber)) {
            console.log("Invalid input. Please enter an integer.");
        } else {
            numbers.push(parsedNumber); // Add valid integer to the array
        }
    }

    if (numbers.length === 0) {
        console.log("No numbers were entered. Exiting program.");
        return; // Exit program if no numbers were entered
    }

    const mean = calculateMean(numbers); // Calculate mean
    const median = calculateMedian(numbers); // Calculate median

    // Display the results
    console.log("Numbers entered:", numbers);
    console.log("Mean (average):", mean);
    console.log("Median:", median);
}

main();
