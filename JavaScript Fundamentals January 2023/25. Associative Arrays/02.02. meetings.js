function meetings(array) {

    let meetingsObj = {};
    array.forEach(element => {
        let [day, personName] = element.split(" ")
        if (!meetingsObj.hasOwnProperty(day)) {
            meetingsObj[day] = personName
            console.log(`Scheduled for ${day}`)
        } else {
            console.log(`Conflict on ${day}!`)
        }
    });

    for (let [day, name] of Object.entries(meetingsObj)) {
        console.log(`${day} -> ${name}`)
    }

}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])


