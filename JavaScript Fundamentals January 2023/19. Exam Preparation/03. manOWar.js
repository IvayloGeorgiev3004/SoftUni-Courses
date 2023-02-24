function manOWar(array) {
    let pirateShip = array
        .shift()
        .split(">")
        .map(Number)
    let warShip = array
        .shift()
        .split(">")
        .map(Number)
    let maxHealth = Number(array.shift())

    for (let commands of array) {
        let command = commands
            .split(" ")
            .shift()
        let commandPower = commands
            .split(" ")
            .splice(1)
            .map(Number)
        switch (command) {
            case "Fire": let index = commandPower[0]; let damage = commandPower[1];
                fireAtWarship(index, damage); break;

            case "Defend": // TO DO
            case "Repair": // TO DO
            case "Status": // TO DO
            case "Retire": // TO DO
        }
        debugger
    }

    function fireAtWarship(index, damage) {
        if (index >= 0 && index <= warShip.length) {
            warShip[index] -= Number(damage)
        }

    }
    function defendMyShip(startIndex, endIndex, damage) {
        if (startIndex >= 0 && startIndex <= pirateShip.length) {
            for (let i = startIndex; i <= endIndex; i++) {
                pirateShip[i] -= damage
            }
        }
    }

}
manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"])