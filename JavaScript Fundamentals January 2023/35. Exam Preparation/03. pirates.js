function pirates(array) {
    function createNewCities(cityName, cityPopulation, cityGold) {


        let citiesInfo = {
            name: null,
            population: null,
            gold: null
        }
        if (this.name !== cityName) {
            this.name = cityName;
            this.population = cityPopulation;
            this.gold = cityGold;
        } else {
            console.log(`test`)
        }
    }
    let index = 0;
    let createCities = array[index];
    let map = new Map()
    while (createCities !== "Sail") {
        let [cityName, cityPopulation, cityGold] = createCities.split("||")
        cityGold = Number(cityGold);
        cityPopulation = Number(cityPopulation);
        // if (citiesInfo.name !== cityName) {
        //     citiesInfo.name = cityName;
        //     citiesInfo.population = cityPopulation;
        //     citiesInfo.gold = cityGold
        //     map.set(cityName, citiesInfo);
        // } else {
        //     let newGoldAmount = citiesInfo.gold + cityGold
        //     let newPopulationAmount = citiesInfo.population + cityPopulation
        //     citiesInfo.population = newPopulationAmount;
        //     citiesInfo.gold = newGoldAmount
        //     map.set(cityName, citiesInfo);
        // }
        createNewCities(cityName, cityPopulation.cityGold);
        debugger

        index++
        createCities = array[index];
    }
}

pirates((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]))