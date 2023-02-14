function bombNumbers(fieldArray, secondArray) {

    let specialNumber = secondArray[0];
    let power = secondArray[1]

    while (fieldArray.indexOf(specialNumber) !== -1) {
        let index = fieldArray.indexOf(specialNumber)
        if (index !== -1) {
            if (power === 0) {
                fieldArray.splice(index, 1)
                continue;
            }
            if (index - power <= 0) {
                fieldArray.splice(0, (power + power) + 1)
            } else {
                fieldArray.splice(index - power, (power + power) + 1)
            }

        }

    }
    console.log(fieldArray.reduce((a, b) => a + b, 0))
}
bombNumbers([1, 2, 1, 1, 2, 1, 1, 2, 2, 1], [2,0])


function bombNumbers2(sequence, bomb) {
    let specialNumber = bomb[0];
    let bombPower = bomb[1];
 
    while (sequence.includes(specialNumber)) {
        let index = sequence.indexOf(specialNumber);
        let elementsToRemove = bombPower * 2 + 1;
        let startIndex = index - bombPower;
 
        if (startIndex < 0) {
            elementsToRemove += startIndex;
            startIndex = 0;
        }
        sequence.splice(startIndex, elementsToRemove);
    }
    console.log(sequence.reduce((a, b) => a + b, 0));
}
bombNumbers2([1, 2, 1, 1, 2, 1, 1, 2, 2, 1], [2,0])