function literature(input){
    let pages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let days = Number(input[2]);

    let totalReadingTime = pages / pagesPerHour;
    let NeededHours = totalReadingTime / days ;

    console.log(NeededHours);
}
literature(["212","20 ","2"])