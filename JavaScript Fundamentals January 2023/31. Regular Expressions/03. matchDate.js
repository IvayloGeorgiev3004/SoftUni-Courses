function matchDate(array) {
    let regex = /\b(?<day>\d{2})([./-])(?<month>[A-Z][a-z]{2})\2(?<year>\w{4})\b/g
    let datesFromArray = array.shift()
    let matches = regex.exec(datesFromArray)
    while (matches !== null) {
        console.log(`Day: ${matches.groups.day}, Month: ${matches.groups.month}, Year: ${matches.groups.year}`)
        matches = regex.exec(datesFromArray)
    }
}
matchDate(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973,1/Feb/2016'])