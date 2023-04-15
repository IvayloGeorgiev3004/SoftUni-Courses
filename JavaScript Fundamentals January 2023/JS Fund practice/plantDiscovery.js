function plantDiscovery(array) {
    let plants = Number(array.shift())
    let map = new Map();

    for (let i = 0; i < plants; i++) {
        let text = array[i];
        let [plant, rarity] = text.split(`<->`);
        rarity = Number(rarity);
        let specifications = {
            rarity,
            rating: 0,
            counter: 0,
        }
        map.set(plant, specifications)
    }
    array.splice(0, plants)
    let index = 0;
    let currentInput = array[index];
    while (currentInput !== "Exhibition") {
        let tokens = currentInput.split(": ")
        let command = tokens[0];

        switch (command) {
            case "Rate": {
                let [plant, rating] = tokens[1].split(" - ");
                rating = Number(rating)
                if (!map.has(plant)) {
                    console.log(`error`)
                    index++
                    currentInput = array[index];
                    continue
                }
                rate(plant, rating)
            }

                break;
            case "Update": {
                let [plant, rarity] = tokens[1].split(" - ");
                rarity = Number(rarity)
                if (!map.has(plant)) {
                    console.log(`error`)
                    index++
                    currentInput = array[index];
                    continue
                }
                update(plant, rarity)
            }
                break;
            case "Reset": {

                let plant = tokens[1];
                if (!map.has(plant)) {
                    console.log(`error`)
                    index++
                    currentInput = array[index];
                    continue
                }
                reset(plant)
            }
                break;
        }
        index++
        currentInput = array[index];
    }

    debugger
    console.log(`Plants for the exhibition:`)
    for (let results of map) {
        if (results[1].rarity === 0) {
            console.log(`- ${results[0]}; Rarity: ${0}; Rating: ${(results[1].rating / results[1].counter).toFixed(2)}`)
        } else if (results[1].rating === 0) {
            console.log(`- ${results[0]}; Rarity: ${results[1].rarity}; Rating: ${(0).toFixed(2)}`)
        } else {
            console.log(`- ${results[0]}; Rarity: ${results[1].rarity}; Rating: ${(results[1].rating / results[1].counter).toFixed(2)}`)

        }
    }

    function rate(plant, rating) {
        let plantSpecs = map.get(plant)
        plantSpecs.rating += rating
        plantSpecs.counter++
        map.set(plant, plantSpecs)
        return map;

    }

    function update(plant, rarity) {
        let plantSpecs = map.get(plant)
        plantSpecs.rarity = rarity
        map.set(plant, plantSpecs)
        return map;

    }

    function reset(plant) {
        let plantSpecs = map.get(plant)
        plantSpecs.rating = 0;
        plantSpecs.counter++;
        map.set(plant, plantSpecs)
        return map;

    }
}
plantDiscovery(["3",
    "Candelabra<->10",
    "Candelabra<->33",
    "Oahu<->10",
    "Rate: Odahu - 7",
    "Rate: Candelabra - 6",
    "Reset: Candelabra",
    "Rate: Candelabra - 6",
    "Exhibition"])