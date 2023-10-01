function calculateTime(steps, footLength, speedInKm) {
    let distanceToUniversity = steps * footLength / 1000; //to get distance in km
    let walkingTimeInSeconds = ((distanceToUniversity / speedInKm) * 3600); //to get in seconds
    let brakeMinutes = Math.floor(distanceToUniversity / 0.5);
    let totalBrakeInSeconds = brakeMinutes * 60; //to get brake in seconds
    let totalTimeInSeconds = totalBrakeInSeconds + walkingTimeInSeconds;

    let hours = Math.floor(totalTimeInSeconds / 3600);
    let minutes = Math.floor(totalTimeInSeconds / 60);
    let seconds = Math.ceil(totalTimeInSeconds % 60);

    if (hours <= 9) {
        hours = 0 + `${hours}`
    }
    if (minutes <= 9) {
        minutes = 0 + `${minutes}`
    }
    if (seconds <= 9) {
        seconds = 0 + `${seconds}`
    }
    console.log(`${hours}:${minutes}:${seconds}`)

}
calculateTime(145, 0.70, 5.5)