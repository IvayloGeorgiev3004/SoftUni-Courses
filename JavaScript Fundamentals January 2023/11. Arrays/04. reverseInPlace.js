function reverseInPlace(arrOfStrings) {

    let buffer = ""

    for (let i = arrOfStrings.length - 1; i >= 0; i--) {
        buffer += arrOfStrings[i] + " "

    }

    console.log(buffer.trim())

}
reverseInPlace(['abc', 'def', 'hig',

    'klm', 'nop'])