function findOdd(arrOfNumbers) {
    let finalResultsArray = new Array()

    arrOfNumbers.forEach((element, index) => {
        if (index % 2 !== 0) {
            finalResultsArray.push(element)
        }
    });
    let finalRes = finalResultsArray.map(element => element * 2).reverse()

    return finalRes.join(" ")
}
findOdd([3, 0, 10, 4, 7, 3])