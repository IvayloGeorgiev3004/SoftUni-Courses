function primePairs(input) {
    let firstPair = Number(input[0]);
    let secondPair = Number(input[1]);
    let differenceFirstPair = Number(input[2]);
    let differenceSecondPair = Number(input[3]);
    let isPrime = true;
    let isPrime2 = true;

    let firstPairCount = firstPair + differenceFirstPair;
    let secondPairCount = secondPair + differenceSecondPair;

    for (let i = firstPair; i <= firstPairCount; i++) {
        for (let k = 2; k < i; k++) {
            isPrime = true;
            if (i % k === 0) {
                isPrime = false;
                break;
            }
        }
        for (let j = secondPair; j <= secondPairCount; j++) {
            for (let l = 2; l < j; l++) {
                isPrime2 = true;
                if (j % l === 0) {
                    isPrime2 = false;
                    break;
                }
            }
            if (isPrime === true && isPrime2 === true) {
                console.log(`${i}${j}`)
            }
        } 
        
    }

}

primePairs([10, 20, 5, 5])
