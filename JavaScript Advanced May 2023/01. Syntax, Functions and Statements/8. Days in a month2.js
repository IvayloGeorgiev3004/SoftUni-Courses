function daysOfMonth2(month, year){
    let date = new Date(year, month,0)
    console.log(date.getDate())

}
daysOfMonth2(1, 2012)