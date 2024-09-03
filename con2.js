// ------------------------BMI calculator Problem-------------------------

// BMI Calculator and Health Category

// Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

//     - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
//     - BMI < 18.5, you are underweight.
//     - BMI >= 18.5 and BMI <=24.9, you are normal.
//     - BMI >=25 and BMI <= 29.9, you are overweight.
//     - Otherwise, you are obese.




// function calculateBMI(weight, height) {
//     const bmi = weight / (height * height);
  
//     if (bmi < 18.5) {
//       return "Underweight";
//     } else if (bmi >= 18.5 && bmi <= 24.9) {
//       return "Normal";
//     } else if (bmi >= 25 && bmi <= 29.9) {
//       return "Overweight";
//     } else {
//       return "Obese";
//     }
//   }
  
//   const weight = 60; // kg
//   const height = 1.65; // meters
  
//   const bmiCategory = calculateBMI(weight, height);
  
//   console.log("Your BMI is:", bmiCategory);




// // Input values
// let weight = 60; // weight in kg
// let height = 1.65; // height in meters

// // Calculate BMI
// let bmi = weight / (height * height);

// // Determine health category
// let category;

// if (bmi < 18.5) {
//     category = "underweight";
// } else {
//     if (bmi >= 18.5 && bmi <= 24.9) {
//         category = "normal";
//     } else {
//         if (bmi >= 25 && bmi <= 29.9) {
//             category = "overweight";
//         } else {
//             category = "obese";
//         }
//     }
// }

// // Output the BMI and health category
// console.log("Your BMI is: " + bmi.toFixed(2));
// console.log("You are " + category);



// // Input values
// let weight = 60; // weight in kg
// let height = 1.65; // height in meters

// // Calculate BMI
// let bmi = weight / (height * height);

// // Determine health category
// let category;

// if (bmi < 18.5) {
//     category = "underweight";
// } else if (bmi >= 18.5 && bmi <= 24.9) {
//     category = "normal";
// } else if (bmi >= 25 && bmi <= 29.9) {
//     category = "overweight";
// } else {
//     category = "obese";
// }

// // Use the BMI value for calculations or further processing
// let bmiRounded = bmi.toFixed(2); // Convert to string with two decimal places
// let bmiNumber = parseFloat(bmiRounded); // Convert back to number

// // Output the BMI and health category
// console.log("Your BMI is: " + bmiRounded);
// console.log("You are " + category);

// // Now you can use bmiNumber for calculations
// console.log("BMI as a number:", bmiNumber); 





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

// Use the BMI value for calculations or further processing
let bmiRounded = bmi.toFixed(2); // Convert to string with two decimal places
let bmiNumber = parseFloat(bmiRounded); // Convert back to number

// Output the BMI and health category
// console.log("Your BMI is: " + bmiRounded);
console.log("You are " + category);

// Now you can use bmiNumber for calculations
console.log("BMI as a number:", bmiNumber);








    