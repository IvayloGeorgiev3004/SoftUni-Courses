function highJump(input) {
    let neededJumpHeight = Number(input[0])
    let startingJumpHeight = neededJumpHeight - 30;

    let failCounter = 0;
    let jumpCounter = 0;

    let index = 1;
    let currentJumpHeight = Number(input[index]);

    while (neededJumpHeight >= startingJumpHeight) {
        currentJumpHeight = Number(input[index]);
        jumpCounter++
        if (currentJumpHeight > startingJumpHeight) {
            startingJumpHeight += 5;
            failCounter = 0;
        } else {
            failCounter++
        }
        if (failCounter === 3) {
            break;
        }
        index++
    }


    if (failCounter === 3) {
        console.log(`Tihomir failed at ${startingJumpHeight}cm after ${jumpCounter} jumps.`)
    } else {
        console.log(`Tihomir succeeded, he jumped over ${neededJumpHeight}cm after ${jumpCounter} jumps.`)
    }

}
highJump(["250",
"225",
"224",
"225",
"228",
"231",
"235",
"234",
"235"])
