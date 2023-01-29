function equalSums(array) {
    let flag = true;
    for (let i = 0; i < array.length; i++) {
        let sum1 = 0;
        let sum2 = 0;
        for (let j = i + 1; j < array.length; j++) {
            sum1 += array[j]
            if (j >= array.length) {
                sum1 = 0;
            }
        }
        for (let k = i - 1; k >= 0; k--) {
            sum2 += array[k]

        }
        if (sum1 === sum2) {
            flag = false;
            console.log(i)
        }
    }
    if (flag === true) {
        console.log("no")
    }
}
equalSums([1, 2, 3, 3])