function mergeArrays(array1, array2) {
    let newArr = []

    for (let i = 0; i < array1.length; i++) {
        if (i % 2 === 0) {
            array1[i] = Number(array1[i])
            array2[i] = Number(array2[i])
            newArr.push(array1[i] + array2[i])
        } else {
            newArr.push(array1[i] + array2[i])
        }
    }
    console.log(newArr.join(" - "))
}
mergeArrays(['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11'])
console.log(`--------------------------------`)
mergeArrays(['13', '12312', '5', '77', '4'],
    ['22', '333', '5', '122', '44'])