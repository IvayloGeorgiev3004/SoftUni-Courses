function houseParty(array) {
    let partyList = []
    let guestName = array.join(' ').split(' ')[0]
    array.shift()
    partyList.push(guestName)
    for (guests of array) {
        guestName = guests.split(" ")[0]
        let goingOrNot = guests.split(" ").slice(1).join(" ")
        let isInTheList = false;

        switch (goingOrNot) {
            case "is going!":
                for (let i = 0; i < partyList.length; i++) {
                    if (partyList[i] === guestName) {
                        isInTheList = true;
                    }
                }
                if (isInTheList === false) {
                    partyList.push(guestName)
                } else {
                    console.log(`${guestName} is already in the list!`)
                }
                break;
            case "is not going!":
                for (let i = 0; i < partyList.length; i++) {
                    if (partyList[i] === guestName) {
                        isInTheList = true;
                    }
                }
                if (isInTheList === false) {
                    console.log(`${guestName} is not in the list!`)
                } else {
                    let indexOfNameToRemove = partyList.indexOf(guestName)
                    partyList.splice(indexOfNameToRemove, 1)
                }
                break;
        }

    }
    return partyList.join("\n")
}
console.log(houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!']))