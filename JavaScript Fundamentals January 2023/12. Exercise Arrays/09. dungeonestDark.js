function dungeonsDark(array) {
    let isFinished = true;
    let flag = false;
    let health = 100;
    let coins = 0;
    let roomsCounter = 0;
    let currentChar = ""
    let currentWord = ""
    let currentAction = 0;
    let currentRoomInfo = ""
    let monsterChestOrPotion = ""
    array = array.toString()
    let index = 0;

    while (index <= array.length) {
        currentChar = array[index]
        if (currentChar === ' ') {
            monsterChestOrPotion = currentWord;
            currentWord = ""
        } else if (currentChar === "|" || index === array.length) {
            roomsCounter++
            currentAction = Number(currentWord)
            currentRoomInfo = monsterChestOrPotion

            switch (monsterChestOrPotion) {
                case "potion":
                    if ((currentAction + health) <= 100) {
                        health += currentAction;
                        console.log(`You healed for ${currentAction} hp.`)
                    } else {
                        health = 100 - health;
                        console.log(`You healed for ${health} hp.`)
                        health = 100
                    }
                    console.log(`Current health: ${health} hp.`)
                    break;
                case "chest": console.log(`You found ${currentAction} coins.`)
                    coins += currentAction;
                    break;
                default: health -= currentAction;
                    if (health > 0) {
                        console.log(`You slayed ${monsterChestOrPotion}.`)
                    } else {
                        console.log(`You died! Killed by ${monsterChestOrPotion}.`)
                        console.log(`Best room: ${roomsCounter}`)
                        flag = true;
                        isFinished = false;
                        break;
                    }
            }
            currentAction = 0
            currentRoomInfo = ""
            currentWord = ""
            monsterChestOrPotion = ""
        } else {
            currentWord += array[index]
        }
        if (flag === true) {
            break;
        }
        index++
    }
    if (isFinished === true) {
        console.log(`You've made it!`)
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }

}
dungeonsDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])