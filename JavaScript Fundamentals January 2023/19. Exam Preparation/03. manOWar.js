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

            case "Defend": let startIndex = commandPower[0]; let endIndex = commandPower[1]; let WarShipDamage = commandPower[2]
                defendMyShip(startIndex, endIndex, WarShipDamage); break;

            case "Repair": let indexToRepair = commandPower[0]; let healthToRepair = commandPower[1];
                repairMyShip(indexToRepair, healthToRepair); break;

            case "Status": statusOfShipSections(pirateShip,maxHealth); break;
            case "Retire":
                console.log(`Pirate ship status: ${pirateShip.reduce((a, b) => a + b, 0)}`)
                console.log(`Warship status: ${warShip.reduce((a, b) => a + b, 0)}`)
                break;
        }
        if (isShipDead(pirateShip)) {
            console.log("You lost! The pirate ship has sunken.")
            break;
        }

        if (isShipDead(warShip)) {
            console.log("You won! The enemy ship has sunken.")
        }

    }

    function fireAtWarship(index, damage) {
        if (index >= 0 && index < warShip.length) {
            warShip[index] -= Number(damage)
        }

    }

    function defendMyShip(startIndex, endIndex, damage) {
        if (startIndex >= 0 && startIndex < pirateShip.length && endIndex >= 0 && endIndex < pirateShip.length) {
            for (let i = startIndex; i <= endIndex; i++) {
                pirateShip[i] -= damage;
            }
        }
    }

    function repairMyShip(index, healthToRepair) {
        if (index >= 0 && index < pirateShip.length) {
            let sectionHealth = pirateShip[index]
            let minHealth = maxHealth - sectionHealth
            let healthToUse = Math.min(minHealth, healthToRepair)
            pirateShip[index] += Number(healthToUse)
        }
    }

    function statusOfShipSections(pirateShip, maxHealth) {
        let sectionsForRepair = pirateShip.filter(a => a < (maxHealth * 0.2));
        debugger
        console.log(`${sectionsForRepair.length} sections need repair.`)
    }

    function isShipDead(ship) {
        let isDead = ship.filter(a => a <= 0)
        return isDead.length > 0
    }

}
manOWar(["2>3>4>5>2",
    "6>7>2>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"])