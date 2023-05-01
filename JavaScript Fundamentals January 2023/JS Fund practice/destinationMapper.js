function destinationMapper(string) {
    let regex = /([=/])(?<location>[A-Z][A-Za-z]{2,})\1/g
    let destinationsArr = [];
    let travelPointsArr = [];

    let destinations = regex.exec(string)
    while (destinations !== null) {
        destinationsArr.push(destinations.groups.location)
        let currentLocation = destinations.groups.location.length;
        travelPointsArr.push(currentLocation)
        destinations = regex.exec(string)
    }
    let travelPoints = travelPointsArr.reduce((a, b) => a + b, 0)
    let finalDestinations = destinationsArr.join(", ")
    console.log(`Destinations: ${finalDestinations}`)
    console.log(`Travel Points: ${travelPoints}`)

}
destinationMapper("ThisIs some InvalidInput")