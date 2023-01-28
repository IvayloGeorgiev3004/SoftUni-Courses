function equalSums(array) {
    let isEqual = false;
    for (let i = 0; i < array.length; i++) {
        let sum1 = 0
        let sum2 = 0;
        for (let j = i + 1; j < array.length; j++) {
            sum1 += Number(array[j])
            if (j >= array.length) {
                sum1 = 0;
            }
        }

        for (let k = i - 1; k >= 0; k--) {
            sum2 += Number(array[k])
            if (k < 0) {
                sum2 = 0;
            }
        }
        if (sum1 === sum2) {
            isEqual = true;
            console.log(`${i}`)
        }
    }
    if (isEqual === false) {
        console.log(`no`)
    }
}
equalSums([1, 2])