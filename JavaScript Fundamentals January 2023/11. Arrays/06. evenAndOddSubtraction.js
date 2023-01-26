/* function evenAndOddSubtraction(array) {
    let evenSum = 0;
    let oddSum = 0;
    let diffSum = 0;

    for (let i = 0; i < array.length; i++) {
        if (Number(array[i]) % 2 === 0) {
            evenSum += array[i]
        } else {
            oddSum += array[i]
        }
    }
    diffSum = evenSum - oddSum;
    console.log(diffSum)
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6]) */


function evenAndOddSubtraction(array) {
    let evenSum = 0;
    let oddSum = 0;
    let diffSum = 0;

    for (let i = 0; i < array.length; i++) {
        array[i] = Number(array[i])
    }
    for (let num of array) {
        if (num % 2 === 0) {
            evenSum += num
        } else {
            oddSum += num
        }
    }
}
evenAndOddSubtraction([1, 2, 3, 4, 5, 6])