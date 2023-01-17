function basketballTournament(input) {
    let index = 0;
    let tournamentName = input[index]
    index++
    let gamesPlayed = Number(input[index])
    index++

    let gamesCounter = 0;
    let totalGamesCounter = 0;
    let winCounter = 0;
    let lostCounter = 0;

    while (tournamentName !== "End of tournaments") {
        for (let i = 1; i <= gamesPlayed; i++) {
            gamesCounter++
            totalGamesCounter++
            let game1Score = Number(input[index])
            index++
            let game2Score = Number(input[index])
            if (game1Score > game2Score) {
                winCounter++
                console.log(`Game ${gamesCounter} of tournament ${tournamentName}: win with ${game1Score - game2Score} points.`)
            } else {
                lostCounter++
                console.log(`Game ${gamesCounter} of tournament ${tournamentName}: lost with ${game2Score - game1Score} points.`)
            }
            index++
        }
        gamesCounter = 0;
        tournamentName = input[index]
        index++
        gamesPlayed = Number(input[index])
        index++
    }
    console.log(`${((winCounter / totalGamesCounter) * 100).toFixed(2)}% matches win`)
    console.log(`${((lostCounter / totalGamesCounter) * 100).toFixed(2)}% matches lost`)

}
basketballTournament(["Ballers",
    "3",
    "87",
    "63",
    "56",
    "65",
    "75",
    "64",
    "Sharks",
    "4",
    "64",
    "76",
    "65",
    "86",
    "68",
    "99",
    "45",
    "78",
    "End of tournaments"])
