function time15Minutes(input) {
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let hoursInMinutes = Math.floor(hours * 60);
    let totalMinutes = hoursInMinutes + minutes;

    let result = totalMinutes + 15;

    let h = Math.floor(result / 60);
    let m = Math.floor(result % 60);


    if (m < 10) {
        m = `0${m}`
    }

    if (h >= 24) {
        h = 0;
    }
    console.log(`${h}:${m}`)


}

time15Minutes(["23", "45"])