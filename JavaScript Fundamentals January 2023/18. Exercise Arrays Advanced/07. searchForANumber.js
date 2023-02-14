function searchForANumber(firstArray, secondArray) {
    let slicedArray = []
    let elementsToTake = secondArray.shift()
    let elementsToDelete = secondArray.shift()
    let numberToSearch = secondArray.shift()

    slicedArray = firstArray.slice(0, elementsToTake)
    slicedArray = slicedArray.slice(elementsToDelete)

    let finalArray = slicedArray.filter(a => {
        if (a === numberToSearch) {
            return numberToSearch
        }
    })

    return `Number ${numberToSearch} occurs ${finalArray.length} times.`
}
searchForANumber([5, 2, 3, 4, 1, 6],
    [5, 2, 3])