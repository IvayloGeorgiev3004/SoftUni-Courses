function sumSeconds(input) {
    let seconds1 = Number(input[0]);
    let seconds2 = Number(input[1]);
    let seconds3 = Number(input[2]);

    let totalSeconds = seconds1 + seconds2 + seconds3;
    let hours = Math.trunc(totalSeconds / 60);
    let minutes = totalSeconds % 60;

    if (minutes < 10) {
        console.log(`${hours}:0${minutes}`)
    } else {
        console.log(`${hours}:${minutes}`)
    }


}
sumSeconds(["14", "12", "10"])