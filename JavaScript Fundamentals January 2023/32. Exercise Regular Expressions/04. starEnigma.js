function starEnigma(array) {
    let count = Number(array.shift())
    let countRegex = /[SsTtAaRr]/g
    let decryptedMessage = /@(?<planetName>[A-Z]+[a-z]*)[\w]*:(?<population>[\d]+)!(?<attackType>[A|D]+)!->(?<soldierCount>[\d]+)/g
    let message = ""
    let aCounter = 0;
    let dCounter = 0;
    let finalResObj = {}

    for (let i = 0; i < count; i++) {
        let match = array[i].match(countRegex)
        let numToRemoveFromASCII = match.length;
        for (let chars of array[i]) {
            let currentCharCode = chars.charCodeAt(0) - numToRemoveFromASCII
            let charToAdd = String.fromCharCode(currentCharCode)
            message += charToAdd
        }
        let finalMatch = decryptedMessage.exec(message)
        if (finalMatch.groups.attackType === "A") {
            aCounter++
            finalResObj[finalMatch.groups.planetName] = finalMatch.groups.attackType
        } else {
            dCounter++
            finalResObj[finalMatch.groups.planetName] = finalMatch.groups.attackType
        }
    }
    debugger


}
starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'])