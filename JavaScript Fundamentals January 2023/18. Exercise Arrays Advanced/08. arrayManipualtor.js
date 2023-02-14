function arrayManipulator(array, commands) {

    for (let command of commands) {
        let manipulations = command.split(" ")

        if (manipulations.indexOf(`add`) !== -1) {
            let indexToAdd = Number(manipulations[1])
            let elementToAdd = Number(manipulations[2])
            array.splice(indexToAdd, 0, elementToAdd)

        } else if (manipulations.includes("addMany")) {
            manipulations.shift();
            let fromIndexToAdd = Number(manipulations.shift())
            let elementsToAdd = [];
            manipulations.map(a => elementsToAdd.push(Number((a))))
            for (let i = 0; i < elementsToAdd.length; i++) {
                array.splice(fromIndexToAdd, 0, elementsToAdd[elementsToAdd.length - i - 1])
            }

        } else if (manipulations.includes('contains')) {
            let elementToSearch = Number(manipulations[1])
            console.log(array.indexOf(elementToSearch) === -1 ? "-1" : array.indexOf(elementToSearch))

        } else if (manipulations.includes(`remove`)) {
            let indexToRemove = Number(manipulations[1])
            array.splice(indexToRemove, 1)

        } else if (manipulations.includes(`shift`)) {
            let shiftingElements = Number(manipulations[1])
            for (let j = 0; j < shiftingElements; j++) {
                array.push(array.shift())

            }

        } else if (manipulations.includes(`sumPairs`)) {
            let sumArray = [];
            let numToPush = 0;
            while (array.length > 0) {
                if (array.length === 1) {
                    sumArray.push(array.shift())
                } else {
                    numToPush = array.shift() + array.shift()
                    sumArray.push(numToPush);
                }
            }
            array = sumArray;
        } else if (manipulations.includes(`print`)) {
            console.log(`[ ${array.join(", ")} ]`)
        }

    }


}
arrayManipulator([1, 2, 3, 4, 5],
    ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])

// let arr = [1, 2, 3, 4, 5, 6, 7]
// let sumArray = [];
// let numToPush = 0;
// while (arr.length > 0) {
//     if (arr.length === 1) {
//         sumArray.push(arr.shift())
//     } else {
//         numToPush = arr.shift() + arr.shift()
//         sumArray.push(numToPush)
//     }

// }


// debugger


