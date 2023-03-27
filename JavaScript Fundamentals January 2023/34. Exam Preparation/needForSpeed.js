function needForSpeed(array) {

    class Car {
        constructor(name, mileage, fuel) {
            this.name = name;
            this.mileage = mileage;
            this.fuel = fuel;
        }
    }

    let mileageLimit = 100000;
    let fuelTankLimit = 75;
    let finalCarsArr = [];
    let cars = Number(array.shift());
    for (let i = 0; i < cars; i++) {
        let carModels = array[i].split("|");
        let car = carModels[0];
        let mileage = Number(carModels[1]);
        let fuel = Number(carModels[2]);
        let newCar = new Car(car, mileage, fuel);
        finalCarsArr.push(newCar);
    }
    array.splice(0, cars)

    for (let lines of array) {
        let strings = lines.split(" : ");
        let command = strings[0];
        if (command === "Drive") {
            let car = strings[1]
            let distance = Number(strings[2]);
            let fuel = Number(strings[3]);
            for (let carCollection of finalCarsArr) {
                if (carCollection.name === car) {
                    let currentFuel = carCollection.fuel;
                    let currentMileage = carCollection.mileage;
                    if ((currentFuel - fuel) <= 0) {
                        console.log("Not enough fuel to make that ride");
                    } else {
                        currentMileage += distance;
                        currentFuel -= fuel;
                        carCollection.fuel = currentFuel;
                        carCollection.mileage = currentMileage;
                        console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
                        if (carCollection.mileage >= mileageLimit) {
                            console.log(`Time to sell the ${car}!`);
                            let indexToRemove = finalCarsArr.indexOf(carCollection);
                            finalCarsArr.splice(indexToRemove,1)
                        }
                    }

                }
            }
        } else if (command === "Refuel") {
            let car = strings[1]
            let fuelToRefill = Number(strings[2])
            for (let carCollection of finalCarsArr) {
                if (carCollection.name === car) {
                    let currentFuel = carCollection.fuel;
                    let neededFuel = Math.min((fuelTankLimit - currentFuel), fuelToRefill)
                    console.log(`${car} refueled with ${neededFuel} liters`)
                    carCollection.fuel = currentFuel + neededFuel;
                }
            }
        } else if (command === "Revert") {
            let car = strings[1];
            let mileageToDecrease = Number(strings[2]);
            for (let carCollection of finalCarsArr) {
                if (carCollection.name === car) {
                    let currentMileage = carCollection.mileage;
                    currentMileage -= mileageToDecrease;
                    if (currentMileage <= 10000) {
                        currentMileage = 10000;
                        carCollection.mileage = currentMileage;
                    } else {
                        console.log(`${car} mileage decreased by ${mileageToDecrease} kilometers`)
                        carCollection.mileage = currentMileage;
                    }
                }
            }

        }
    }

    for (let cars of finalCarsArr) {
        console.log(`${cars.name} -> Mileage: ${cars.mileage} kms, Fuel in the tank: ${cars.fuel} lt.`)
    }
}
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])