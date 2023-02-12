function trains(array) {
    let wagons = array
        .shift()
        .split(" ")
        .map(Number)
    let maxCapacity = Number(array.shift())

    for (commands of array) {
        if (commands.includes("Add")) {
            let addWagons = commands.split(" ")
            wagons.push(Number(addWagons[1]))
        } else {
            let addPassengers = Number(commands)
            for (let i = 0; i < wagons.length; i++) {
                if ((addPassengers + wagons[i]) <= maxCapacity) {
                    wagons[i] += addPassengers;
                    break;
                }
            }
        }
    }
    return wagons.join(" ")
}
trains(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'])