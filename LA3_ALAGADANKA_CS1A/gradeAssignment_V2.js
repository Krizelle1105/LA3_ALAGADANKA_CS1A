let score = parseInt(prompt("Enter your score:")); 

let grade = score >= 97 ? "1.00 (Excellent)" :
            score >= 94 ? "1.25 (Excellent)" :
            score >= 91 ? "1.50 (Above Average)" :
            score >= 88 ? "1.75 (Above Average)" :
            score >= 85 ? "2.00 (Average)" :
            score >= 82 ? "2.25 (Average)" :
            score >= 79 ? "2.50 (Below Average)" :
            score >= 76 ? "2.75 (Below Average)" :
            score == 75 ? "3.00 (Below Average)" :
            score >= 72 ? "4.00 (Poor)" : "5.00 (Poor)"; 

let remarks; // Use if-else if-else statements to determine the final remarks
if (score >= 90) {
    remarks = "HIGH PASS, Candidate for Cum Laude"; 
} else if (score >= 80) {
    remarks = "AVERAGE PASS"; 
} else if (score >= 75) {
    remarks = "LOW PASS"; 
} else {
    remarks = "FAILED, Needs Improvement"; 
}

console.log("Result:"); //it will display the result
console.log(`Your equivalent Grade is ${grade}`);
console.log(`Final Remarks: ${remarks}`);