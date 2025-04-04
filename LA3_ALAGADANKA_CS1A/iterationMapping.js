let maxLimit = parseInt(prompt("Enter the Limit of the Double Loop:"));
//initialize loop counters
for (let i = 0; i <= maxLimit; i++) { //outer loop
    for (let j = 0; j <= maxLimit; j++) { //inner loop
        let addedValue = i + j; //calculate the sum of current iteration values
        console.log(`${i}] [${j}] Added value is ${addedValue}`); //display the result
    }
}