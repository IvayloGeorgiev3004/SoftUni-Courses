function oscars(input) {
    let actorName = input[0];
    let startingPoints = Number(input[1]);
    let judgesTotalNumber = Number(input[2])

    let judgeName = 0;
    let judgeScore = 0;
    let judgePointsGiven = 0;

    let pointsCounter = 0;
    for (let index = 3; index < input.length; index++) {
        if (index % 2 !== 0) {
            judgeName = input[index];
            judgeScore = Number(input[index+1])
            judgePointsGiven = judgeName.length
            pointsCounter = startingPoints + (judgePointsGiven * judgeScore) / 2
            startingPoints = pointsCounter;
        }
        if (startingPoints >= 1250.5){
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${(startingPoints).toFixed(1)}`)
            break;
        } 
       
    }
    if(startingPoints <= 1250.5){
        console.log(`Sorry, ${actorName} you need ${(1250.5 - startingPoints).toFixed(1)} more!`)
    }
}
oscars(["Sandra Bullock", "340", "5", "Robert De Niro", "50", "Julia Roberts", "40.5", "Daniel Day-Lewis", "39.4", "Nicolas Cage", "29.9", "Stoyanka Mutafova", "33"])