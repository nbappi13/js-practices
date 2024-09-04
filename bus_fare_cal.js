// ---------------------Problem----------------------------

// Ticket fare Calculator
//     - Children (age < 10): free
//     - Students get a 50% discount
//     - Senior citizens (age >= 60) gets a 15% Discount
//     - Otherwise Regular ticket fare 800 tk




//---------------------Solution-01-----------------------------

// Input values
let age = 25; // Example age
let isStudent = true; // Example: true if the person is a student, false otherwise

// Ticket fare calculation
let ticketFare;

if (age < 10) {
    ticketFare = 0;
    console.log("Children (age < 10): Free");
} else if (isStudent) {
    ticketFare = 800 * 0.5; // 50% discount for students
    console.log("Students get a 50% discount");
} else if (age >= 60) {
    ticketFare = 800 * 0.85; // 15% discount for senior citizens
    console.log("Senior citizens (age >= 60) get a 15% discount");
} else {
    ticketFare = 800; // Regular ticket fare
    console.log("Regular ticket fare");
}

console.log("Total Ticket Fare: " + ticketFare + " tk");




// ---------------------solution-02----------------------------------

// let age = 59;
// let isSeniorCitizen = false;

// let ticketFare; 

// if (age < 10) {
//     ticketFare = 0;
//     console.log('children(age < 10): Free');
// } else if (age <= 25) {
//     ticketFare = 800 * 0.5;
//     console.log('students get a 50% discount');
// } else if (isSeniorCitizen) {
//     ticketFare = 800 * 0.85;
//     console.log('senior citizen (age >= 60) get a 15% discount');
// } else {
//     ticketFare = 800;
//     console.log('Regular Ticket Fare');
// }

// console.log('Total Ticket Fare:' + ticketFare + 'tk');

