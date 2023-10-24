function townPopulation(array) {
    // Create an empty object to store city populations
    let citiesPopulationObj = {

    }
    // Iterate through each string in the input array
    for (const cities of array) {
        // Split the string into city and population using " <-> " as the separator
        let [city, population] = cities.split(" <-> ")
        // Convert population from string to number
        population = Number(population)
        debugger
        // Check if the city already exists in citiesPopulationObj
        if (citiesPopulationObj.hasOwnProperty(city)) {
            // If yes, add the current population to the existing city population
            citiesPopulationObj[city] += population
        } else {
            // If no, create a new property for the city and set its population
            citiesPopulationObj[city] = population
        }
    }
    // Iterate through the cities in citiesPopulationObj
    for (const cities in citiesPopulationObj) {
        // Print the city name and its corresponding population
        console.log(`${cities} : ${citiesPopulationObj[cities]}`)
    }
}
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])