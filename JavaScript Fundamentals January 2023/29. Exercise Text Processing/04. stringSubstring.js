function stringSubstring(word, text) {
    let textArr = text.split(" ")
    let wordToLowerCase = word.toLowerCase()
    let trigger = false;

    for (let singleWords of textArr) {
        singleWords = singleWords.toLowerCase()
        if (singleWords === wordToLowerCase) {
            console.log(word)
            trigger = true;
            break;
        }
    }

    if (trigger === false) {
        console.log(`${word} not found!`)
    }
}
stringSubstring('python',
    'JavaScript is the best programming language')

function stringSubstring(word, text) {

    let newWord = word.toLowerCase()
    let newText = text.toLowerCase()
    newText.includes(newWord)
    if (newText.includes(newWord)) {
        console.log(word)
    } else {
        console.log(`${word} not found!`)
    }

}
stringSubstring('python',
    'pythonn is the best programming language')