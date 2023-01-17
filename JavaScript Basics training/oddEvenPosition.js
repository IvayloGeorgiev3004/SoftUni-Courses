function oddEvenPosition(input) {
    let totalNumbers = Number(input[0]);
    let currentNum = 0;
    let oddCounter = 0;
    let evenCounter = 0;
    let evenSum = 0;
    let oddSum = 0;
    let evenMax = Number.MIN_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenMin = Number.MAX_SAFE_INTEGER
    let oddMin = Number.MAX_SAFE_INTEGER

    for (let i = 1; i <= totalNumbers; i++) {
        currentNum = Number(input[i])
        if (i % 2 === 0) {
            evenCounter++
            evenSum += currentNum
            if (currentNum > evenMax) {
                evenMax = currentNum
            }
            if (currentNum < evenMin) {
                evenMin = currentNum
            }
        } else {
            oddCounter++
            oddSum += currentNum
            if (currentNum > oddMax) {
                oddMax = currentNum
            }
            if (currentNum < oddMin) {
                oddMin = currentNum
            }
        }

    }

    if (evenCounter === 0 && oddCounter === 0) {
        oddSum = 0;
        evenSum = 0;
        console.log(`OddSum=${oddSum.toFixed(2)},`)
        console.log(`OddMin=No,`)
        console.log(`OddMax=No,`)
        console.log(`EvenSum=${evenSum.toFixed(2)},`)
        console.log(`EvenMin=No,`)
        console.log(`EvenMax=No`)
    } else if (evenCounter === 0) {
        evenSum = 0;
        console.log(`OddSum=${oddSum.toFixed(2)},`)
        console.log(`OddMin=${oddMin.toFixed(2)},`)
        console.log(`OddMax=${oddMax.toFixed(2)},`)
        console.log(`EvenSum=${evenSum.toFixed(2)},`)
        console.log(`EvenMin=No,`)
        console.log(`EvenMax=No`)

    } else if (oddCounter === 0) {
        oddSum = 0;
        console.log(`OddSum=${oddSum.toFixed(2)},`)
        console.log(`OddMin=No,`)
        console.log(`OddMax=No,`)
        console.log(`EvenSum=${evenSum.toFixed(2)},`)
        console.log(`EvenMin=${evenMin.toFixed(2)},`)
        console.log(`EvenMax=${evenMax.toFixed(2)}`)
    } else {
        console.log(`OddSum=${oddSum.toFixed(2)},`)
        console.log(`OddMin=${oddMin.toFixed(2)},`)
        console.log(`OddMax=${oddMax.toFixed(2)},`)
        console.log(`EvenSum=${evenSum.toFixed(2)},`)
        console.log(`EvenMin=${evenMin.toFixed(2)},`)
        console.log(`EvenMax=${evenMax.toFixed(2)}`)
    }
}
oddEvenPosition([6,
    2,
    3,
    5,
    4,
    2,
    1])