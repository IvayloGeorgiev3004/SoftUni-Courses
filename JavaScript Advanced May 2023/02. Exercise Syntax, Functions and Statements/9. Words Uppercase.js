function extractTextToUpperCase(string) {
    let patternRegExp = /\b\w+\b/g
    let matchArr = string.match(patternRegExp)
    let neededWord = ""

    for (const word of matchArr) {
        neededWord += `${word.toUpperCase()},`
    }
    neededWord = neededWord.split(",")
    neededWord.pop()
    console.log(neededWord.join(", "))
}
extractTextToUpperCase('Hi, how are you?')

function extractTextToUpperCase2(string) {
    let patternRegExp = /\b\w+\b/g;
    let matchArr = string.match(patternRegExp);

    let upperCaseWords = matchArr.map(word => word.toUpperCase());
    let formattedString = upperCaseWords.join(", ");
    console.log(formattedString);

}

extractTextToUpperCase2('Hi, how are you?');