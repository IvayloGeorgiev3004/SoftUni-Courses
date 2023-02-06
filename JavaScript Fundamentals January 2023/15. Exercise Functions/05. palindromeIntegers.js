function palindromeIntegers(array) {
    let functionResult = ""
    for (let i = 0; i < array.length; i++) {
        let newArray = []
        let buff = ""
        newArray.push(array[i])
        let arrayToString = ""
        arrayToString = newArray[0].toString()

        for (let j = arrayToString.length - 1; j >= 0; j--) {
            buff += arrayToString[j]

        }
        if (arrayToString === buff) {
            functionResult = "true";
        } else {
            functionResult = "false"
        }
        console.log(functionResult)
    }

}
console.log(palindromeIntegers([123, 323, 421, 121]))