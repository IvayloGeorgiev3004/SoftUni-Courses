function vacationBooks(input){
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let totalReadingTime = pages / pagesPerHour;
    let neededTime = totalReadingTime / days;

    console.log(neededTime);
}
vacationBooks(["212","20","2"])