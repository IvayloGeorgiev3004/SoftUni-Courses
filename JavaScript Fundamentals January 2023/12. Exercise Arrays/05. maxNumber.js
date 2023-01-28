function maxNumber(array) {
    array.push(Number.MIN_SAFE_INTEGER)
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
        newMax2 = Number.MIN_SAFE_INTEGER
    }
    console.log(newArray.join(" "))
}


maxNumber([0,0,0,0,0])