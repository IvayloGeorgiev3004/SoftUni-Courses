function censoredWords(sentence, wordToCensor) {
    while (sentence.includes(wordToCensor)) {
        sentence = sentence.replace(wordToCensor, "*".repeat(wordToCensor.length))
    }
    console.log(sentence)
}
censoredWords('Find the hiddensafafasf word, hidden in there', 'hidden')

