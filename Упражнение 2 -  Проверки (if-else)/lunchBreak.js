function lunchBreak(input){
    let tvShow = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchTime = breakDuration / 8;
    let relaxTime = breakDuration / 4;

    let TimeRemaining = breakDuration - lunchTime - relaxTime

    let totalTimeRemaining = Math.abs(TimeRemaining - episodeDuration)
    totalTimeRemaining = Math.ceil(totalTimeRemaining)

    if (TimeRemaining >= episodeDuration){
        console.log(`You have enough time to watch ${tvShow} and left with ${totalTimeRemaining} minutes free time.`)

    } else {
        console.log(`You don't have enough time to watch ${tvShow}, you need ${totalTimeRemaining} more minutes.`)
    }
}

lunchBreak(["Teen Wolf",

"48",

"60"])