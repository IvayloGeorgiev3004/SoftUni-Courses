function maxNumber(array) {
    array.push(0)
    let maxNumber = Number.MIN_SAFE_INTEGER;
    let newMax2 = Number.MIN_SAFE_INTEGER;
    let newArray = [];
    for (let i = 0; i < array.length - 1; i++) {
        maxNumber = array[i]

        for (let j = i + 1; j < array.length; j++) {
            if (array[j] > newMax2) {
                newMax2 = array[j]
            }
        }
        if (maxNumber > newMax2) {
            newArray.push(maxNumber)
        }
        newMax2 = 0
    }
    console.log(newArray.join(" "))
}


maxNumber([27, 19, 42, 2, 13, 45, 48])