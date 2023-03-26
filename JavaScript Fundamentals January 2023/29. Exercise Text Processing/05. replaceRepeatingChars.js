function replaceRepeatingChars(string) {

    let finalResult = ""
    let currentChar = ""
    for (let char of string) {
        if (currentChar !== char) {
            finalResult += char;
        }
        currentChar = char
    }
    console.log(finalResult)
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')


