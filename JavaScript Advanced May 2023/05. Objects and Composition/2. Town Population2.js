function townPopulation2(array) {
    let citiesObject = {};

    array.forEach((element) => {
        let [cityName, cityPopulation] = element.split(" <-> ");
        cityPopulation = Number(cityPopulation);
        if (citiesObject[cityName] === undefined) {
            citiesObject[cityName] = cityPopulation;
        } else {
            citiesObject[cityName] += cityPopulation;
        }
    });

    for (city in citiesObject) {
        console.log(`${city} : ${citiesObject[city]}`);
    }
}
townPopulation2([
    "Istanbul <-> 100000",
    "Honk Kong <-> 2100004",
    "Jerusalem <-> 2352344",
    "Mexico City <-> 23401925",
    "Istanbul <-> 1000",
]);
