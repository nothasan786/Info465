const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let numbers = [];

function promptUser() {
  rl.question("Enter an integer (or 'q' to quit): ", (input) => {
    if (input.toLowerCase() === "q") {
      checkCondition();
      return rl.close();
    }

    const num = parseInt(input, 10);
    if (isNaN(num)) {
      console.log("Invalid input. Please enter an integer or 'q' to quit.");
    } else {
      numbers.push(num);
      console.log(`Numbers entered so far: ${numbers.join(", ")}`);
    }
    promptUser();
  });
}

function checkCondition() {
  const len = numbers.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = 0; k < len; k++) {
        if (k !== i && k !== j && numbers[i] * numbers[j] === numbers[k]) {
          console.log(`Condition is met: ${numbers[i]} x ${numbers[j]} = ${numbers[k]}`);
          return;
        }
      }
    }
  }
  console.log("Condition was not met");
}

console.log("Welcome! Enter integers one by one. Type 'q' to finish.");
promptUser();
