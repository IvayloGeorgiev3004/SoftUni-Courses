function reverseAnArrayOfNumbers(n, arrOfNumbers) {
    let arrNew = [];

    for (let i = n - 1; i >= 0; i--) {
        arrNew.push(arrOfNumbers[i])

    }
    console.log(arrNew.join(" "))
}
reverseAnArrayOfNumbers(4, [-1, 20, 99, 5])