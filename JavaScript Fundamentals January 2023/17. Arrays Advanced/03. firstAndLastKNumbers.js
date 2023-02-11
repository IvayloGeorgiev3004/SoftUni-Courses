function firstAndLastKNumbers(array) {
    let numberOfElements = array[0]
    let slicedArray = array.slice(1)
    console.log(slicedArray.slice(0, numberOfElements).join(" "))
    slicedArray.reverse()
    console.log(slicedArray.slice(0, numberOfElements).reverse().join(" "))
}
firstAndLastKNumbers([3,
    6, 7, 8, 9])