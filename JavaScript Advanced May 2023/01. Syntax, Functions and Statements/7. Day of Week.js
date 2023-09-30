function daysOfWeek(string) {
    let day = 0;
    switch (string) {
        case "Monday": day = 1; break;
        case "Tuesday": day = 2; break;
        case "Wednesday": day = 3; break;
        case "Thursday": day = 4; break;
        case "Friday": day = 5; break;
        case "Saturday": day = 6; break;
        case "Sunday": day = 7; break;
    }

    if (day !== 0) {
        console.log(day)
    } else {
        console.log("error")
    }
}
daysOfWeek('Monday')