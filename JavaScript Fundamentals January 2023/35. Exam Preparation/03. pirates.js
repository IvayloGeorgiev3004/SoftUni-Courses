function pirates(array) {
  let  citiesInfo = {
    name: null,
    population: null,
    gold: null
    }

    let index = 0;
    let createCities = array[index];
    let map = new Map()
    while (createCities !== "Sail") {
        let [cityName, cityPopulation, cityGold] = createCities.split("||")
        cityGold = Number(cityGold);
        cityPopulation = Number(cityPopulation);
          if (citiesInfo.name !== cityName){
            citiesInfo.name = cityName;
            citiesInfo.population = cityPopulation;
            citiesInfo.gold = cityGold
            map.set(cityName, citiesInfo);
          } else {
            let newGoldAmount = citiesInfo.gold + cityGold
            let newPopulationAmount = citiesInfo.population + cityPopulation
            citiesInfo.population = newPopulationAmount;
            citiesInfo.gold = newGoldAmount
            map.set(cityName, citiesInfo);
          }
            
       
      
        index++
        createCities = array[index];
    }
    debugger
}
pirates((["Tortuga||345000||1250",
    "Santo Domingo||240000||630",
    "Havana||410000||1100",
    "Havana||410000||1100",
    "Sail",
    "Plunder=>Tortuga=>75000=>380",
    "Prosper=>Santo Domingo=>180",
    "End"]))