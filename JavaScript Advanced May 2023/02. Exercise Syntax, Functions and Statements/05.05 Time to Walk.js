function calculateNeededTime(steps, footPrintInCm, speedInKm) {
    let distanceMeters = steps * footPrintInCm;
    let speedInMetres = speedInKm * 0.277778;
    let restInSeconds = Math.floor(distanceMeters / 500) * 60;
    let timeInSeconds = Math.round(distanceMeters / speedInMetres) + restInSeconds;

    let seconds = timeInSeconds % 60;
    let minutes = Math.floor(timeInSeconds / 60);
    let hours = Math.floor(timeInSeconds / 3600);

    hours < 9 ? (hours = "0" + hours) : hours;
    seconds < 9 ? (seconds = "0" + seconds) : seconds;
    minutes < 9 ? (minutes = "0" + minutes) : minutes;

    console.log(`${hours}:${minutes}:${seconds}`);
}
calculateNeededTime(8999, 0.6, 5);
// 00:32:48
calculateNeededTime(2564, 0.7, 5.5);
// 00:22:35
