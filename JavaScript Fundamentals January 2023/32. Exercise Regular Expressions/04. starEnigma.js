function starEnigma(array) {
    let count = Number(array.shift())
    let countRegex = /[SsTtAaRr]/g
    let decryptedMessage = /@(?<planetName>[A-Za-z]+)[^@:!\->]*:(?<population>\d+)[^@:!\->]*!(?<attackType>[A|D])![^@:!\->]*->(?<soldierCount>\d+)/g
    let attackedPlanets = [];
    let destroyedPlanets = [];
    let finalMatch = ""

    for (let i = 0; i < count; i++) {
        let message = ""
        let match = array[i].match(countRegex)
        let notEncrypted = array[i].match(decryptedMessage)
        if (match !== null && notEncrypted === null) {
            for (let chars of array[i]) {
                let currentCharCode = chars.charCodeAt(0) - match.length;
                let charToAdd = String.fromCharCode(currentCharCode)
                message += charToAdd
            }
        }
        if (notEncrypted !== null) {
            finalMatch = decryptedMessage.exec(notEncrypted)
            if (finalMatch.groups.attackType === "A") {
                attackedPlanets.push(finalMatch.groups.planetName)
            } else {
                destroyedPlanets.push(finalMatch.groups.planetName)
            }
            finalMatch = decryptedMessage.exec(message)
        }
        finalMatch = decryptedMessage.exec(message)
        if (finalMatch !== null) {
            if (finalMatch.groups.attackType === "A") {
                attackedPlanets.push(finalMatch.groups.planetName)
            } else {
                destroyedPlanets.push(finalMatch.groups.planetName)
            }
            finalMatch = decryptedMessage.exec(message)
        }
    }
    attackedPlanets.sort((a, b) => a.localeCompare(b));
    destroyedPlanets.sort((a, b) => a.localeCompare(b));

    console.log(`Attacked planets: ${attackedPlanets.length}`)
    attackedPlanets.forEach(element => console.log(`-> ${element}`))
    console.log(`Destroyed planets: ${destroyedPlanets.length}`)
    destroyedPlanets.forEach(element => console.log(`-> ${element}`))

}
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR', `@Coruscant:2000000000!D!->5000`])


