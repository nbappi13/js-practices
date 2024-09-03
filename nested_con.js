// Your score and friend's score
let yourScore = 85;
let friendScore = 85;

// Main condition based on your score
if (yourScore > 80) {
    console.log("You scored more than 80, let's check your friend's score.");

    if (friendScore > 80) {
        console.log("Your friend also scored more than 80, go for lunch!");
    } else if (friendScore >= 60 && friendScore <= 80) {
        console.log("Your friend scored between 60 and 80, tell your friend, 'Good luck next time!'");
    } else if (friendScore >= 40 && friendScore < 60) {
        console.log("Your friend scored between 40 and 60, keep your friend's message unseen.");
    } else {
        console.log("Your friend scored less than 40, block your friend.");
    }

} else {
    console.log("You scored less than 80, go home, sleep, and act sad.");
}
