function findLastKNumbers(sequence, sumElements) {
    let finalResArr = new Array(1).fill(1)

    for (let i = 1; i < sequence; i++) {
        let sum = 0;
        let startIndex = Math.max(0, (i - sumElements))
        for (let j = startIndex; j < finalResArr.length; j++) {
            sum += finalResArr[j]
        }
        finalResArr.push(sum)
    }
    return finalResArr
}
console.log(findLastKNumbers(6, 3))