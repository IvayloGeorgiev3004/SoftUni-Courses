function meetings(array) {

    let meetingsObj = {}

    for (let entries of array) {
        let [day, name] = entries.split(" ")

        if (!meetingsObj.hasOwnProperty(day)) {
            meetingsObj[day] = name;
            console.log(`Scheduled for ${day}`)
        } else {
            console.log(`Conflict on ${day}!`)
        }

    }

    for (let day in meetingsObj) {
        console.log(`${day} -> ${meetingsObj[day]}`)
    }

}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])