function cityTaxes(cityName, cityPopulation, cityTreasury) {
    let cityObject = {};

    cityObject.name = cityName;
    cityObject.population = cityPopulation;
    cityObject.treasury = cityTreasury;
    cityObject.taxRate = 10;

    cityObject.collectTaxes = function collectTaxes() {
        cityObject.treasury += cityObject.population * cityObject.taxRate;
    };

    cityObject.applyGrowth = function applyGrowth(percentage) {
        cityObject.population += (percentage * cityObject.population) / 100;
    };

    cityObject.applyRecession = function applyRecession(percentage) {
        cityObject.treasury -= (percentage * cityObject.treasury) / 100;
    };

    return cityObject;
}
const city = cityTaxes("Tortuga", 7000, 15000);
const testCity = cityObject;
debugger;
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);
city.applyRecession(5);
console.log(city.population);
