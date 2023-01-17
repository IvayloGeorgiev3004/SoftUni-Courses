function lunchBreak2(input){
    let tvShow = input[0];
    let episodeDuration = Number(input[1]);
    let breakDuration = Number(input[2]);

    let lunchDuration = breakDuration / 8;
    let relaxDuration = breakDuration / 4;

    let totalBreakDuration = breakDuration - lunchDuration - relaxDuration;
    let diff = Math.abs(totalBreakDuration - episodeDuration);
    diff = Math.ceil(diff);

    if (totalBreakDuration >= episodeDuration){
        console.log(`You have enough time to watch ${tvShow} and left with ${diff} minutes free time.`);
    } else {
        console.log(`You don't have enough time to watch ${tvShow}, you need ${diff} more minutes.`);
    } 

}
lunchBreak2(["Teen Wolf",

"48",

"60"])