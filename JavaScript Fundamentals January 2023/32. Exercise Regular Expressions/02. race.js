function race(array) {
    let distanceRegex = /(?<distance>[\d])/g
    let nameMatchRegex = /[A-Za-z]/g
    let participantsResultsObj = {}
    let participantsArr = array.shift()
        .split(", ")
        .forEach(element => {
            if (!participantsResultsObj.hasOwnProperty(element)) {
                participantsResultsObj[element] = null
            }
        })

    for (let command of array) {
        if (command !== `end of race`) {
            let distance = command.match(distanceRegex).map(Number).reduce((a, b) => a + b, 0)
            let name = command.match(nameMatchRegex).join("")
            if (participantsResultsObj.hasOwnProperty(name)) {
                let currDistance = participantsResultsObj[name]
                participantsResultsObj[name] = currDistance + distance
            }
        } else {
            break;
        }

    }
    let sortedResult = Object.entries(participantsResultsObj).sort(([key, value], [key2, value2]) => {
        return value2 - value;
    })

    console.log(`1st place: ${sortedResult[0][0]}\n2nd place: ${sortedResult[1][0]}\n3rd place: ${sortedResult[2][0]}`)

}
race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'])