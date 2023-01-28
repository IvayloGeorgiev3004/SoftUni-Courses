function maxSequenceOfEqualElements(array) {
    let equalElCounter = 1;
    let newMax = Number.MIN_SAFE_INTEGER;
    let finalResult = 0;
    let newArray = []
    for (let i = 0; i < array.length - 1; i++) {

        if (array[i] === array[i + 1]) {
            equalElCounter++
        } else {
            equalElCounter = 1;
        }

        if (equalElCounter > newMax) {
            newMax = equalElCounter;
            finalResult = array[i]
        }
    }
    for (let j = 0; j < newMax; j++) {
        newArray.push(finalResult)
    }
    console.log(newArray.join(" "))
}

maxSequenceOfEqualElements([1, 1, 3, 3, 2, 2, 2])
/* console.log(`------------------------------------`)
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])
console.log(`------------------------------------`)
maxSequenceOfEqualElements([4, 4, 4, 4])
console.log(`------------------------------------`)
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3]) */
