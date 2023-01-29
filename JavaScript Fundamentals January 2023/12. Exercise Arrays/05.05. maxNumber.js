function maxNumber(array) {
    let stringResult = "";
    for (let i = 0; i < array.length; i++) {
        let newMax1 = array[i]
        let newMax2 = Number.MIN_SAFE_INTEGER;
        for (let j = i + 1; j <= array.length; j++) {
            if (array[j] >= array[i]) {
                newMax2 = array[j]
            }
        }
        if (newMax1 > newMax2) {
            stringResult += " " + newMax1
        }

    }
    console.log(stringResult)
}
/* maxNumber([1, 4, 3, 2])
console.log(`-----------------------------------`) 
maxNumber([14, 24, 3, 19, 15, 17])
console.log(`-----------------------------------`) */
maxNumber([41, 41, 34, 20])
console.log(`-----------------------------------`)
maxNumber([27, 19, 42, 2, 13, 45, 48])