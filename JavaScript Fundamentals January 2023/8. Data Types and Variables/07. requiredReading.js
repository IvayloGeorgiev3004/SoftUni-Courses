function requiredReading(totalPageNumbers, pagesPerHour, numberOfDays) {
    let totalReadingTime = totalPageNumbers / pagesPerHour;
    let requiredDaysToRad = totalReadingTime / numberOfDays
    console.log(requiredDaysToRad)

}
requiredReading(212,
    20,
    2)