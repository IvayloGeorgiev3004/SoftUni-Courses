function pirates(array) {
    let index = 0;
    let createCities = array[index];
    let map = new Map()
    while (createCities !== "Sail") {
        let [cityName, cityPopulation, cityGold] = createCities.split("||")
        cityGold = Number(cityGold);
        cityPopulation = Number(cityPopulation);
        let citiesInfo = {
            name: null,
            population: null,
            gold: null,
        }
        if (!map.has(cityName)) {
            citiesInfo.name = cityName;
            citiesInfo.population = cityPopulation;
            citiesInfo.gold = cityGold
            map.set(cityName, citiesInfo);
        } else {
            let city = map.get(cityName);
            let newGoldAmount = city.gold + cityGold
            let newPopulationAmount = city.population + cityPopulation
            city.population = newPopulationAmount;
            city.gold = newGoldAmount
            map.set(cityName, city);
        }
        index++
        createCities = array[index];
    }
    index++
    let element = array[index]
    while (element !== "End") {
        let tokens = element.split(`=>`);
        let command = tokens.shift();
        switch (command) {
            case "Plunder": {
                let plunderedCity = tokens.shift();
                let killedPeople = Number(tokens.shift());
                let goldTaken = Number(tokens.shift());
                let city = map.get(plunderedCity);
                city.population -= killedPeople;
                city.gold -= goldTaken;
                console.log(`${plunderedCity} plundered! ${goldTaken} gold stolen, ${killedPeople} citizens killed.`)
                if (city.population <= 0 || city.gold <= 0) {
                    console.log(`${plunderedCity} has been wiped off the map!`)
                    map.delete(plunderedCity)
                }
                break;
            }
            case "Prosper": {
                let prosperedCity = tokens.shift();
                let goldAdded = Number(tokens.shift());
                if (goldAdded <= 0) {
                    console.log(`Gold added cannot be a negative number!`)
                } else {
                    let city = map.get(prosperedCity);
                    city.gold += goldAdded;
                    console.log(`${goldAdded} gold added to the city treasury. ${prosperedCity} now has ${city.gold} gold.`)
                }
                break;
            }

        }
        index++
        element = array[index]
    }

    if (map.size > 0) {
        console.log(`Ahoy, Captain! There are ${map.size} wealthy settlements to go to:`)
        for (let results of map) {
            console.log(`${results[0]} -> Population: ${results[1].population} citizens, Gold: ${results[1].gold} kg`)
        }
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`)
    }

}

pirates(["Tortuga||345000||1250",
    "Sail",
    "Plunder=>Tortuga=>345000=>1250",
    "End"])