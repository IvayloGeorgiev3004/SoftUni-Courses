function bestPlayer2(input) {
    let index = 0;
    let currentInput = input[index]
    index++
    let currentBestScore = Number(input[index])
    index++
    let currentBestPlayer = currentInput
    let playerName = ""
    let maxScore = currentBestScore
    let nextScore = 0;


    while (currentInput !== "END") {
        playerName = input[index]
        index++
        nextScore = Number(input[index])
        if (maxScore >= 10) {
            break;
        }
        if (currentBestScore >= nextScore) {
            currentBestPlayer = currentBestPlayer;
            maxScore = currentBestScore;
            currentBestScore = maxScore
        } else {
            currentBestPlayer = playerName
            maxScore = nextScore
            currentBestScore = nextScore
        }
        index++
        currentInput = input[index]
      

    }
    console.log(`${currentBestPlayer} is the best player!`);
    if (maxScore >= 3) {
        console.log(`He has scored ${maxScore} goals and made a hat-trick !!!`)
    } else {
        console.log(`He has scored ${maxScore} goals.`)
    }
}
bestPlayer2(["Neymar",
"2",
"Ronaldo",
"1",
"Messi",
"3",
"END"])
