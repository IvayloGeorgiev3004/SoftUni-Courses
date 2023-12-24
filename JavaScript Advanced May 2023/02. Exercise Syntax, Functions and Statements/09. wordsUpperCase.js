function wordsUpperCase(input) {
    let wordsArr = input.split(" ").map(word => word = word.toUpperCase())
    let regex = /\b\w+\b/g
    let final = wordsArr.join(" ")
    final = final.match(regex).join(", ")
    console.log(final)

}
// wordsUpperCase('Functions in JS can be nested, i.e. hold other, Ajde functions....')
wordsUpperCase('function')
// wordsUpperCase('hello')