function triplesOfLatinLetters(number) {
    for (let i = 0; i < number; i++) {
        for (let j = 0; j < number; j++) {
            for (let k = 0; k < number; k++) {
                /*  let char1 = String.fromCharCode(97 + i)
                 let char2 = String.fromCharCode(97 + j)
                 let char3 = String.fromCharCode(97 + k) */
                let char4 = String.fromCharCode('a'.charCodeAt(0) + i)
                let char5 = String.fromCharCode('a'.charCodeAt(0) + j)
                let char6 = String.fromCharCode('a'.charCodeAt(0) + k)
                console.log(`${char4}${char5}${char6}`)
            }
        }
    }

}
triplesOfLatinLetters(3)

function test(test1, test2, test3) {

    let word = String.fromCharCode(test1)
    let word2 = String.fromCharCode(test2)
    let word3 = String.fromCharCode(test3)


    let word1 = String.fromCharCode("b".charCodeAt(0))
    let finalWord = word + word2 + word3



}
test(43, 78, 42)