function starEnigma(array) {
    let count = Number(array.shift())
    let countRegex = /[SsTtAaRr]/g
    let decryptedMessage = /@(?<planetName>[A-Z]+[a-z]*)[^@|\-|!|:|>|]*:(?<population>[\d]+)[^@|\-|!|:|>|]*!(?<attackType>[A|D]+)![^@|\-|!|:|>|]*->(?<soldierCount>[\d]+)/g
    let finalResObj = {}

    for (let i = 0; i < count; i++) {
        let message = ""
        let match = array[i].match(countRegex)
        let numToRemoveFromASCII = match.length;
        for (let chars of array[i]) {
            let currentCharCode = chars.charCodeAt(0) - numToRemoveFromASCII
            let charToAdd = String.fromCharCode(currentCharCode)
            message += charToAdd
        }
        debugger
        let finalMatch = decryptedMessage.exec(message)
        if (finalMatch !== null) {

            if (finalMatch.groups.attackType === "A") {
                finalResObj[finalMatch.groups.planetName] = finalMatch.groups.attackType
            } else {
                finalResObj[finalMatch.groups.planetName] = finalMatch.groups.attackType
            }
            finalMatch = decryptedMessage.exec(message)
        }
    }
    let finalArr = Object.entries(finalResObj).sort(([name], [name2]) => {
        return name.localeCompare(name2)

    })
    let attackedPlanets = [];
    let destroyedPlanets = [];
    for (let planets of finalArr) {
        if (planets[1] === "A") {
            attackedPlanets.push(planets[0])
        } else {
            destroyedPlanets.push(planets[0])
        }
    }
    console.log(`Attacked planets: ${attackedPlanets.length}`)
    attackedPlanets.forEach(element => {
        console.log(`-> ${element}`)
    })

    console.log(`Destroyed planets: ${destroyedPlanets.length}`)
    destroyedPlanets.forEach(element => {
        console.log(`-> ${element}`)
    })
}
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'])