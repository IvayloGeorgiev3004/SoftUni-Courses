function dayOfTheWeek(arr) {

    let arrDaysOfTheWeek = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"]

    if (arr < 1 || arr > 7) {
        console.log("Invalid day!")
    } else {
        console.log(arrDaysOfTheWeek[arr - 1])
    }
}
dayOfTheWeek([0])