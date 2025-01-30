const readline = require('readline'); // Import readline module for user input

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = []; // Array to store user-entered numbers

// Function to prompt user for input
function promptUser() {
    rl.question('Enter an integer (or Q to quit): ', (input) => {
        if (input.toLowerCase() === 'q') { // Check if user wants to quit
            checkCondition(); // Call function to check condition
            rl.close(); // Close input stream
            return;
        }

        let num = parseInt(input, 10); // Convert input to integer
        if (!isNaN(num)) { // Check if input is a valid integer
            numbers.push(num); // Add number to array
            console.log(`You entered: ${num}`);
            promptUser(); // Prompt for next input
        } else {
            console.log('Invalid input. Please enter an integer or Q to quit.');
            promptUser(); // Ask for input again if invalid
        }
    });
}

// Function to check if the product of any two numbers equals a third number in the array
function checkCondition() {
    let found = false;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            let product = numbers[i] * numbers[j]; // Calculate product of two numbers
            if (numbers.includes(product)) { // Check if product exists in array
                console.log(`Condition is met: ${numbers[i]} x ${numbers[j]} = ${product}`);
                found = true;
                return;
            }
        }
    }
    if (!found) {
        console.log('Condition was not met'); // Output message if condition is not met
    }
}

console.log('Enter integers one by one. Type Q to finish.'); // Initial message to user
promptUser(); // Start prompting user for input
