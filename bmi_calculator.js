// ----------------------- Problem-------------------------

// BMI Calculator and Health Category

// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

//     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//     - BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.


// --------------------------Solution-----------------------


// Input values
let weight = 60; // weight in kg
let height = 1.65; // height in meters

// Calculate BMI
let bmi = weight / (height * height); 

// Determine health category
let category;

if (bmi < 18.5) {
    category = "underweight";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "normal";
} else if (bmi >= 25 && bmi <= 29.9) {
    category = "overweight";
} else {
    category = "obese";
}

//  BMI value for calculations 
let bmiRounded = bmi.toFixed(2); // Convert to string with two decimal places
let bmiNumber = parseFloat(bmiRounded); // Convert back to number

// Output the BMI and health category

console.log("You are " + category);

// Output bmiNumber for calculations
console.log("BMI as a number:", bmiNumber);








    