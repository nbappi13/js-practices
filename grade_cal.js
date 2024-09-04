// ---------------Problem--------------------------

// Grade Calculator

//     Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

//         A: 90-100
//         B: 80-89
//         C: 70-79
//         D: 60-69
//         F: 0-59


// ----------------Solution----------------------------


// ----Input Values 

let studentScore = 78;  

// ---- Grades -----

let grade;

if (studentScore >= 90 && studentScore <= 100) {
    grade = 'A';
} else if (studentScore >= 80 && studentScore <= 89) {
    grade = 'B';
} else if (studentScore >= 70 && studentScore <= 79) {
    grade = 'C';
} else if (studentScore >= 60 && studentScore <= 69) {
    grade = 'D';
} else {
    grade  = 'F';
}

// Ready to do calculation

console.log("Your Passing Grade: " + grade);
