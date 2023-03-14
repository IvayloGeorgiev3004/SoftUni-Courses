function piccolo(array) {
    let parking = new Set()

    array.forEach(element => {
        let [command, carNumber] = element.split(", ")
        switch (command) {
            case "IN":
                if (!parking.has(carNumber)) {
                    parking.add(carNumber)
                }
                break;
            case "OUT":
                if (parking.has(carNumber)) {
                    parking.delete(carNumber)
                }
                break;
        }

    });

    let sorted = Array.from(parking).sort((car1, car2) => {
        return car1.localeCompare(car2)
    })
    sorted.forEach(element => console.log(element))

}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'])