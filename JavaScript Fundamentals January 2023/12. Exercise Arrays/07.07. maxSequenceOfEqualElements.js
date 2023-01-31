function maxSequenceOfEqualElements(array) {
    let newMax = 0;
    let maxSeq = 1;
    let resultIndex = 0;
    let finalResult = ""

    for (let i = 0; i < array.length - 1; i++) {
        if (array[i] === array[i + 1]) {
            maxSeq++
        } else {
            maxSeq = 1
        }
        if (maxSeq > newMax) {
            newMax = maxSeq;
            resultIndex = array[i]
        }
    }
    for (let i = 0; i < newMax; i++) {
        finalResult += resultIndex + " "
    }
    console.log(finalResult)
}
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])