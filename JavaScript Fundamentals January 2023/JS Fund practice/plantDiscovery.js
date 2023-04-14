function plantDiscovery(array) {
    let plants = Number(array.shift())
    let map = new Map();

    for (let i = 0; i < plants; i++) {
        let text = array.shift();
        let [plant, rarity] = text.split(`<->`);
        rarity = Number(rarity);
        let specifications = {
            rarity,
            rating: 0,
            counter: 0,
        }
        map.set(plant, specifications)
    }
    let index = 0;
    let currentInput = array[index];
    while (currentInput !== "Exhibition") {
        let tokens = currentInput.split(": ")
        let command = tokens[0];
        switch (command) {
            case "Rate": {
                let [plant, rating] = tokens[1].split(" - ");
                rating = Number(rating)
                rate(plant, rating)

            }

                break;
            case "Update": {
                let [plant, rarity] = tokens[1].split(" - ");
                rarity = Number(rarity)
                update(plant, rarity)
            }
                break;
            case "Reset": {

                let plant = tokens[1];
                reset(plant)
            }
                break;
        }
        index++
        currentInput = array[index];
    }

    console.log(`Plants for the exhibition:`)
    for (let results of map) {
        console.log(`- ${results[0]}; Rarity: ${results[1].rarity}; Rating: ${(results[1].rating / results[1].counter).toFixed(2)}`)
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
        map.set(plant, plantSpecs)
        return map;

    }


}
plantDiscovery(["2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"])