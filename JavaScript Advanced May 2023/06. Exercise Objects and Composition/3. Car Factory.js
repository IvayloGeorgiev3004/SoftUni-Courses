function carFactory(object) {
    // Initialize the final object with default properties
    let finalObj = {
        model: object.model,
        engine: {
            power: null,
            volume: null,
        },
        carriage: {
            type: null,
            color: null,
        },
        wheels: [],
    };

    // Available engine power options
    let counts = [90, 120, 200];
    
    // Determine the closest engine power using reduce and Math.abs()
    finalObj.engine.power = counts.reduce(function (prev, current) {
        return Math.abs(current - object.power) < Math.abs(prev - object.power) ? current : prev;
    });

    // Mapping of engine power to volume
    let volumeDict = {
        90: 1800,
        120: 2400,
        200: 3500
    };

    // Set engine volume based on the selected power
    finalObj.engine.volume = volumeDict[finalObj.engine.power];

    // Set carriage type and color from the input object
    finalObj.carriage.type = object.carriage;
    finalObj.carriage.color = object.color;

    // Determine wheel sizes based on the input wheelsize
    // If wheelsize is even, reduce it by 1 before filling the array
    finalObj.wheels = Array(4).fill(object.wheelsize % 2 === 0 ? object.wheelsize - 1 : object.wheelsize);

    // Return the final object representing the configured car
    return finalObj;
}

// Example usage of the carFactory function
const car = carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
});

console.table(
    carFactory({
        model: "VW Golf II",
        power: 90,
        color: "blue",
        carriage: "hatchback",
        wheelsize: 14,
    })
);


function carFactory(object) {
    const enginePowers = [90, 120, 200];
    const closestPower = enginePowers.reduce((prev, curr) =>
        Math.abs(curr - object.power) < Math.abs(prev - object.power) ? curr : prev
    );

    const engineVolumes = { 90: 1800, 120: 2400, 200: 3500 };

    return {
        model: object.model,
        engine: {
            power: closestPower,
            volume: engineVolumes[closestPower],
        },
        carriage: {
            type: object.carriage,
            color: object.color,
        },
        wheels: Array(4).fill(object.wheelsize % 2 === 0 ? object.wheelsize - 1 : object.wheelsize),
    };
}

console.table(
    carFactory({
        model: "VW Golf II",
        power: 90,
        color: "blue",
        carriage: "hatchback",
        wheelsize: 14,
    })
);