function muOnline(string) {
    let rooms = string.split("|")
    let health = 100;
    let bitcoins = 0;
    let diedTrigger = false;
    let roomsCounter = 0;

    for (let actions of rooms) {
        roomsCounter++
        actions = actions.split(" ")
        let command = actions.shift()
        let action = actions.shift()
        switch (command) {
            case "chest": chestWithBitcoins(action); break;
            case "potion": healing(action); break;
            default: monsterFight(command, action); break;
        }
        if (diedTrigger === true) {
            console.log(`Best room: ${roomsCounter}`)
            break;
        }

    }
    function monsterFight(MonsterName, damage) {
        health -= damage;
        if (health > 0) {
            console.log(`You slayed ${MonsterName}.`)
        } else {
            console.log(`You died! Killed by ${MonsterName}.`)
            diedTrigger = true;
        }
    }

    function healing(potion) {
        let missingHealth = 100 - health;
        let neededHealth = Math.min(missingHealth, potion)
        console.log(`You healed for ${neededHealth} hp.`)
        health += neededHealth;
        console.log(`Current health: ${health} hp.`)

    }
    function chestWithBitcoins(bitcoinsFound) {
        bitcoins += Number(bitcoinsFound);
        console.log(`You found ${bitcoinsFound} bitcoins.`)
    }

    if (diedTrigger === false) {
        console.log(`You've made it!`)
        console.log(`Bitcoins: ${bitcoins}`)
        console.log(`Health: ${health}`)
    }
}

muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110")