function plantDiscovery(array) {
    let plants = Number(array.shift())
    let map = new Map();

    for (let i = 0; i < plants; i++) {
        let text = array.shift();
        let [plant, rarity] = text.split(`<->`);
        rarity = Number(rarity);
        let specifications = {
            rarity,
            rating:0,
        }
        map.set(plant, specifications)
    }
    let index = 0;
    let currentInput = array[index];
    while (currentInput !== "Exhibition") {
        let tokens = currentInput.split(": ")
        let command = tokens[0];
        switch(command){
            case "Rate":
                //TODO
                break;
            case "Update":
                //TODO
                break;
            case "Reset":
                //TODO
            break;
        }
    }

    function rate(plant, rating){

    }

}
plantDiscovery(["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])