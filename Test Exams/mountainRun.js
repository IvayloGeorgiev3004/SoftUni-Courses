function mountainRun(input){
    let wolrdRecord = input[0];
    let distanceInMeteres = input[1];
    let timeInSecondsPerMeter = input[2];

    let totalTImeNeeded = timeInSecondsPerMeter * distanceInMeteres;
    let slowinDownNumber = Math.floor(distanceInMeteres / 50);
    let slowingDownTime = slowinDownNumber * 30;

    let finalTime = totalTImeNeeded + slowingDownTime;
    let timeDiff = Math.abs(finalTime - wolrdRecord);

    if (finalTime < wolrdRecord){
        console.log(`Yes! The new record is ${finalTime.toFixed(2)} seconds.`)
    }   else {
        console.log(`No! He was ${timeDiff.toFixed(2)} seconds slower.`)
    }

}
mountainRun([1377, 389, 3])