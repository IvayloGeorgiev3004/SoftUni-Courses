function degustationParty(array) {
    let map = new Map()
    let unlikeMealsCounter = 0;
    let index = 0;
    let tokens = array[index]

    while (tokens !== "Stop") {
        let [command, guest, meal] = tokens.split("-")
        let mealsArr = []
        switch (command) {
            case "Like": {
                if (!map.has(guest)) {
                    mealsArr.push(meal)
                    map.set(guest, mealsArr)
                } else {
                    let currMeals = map.get(guest)
                    if (!currMeals.includes(meal)) {
                        currMeals.push(meal)
                        map.set(guest, currMeals)
                    }
                }
                break;
            }
            case "Dislike": {
                if (!map.has(guest)) {
                    console.log(`${guest} is not at the party.`)
                } else {
                    let currMeals = map.get(guest)
                    if (!currMeals.includes(meal)) {
                        console.log(`${guest} doesn't have the ${meal} in his/her collection.`)
                    } else {
                        console.log(`${guest} doesn't like the ${meal}.`)
                        unlikeMealsCounter++
                        let indexToDelete = currMeals.indexOf(meal)
                        currMeals.splice(indexToDelete, 1)
                    }
                }
                break;
            }
        }
        index++
        tokens = array[index];
    }

    for (let [name, array] of map) {
        console.log(`${name}: ${array.join(", ")}`)
    }
    console.log(`Unliked meals: ${unlikeMealsCounter}`)
}
degustationParty(["Like-Katy-fish",

    "Dislike-Katy-fish",

    "Stop"])