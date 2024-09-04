// --------------------Question--------Nested conditions---------------

// if you get more then 80 then inside your friend score. 
//     If your friend get more than 80. then go for a lunch. 
//     if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
//     if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
//     if your friend get less than 40, block your friend
// if you get less than 80 go to home and sleep and act sad





// ----------------Solution-----------------------------------------------

// My score and friend's score
let myScore = 85;
let friendScore = 85;

// Main condition based on My score
if (myScore > 80) {
    console.log("my score is more than 80, let's check my friend's score.");

    if (friendScore > 80) {
        console.log("My friend also score more than 80, We will go for lunch!");
    } else if (friendScore >= 60 && friendScore < 80) {
        console.log("My friend score between 60 and 80, I will tell my friend, 'Good luck next time!'");
    } else if (friendScore >= 40 && friendScore < 60) {
        console.log("My friend score between 40 and 60, I will keep my friend's message unseen.");
    } else {
        console.log("My friend score less than 40, I will block my friend.");
    }

} else {
    console.log("My score less than 80, I will go home, sleep, and act sad.");
}






