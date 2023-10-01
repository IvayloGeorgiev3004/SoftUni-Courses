function getgetPrevDay(year, month, day) {

    let date = new Date(year, month - 1, day)
    let getPrevDay = new Date(date)
    getPrevDay.setDate(getPrevDay.getDate() - 1)

    console.log(`${getPrevDay.getFullYear()}-${getPrevDay.getMonth() + 1}-${getPrevDay.getDate()}`)

}
getgetPrevDay(2016, 1, 1)


// let previous = new Date(year, month - 1, day - 1);
// let date = `${previous.getFullYear()}-${previous.getMonth() + 1}-${previous.getDate()}`

// console.log(date);