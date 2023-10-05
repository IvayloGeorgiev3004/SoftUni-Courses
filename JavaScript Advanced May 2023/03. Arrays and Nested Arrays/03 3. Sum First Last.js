function calculateSum(arrOfStrings) {
    let sum = 0;

    arrOfStrings = arrOfStrings
        .map((a => a = Number(a)))
        .forEach((element, index) => {
            if (index === 0 || index === arrOfStrings.length - 1) {
                sum += element
            }
        })

    return sum

}
console.log(calculateSum(['20', '30', '40']))