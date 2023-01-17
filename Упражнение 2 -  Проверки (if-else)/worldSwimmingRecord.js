function worldSwimmingRecord(input){
    let worldRecord = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let secondsPerMeter = Number(input[2]);

    let totalTime = distanceInMeters * secondsPerMeter
    let slowingDown = Math.floor(distanceInMeters / 15) * 12.5
    let timeWithSlowingDown = totalTime + slowingDown

    if (worldRecord <= timeWithSlowingDown ){
        timeWithSlowingDown = Math.abs(timeWithSlowingDown - worldRecord);
        console.log(`No, he failed! He was ${timeWithSlowingDown.toFixed(2)} seconds slower.`);
    } else {
        console.log(`Yes, he succeeded! The new world record is ${timeWithSlowingDown.toFixed(2)} seconds.`);
    }

}
worldSwimmingRecord(["55555.67",

"3017","5.03"])