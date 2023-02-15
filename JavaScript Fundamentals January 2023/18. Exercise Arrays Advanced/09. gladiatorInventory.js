function gladiatorInventory(array) {
    let inventory = array.slice(0, 1)
    array.shift();
    inventory = inventory.join(" ").split(" ")

    for (let commands of array) {
        let action = commands.split(" ")
        let command = action.shift()
        switch (command) {
            case "Buy": //If you receive the Buy command, you should add the equipment at the last position in the inventory, but only if it isn't bought already.
                let equipment = action.shift();
                if (inventory.indexOf(equipment) === -1) {
                    inventory.push(equipment);
                } else {
                    continue;
                }
                break;
            case "Trash": //If you receive the Trash command, delete the equipment if it exists.
                let equipmentToTrash = action.shift()
                if (inventory.indexOf(equipmentToTrash) !== -1) {
                    inventory.splice(inventory.indexOf(equipmentToTrash), 1);
                } else {
                    continue;
                }
                break;
            case "Repair": //If you receive the Repair command, you should repair the equipment if it exists and place it in the last position.
                let equipmentToRepair = action.shift();
                if (inventory.indexOf(equipmentToRepair) !== -1) {
                    let indexToMove = inventory.indexOf(equipmentToRepair)
                    inventory.splice(indexToMove, 1)
                    inventory.push(equipmentToRepair)
                }
                break;
            case "Upgrade": //you should check if the equipment exists and insert after it the upgrade in the following format: "{equipment}:{upgrade}"
                let upgrades = action.shift()
                upgrades = upgrades.split("-")
                let equipmentToUpgrade = upgrades.shift()
                let upgrade = upgrades.shift()

                if (inventory.indexOf(equipmentToUpgrade) !== -1) {
                    let indexOfUpgrade = inventory.indexOf(equipmentToUpgrade)
                    let upgradeNameToPush = equipmentToUpgrade + ":" + upgrade;
                    inventory.splice(indexOfUpgrade + 1, 0, upgradeNameToPush)
                    debugger
                }

        }

    }
    console.log(inventory.join(" "))

}
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V'])
